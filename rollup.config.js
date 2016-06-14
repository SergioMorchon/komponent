import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  format: 'umd',
  plugins: [ json(), babel() ],
  moduleName: 'komponent'
};