const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    //mode: 'development',
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // __dirname aponta para a raiz
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin ({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css" 
        })
    ],
    module: {
        rules: [{
            //test: /\.css$/, // pega só css
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, // Vai extrair o css, ao invés de injetar na don como o style-loader
                //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url(), etc...
                'sass-loader',
            ]
        }]
    }
}