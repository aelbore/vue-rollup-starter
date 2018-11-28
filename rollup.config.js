import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import bundleSize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const external = Object.keys(pkg.dependencies);
const isProduction = false

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
  input: 'src/main.js',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/bundle.js',
    format: 'umd'
  }
};
