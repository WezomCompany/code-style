const fs = require('fs');
const path = require('path');
const fromCWD = require('from-cwd');
const glob = require('glob');

/**
 * @param {string} folderPath
 * @return {string}
 * @throws
 */
const getConfigPath = (folderPath) => {
	switch (path.basename(folderPath)) {
		case 'stylelint-config':
			return path.join(folderPath, '.stylelintrc.json');
	}
	throw new Error('UNKNOWN CONFIG!!!');
}

/**
 * @param {string} folderPath
 * @return {Object}
 * @throws
 */
const getConfigRules = (folderPath) => {
	const configPath = getConfigPath(folderPath);
	const config = JSON.parse(fs.readFileSync(configPath).toString());
	return config.rules;
}

/**
 * @param {string} folderPath
 * @return {string}
 */
const getRulesContent = (folderPath) => {
	const rulesPath = path.join(folderPath, 'RULES.md');
	return fs.readFileSync(rulesPath).toString();
}

/**
 * @param {string} folderPath
 * @return {Object}
 */
const getAllFixturesPaths = (folderPath) => {
	const fixturesPath = path.join(folderPath, 'tests/fixtures/*');
	return glob.sync(fixturesPath).reduce((acc, filepath) => {
		const key = path.basename(filepath, path.extname(filepath));
		acc[key] = filepath;
		return acc;
	}, {});
}

(function () {
	const folderPath = fromCWD();
	const configRules = getConfigRules(folderPath);
	const rulesContent = getRulesContent(folderPath);
	const fixturesPaths = getAllFixturesPaths(folderPath);
	console.log(configRules);
})();
