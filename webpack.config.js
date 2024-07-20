const path = require('path');

module.exports = {
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'public'),
		},
		compress: true,
		port: 3000,
	},
};