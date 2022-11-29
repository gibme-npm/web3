'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        Web3: './src/web3.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        library: {
            type: 'umd'
        }
    },
    optimization: {
        usedExports: true,
        sideEffects: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            fs: false,
            path: false,
            http: require.resolve('stream-http'),
            url: require.resolve('url/'),
            https: require.resolve('https-browserify'),
            zlib: require.resolve('browserify-zlib'),
            assert: require.resolve('assert/'),
            stream: require.resolve('stream-browserify'),
            os: require.resolve('os-browserify'),
            buffer: require.resolve('buffer'),
            crypto: require.resolve('crypto-browserify')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer']
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    target: 'web'
};
