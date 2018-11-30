import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import bundleSize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const external = Object.keys(pkg.dependencies);
const isProduction = true;

const plugins = [
  resolve(),
  bundleSize(),
  vue({
    template: {
      isProduction,
      compilerOptions: { preserveWhitespace: false }
    },
    css: true,
  }),
  buble()
];

export default {
  external,
  plugins,
  input: [
    'src/main.js'
  ],
  output: [
    {
      globals: { 
        vue: 'Vue' 
      },
      dir: 'dist',
      format: 'umd',
      sourcemap: true
    }
  ] ,
  experimentalCodeSplitting: true,
};
