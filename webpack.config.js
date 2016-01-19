module.exports = {
    entry: "./src/index",
    devtool: 'source-map',
    output: {
        path: "./public",
        filename: "bundle.js"
    },
    module: {
    	loaders: [
		    {
		    	exclude: /(node_modules|bower_components)/,
		    	loader: 'babel'
		    },
		    {
		    	test: /\.hbs$/,
		    	loader: "handlebars-loader"
		    }
	  	]
  	},
  	resolve: {
  		extensions: ['', '.js', '.hbs']
  	}
}
