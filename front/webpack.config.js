const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');
const autoprefixer = require('autoprefixer');
const DotenvPlugin = require('webpack-dotenv-extended-plugin');
const { getIfUtils, removeEmpty, propIf } = require('webpack-config-utils');
const { CheckerPlugin } = require('awesome-typescript-loader')

const PORT = 3000;
const HOST = 'localhost'

const sourcePath = path.join(__dirname);
const appPath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './build');

module.exports = (env) => {
  const { ifDevelopment, ifProduction } = getIfUtils(env);

  return removeEmpty({
    entry: removeEmpty({
      app: removeEmpty([
        ifDevelopment(`webpack-dev-server/client?http://${HOST}:${PORT}`),
        ifDevelopment('webpack/hot/only-dev-server'),
        './src/index',
      ]),
    }),

    output: removeEmpty({
      filename: 'static/js/bundle-[hash:8].js',
      publicPath: '/',
      path: buildPath,
    }),

    devtool: propIf(env == 'development', 'eval', 'source-map'),

    devServer: ifDevelopment({
      inline: true,
      host: HOST,
      port: PORT,
      historyApiFallback: true,
      hot: true,
      disableHostCheck: true,
      clientLogLevel: "error",
      open: true,
      overlay: {
        warnings: true,
        errors: true
      }
    }),

    resolve: {
      // extensions: ['.ts', '.tsx', '.js', '.jsx'],
      extensions: ['.js', '.jsx'],
      modules: [
        path.resolve(sourcePath, 'node_modules'),
        appPath
      ],
    },

    node: {
      fs: 'empty'
    },

    module: {
      rules: removeEmpty([
        {
          test: /\.(js|jsx)$/,
          // Use the include field to only apply the loader
          // modules that actually need to be transformed by it
          include: appPath,
          use: {
            loader: 'babel-loader',
            options: removeEmpty({
              // don't use .babelrc config
              babelrc: false,
              presets: [
                ["env", {
                  "targets": {
                    "browsers": ["last 2 versions", "safari >= 7"]
                  }
                }],
                "react",
                "stage-0"
              ],
              plugins: ifDevelopment(["react-hot-loader/babel"]),
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: ifDevelopment(true),
              // Do not include superfluous whitespace characters and line terminators
              compact: ifProduction(true),
            }),
          }
        },
        {
          test: /\.(ts|tsx)$/,
          include: path.join(__dirname),
          use: {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              babelOptions: removeEmpty({
                /* Important line */
                // don't use .babelrc config
                babelrc: false,
                presets: [
                  ["env", { "targets": "last 2 versions, ie 11", "modules": false }],
                  "react", "stage-0"
                ],
                plugins: ifDevelopment(["react-hot-loader/babel"]),
              }),


              // babelrc: false,
              // presets: [
              //   ["env", {
              //     "targets": {
              //       "browsers": ["last 2 versions", "safari >= 7"]
              //     }
              //   }],
              //   "react",
              //   "stage-0"
              // ],
              // plugins: ifDevelopment(["react-hot-loader/babel"]),
              // // This is a feature of `babel-loader` for webpack (not Babel itself).
              // // It enables caching results in ./node_modules/.cache/babel-loader/
              // // directory for faster rebuilds.
              // cacheDirectory: ifDevelopment(true),
              // // Do not include superfluous whitespace characters and line terminators
              // compact: ifProduction(true),
            },
          }
        },
        ifProduction({
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader',
              'less-loader'
            ]
          })
        }),
        ifDevelopment({
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader?sourceMap',
            'postcss-loader',
            'less-loader?sourceMap'
          ]
        }),
        // загружает файлы в base64, если они < limit
        // если >, то просто вызывается file-loader
        {
          test: /\.(jpg|jpeg|gif|png|svg)$/,
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/media/img/',
            limit: 10000
          }
        },
        // обработка шрифтов
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'static/media/fonts/[name].[ext]'
          }
        },
        {
          test: /\.md$/,
          loader: 'file-loader',
          options: {
            name: 'static/media/md/[name].[ext]'
          }
        }
        // {
        //   loader: require.resolve('file-loader'),
        //   // Exclude `js` files to keep "css" loader working as it injects
        //   // it's runtime that would otherwise processed through "file" loader.
        //   // Also exclude `html` and `json` extensions so they get processed
        //   // by webpacks internal loaders.
        //   exclude: [/\.js$/, /\.html$/, /\.json$/],
        //   options: {
        //     name: 'static/media/[name].[hash:8].[ext]',
        //   },
        // },
      ])
    },

    plugins: removeEmpty([
      // проверка, чтобы пути были точные
      ifDevelopment(new CaseSensitivePathsWebpackPlugin()),
      // плагин перезагрузки "на лету"
      ifDevelopment(new webpack.HotModuleReplacementPlugin()),
      // чистит папку build перед новой сборкой
      ifProduction(new CleanWebpackPlugin(buildPath)),
      // минификация js файлов
      ifProduction(new UglifyJsPlugin({
        // parallelization can speedup build significantly
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          mangle: { safari10: true },
          output: { comments: false }
        }
      })),
      // собирает все необходимые либы в один файл
      // ifProduction(new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      //   filename: 'static/js/vendor.bundle.js'
      // })),
      // необходим для инжекции css в html
      ifProduction(new ExtractTextPlugin({ filename: 'static/css/bundle.css' })),
      // генерация html из шаблона
      new HtmlWebpackPlugin(removeEmpty({
        path: propIf(env == 'development', appPath, buildPath),
        hash: ifDevelopment(true),
        template: path.join(appPath, 'index.html'),
        filename: 'index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      })),
      new CheckerPlugin(),
      // дополнительные опции для плагинов
      new webpack.LoaderOptionsPlugin(removeEmpty({
        minimize: ifProduction(true),
        debug: ifProduction(false),
        options: {
          postcss: [
            autoprefixer({
              browsers: ['last 3 version', 'ie >= 10']
            })
          ],
          context: sourcePath
        }
      })),
      // отображение относительного пути модуля при hmr
      ifDevelopment(new webpack.NamedModulesPlugin()),
      // удаляет лишние локали из библиотеки moment - очень облегчает сборку
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // определение переменных для среды (доступны в коде)
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      new DotenvPlugin({
        defaults: './config/.env.default',
        path: './config/.env.local'
      }),
      // копирование папок и файлов
      new CopyWebpackPlugin([
        {
          from: 'src/assets/legal',
          to: 'static/media/legal',
          toType: 'dir'
        },
        {
          from: 'src/assets/img',
          to: 'static/media/img',
          toType: 'dir'
        },
        {
          from: 'src/assets/favicons',
          to: 'static/media/favicons',
          toType: 'dir'
        },
      ],
        {
          debug: 'info'
        })
    ])
  })
}
