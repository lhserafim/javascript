const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // __dirname aponta para a raiz
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