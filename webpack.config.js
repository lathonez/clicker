var path = require('path');
const webpack = require('webpack');

module.exports = {
    debug: false,
    entry: [
        path.resolve('app/app.ts')
    ],
    output: {
        path: path.resolve('www/build/js'),
        filename: 'app.bundle.js'
    },
    devtool: 'cheap-module-source-map',
    plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
       'USER': JSON.stringify(process.env.USER)
    }
  })
],
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript',
            query: {
                doTypeCheck: true,
                resolveGlobs: false,
                externals: ["typings/index.d.ts"]
            },
            include: path.resolve('app'),
            exclude: /node_modules/
        }]
    },
    resolve: {
        alias: {
            '@angular': path.resolve('node_modules/@angular'),
        },
        extensions: ['', '.js', '.ts']
    }
};
