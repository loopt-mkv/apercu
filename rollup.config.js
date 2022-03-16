import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import html from '@web/rollup-plugin-html'
import sourcemaps from 'rollup-plugin-sourcemaps'
import flow from './rollupFlow.js'

export default (command) => {
  const isProduction = command.production
  delete command.production
  return {
    input: 'src/index.html',
    plugins: [
      json(),
      commonjs({ include: 'node_modules/**' }),
      !!isProduction && terser(),
      replace({
        'process.env.NODE_ENV': isProduction ? '"production"' : '"development"',
        preventAssignment: true,
      }),
      nodeResolve({
        browser: true,
      }),
      html(),
      sourcemaps(),
      flow(),
    ],
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
    },
  }
}
