//configurar nuestro path
const path = require('path');
//plugin que instalamos
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    //entrada , cual va a ser mi elemento principal, punto de entrada
    entry: './src/index.js',
    //a donde quiero empujar mi proyecto ouput
    output : {
        //saber donde me encuentro, directorio donde esta el proyecto
        //y ahi crea una carpeta dist donde se va a guardar nuestro
        //proyecto
        path : path.resolve(__dirname, 'dist'),
        //lamar a mi compilado de JS una asignacion de nombre, como se va
        //a construir
        filename : 'bundle.js',
    },
    //configuracion para saber con que archivos vamos a trabajar
    resolve : {
        //extenciones con las cuales estamos trabajando
        extensions: ['.js', '.jsx']
    },
    //modulo donde vamos a tener las reglas de negocio del proyecto
    module : {
        //definimos las reglas por medio de arreglos
        rules: [
            {
                //creamos expresion regular para identificar estos
                //archivos
                test:/\.(js|jsx)$/,
                //vamos a excluir la carpeta de node modules
                exclude: /node_modules/,
                //y vamos a utilizar el loder que utilizamos en babel
                use: {
                    loader: "babel-loader"
                }
            },
            //identificar los archivos html de nuestro proyecto, entenderlos
            //y prepararlos
            {
                test: /\.html$/,
                //uso del loader que previamente instalamos
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    //agregar plugin que instalamos para entender el archivo index y el que 
    //vamos a generar en la carpeta dist para enviar a produccion
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            //se va a empujar como
            filename: "./index.html"
        })
    ]
}