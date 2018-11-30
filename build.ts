import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import bundleSize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';

import { rollup } from 'rollup';

const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);
const isProduction = true;

const rollupConfig = {
  inputOptions: {
    plugins: [
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
    ]
  },
  outputOptions: {
    
  }
}

function rollupBuild({ inputOptions, outputOptions }) {
  return rollup(inputOptions).then(bundle => bundle.write(outputOptions));
}

rollupBuild(rollupConfig);