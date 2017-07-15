/*----------------------------------------------*\
  # 1. Required modules
\*----------------------------------------------*/
var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HTMLWebpackPlugin = require('html-webpack-plugin');



/*----------------------------------------------*\
  # 2. Config Variables
\*----------------------------------------------*/
/* ENTRY FILES */
const entry = './src/index.js',


    /* PLUGINS List */
    plugins = [
        // for js
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            mangle: true,
            compress: {
                warnings: true
            }
        }),

      // for css
      new ExtractTextPlugin('styles-[contenthash:10].css'),

      // for html
      new HTMLWebpackPlugin({
            template: 'index.html',
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                decodeEntities: true,
                html5: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeTagWhitespace: true,
                sortAttributes: true,
                sortClassName: true,
                trimCustomFragments: true,
                useShortDoctype: true
            }
        })
    ],

    /* Inner Config for cssLoader  */
    cssIdentifier = '[hash:base64:10]',
    postcssPlugins = [
      require('autoprefixer')(),
      require('cssnano')({
            preset: ['default']
        })
      ],
    cssLoader = ExtractTextPlugin.extract({
        use: [
            'css-loader?localIdentName=' + cssIdentifier,
            {
                loader: 'postcss-loader',
                options: {
                    plugins: postcssPlugins
                }
            }
        ]
    });




/*----------------------------------------------*\
  # 3. Configurations
\*----------------------------------------------*/
module.exports = {
    externals: {
        'underscore': '_'
    },
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        rules: [{

            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: '/node_modules/'

        }, {

            test: /\.(png|jpg|gif|svg)$/,
            loaders: ['url-loader?limit=10000&name=img/[hash:12].[ext]'],
            exclude: '/node_modules/'

        }, {

            test: /\.css$/,
            loaders: cssLoader,
            exclude: '/node_modules/'

        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './',
        filename: 'bundle.[hash:12].min.js'
    }
}
