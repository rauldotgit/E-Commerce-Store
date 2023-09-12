// eslint-disable-next-line
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-essential',
		'prettier'
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'vue'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': 0,
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
	}
}
