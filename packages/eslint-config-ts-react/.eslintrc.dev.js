const config = require('./.eslintrc.json');

module.exports = {
	...config,
	parserOptions: {
		project: './tsconfig.json',
	},
};
