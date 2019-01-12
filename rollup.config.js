import alias from 'rollup-plugin-strict-alias'
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import bundleSize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json';

import { terser } from "rollup-plugin-terser";

const external = Object.keys(pkg.dependencies);
const isProduction = true;

const plugins = [
  alias({
    vue: 'node_modules/vue/dist/vue.js'
  }),
  resolve(),
  bundleSize(),
  vue({
    template: {
      isProduction
    },
    css: true
  }),
  commonjs(),
  buble(),
  terser()
];

export default {
  external: [],
  plugins,
  input: [ 
    'src/main.js'
  ],
  output: [
    {
      globals: {},
      dir: 'dist',
      format: 'umd',
      sourcemap: true
    }
  ]
};
