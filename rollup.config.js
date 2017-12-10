import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss';

export default [
  //js
  {
    input: 'src/index.js',
    output: {
      file: 'build/index.js',
      format: 'cjs'
    },
    globals: {
      react: 'React'
    },
    plugins: [
      resolve({
        extensions: [ '.js', '.jsx' ],
      }),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [['es2015', { loose: true, modules: false }], 'stage-1', 'react'],
        plugins: ['external-helpers'].concat(
          process.env.NODE_ENV === 'production' ? ['transform-react-remove-prop-types'] : []
        )
      }),
      commonjs({
        include: /node_modules/
      }),
    ],
    external: ['react']
  },
  //sass
  {
    input: 'scss/Skeleton.scss',
    output: {
      file: 'build/skeleton.js',
      format: 'cjs'
    },
    plugins: [
      scss({
        output: 'build/skeleton.css'
      })
    ]
  }
];


