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
};

/**
 * @param {string} folderPath
 * @return {Object}
 * @throws
 */
const getConfigRules = (folderPath) => {
	const configPath = getConfigPath(folderPath);
	const config = JSON.parse(fs.readFileSync(configPath).toString());
	return config.rules;
};

/**
 * @param {string} folderPath
 * @return {Object}
 */
const getAllFixturesPaths = (folderPath) => {
	const fixturesPath = path.join(folderPath, 'tests/fixtures/*');
	return glob.sync(fixturesPath).reduce((acc, filepath) => {
		const ext = path.extname(filepath);
		acc[path.basename(filepath, ext)] = filepath;
		return acc;
	}, {});
};

/**
 * @param {string} folderPath
 * @return {string}
 */
const getRulesContent = (folderPath) => {};

/**
 * @param {Object} configRules
 * @return {string}
 */
const generateTOC = (configRules) => {
	return Object.keys(configRules)
		.map((rule) => {
			return `1. [${rule}](#${rule})`;
		})
		.join('\n');
};

/**
 * @param {string} rule
 * @param {Object} fixturesPaths
 * @return {(string|undefined)[]}
 */
const getFixtureRuleContent = (rule, fixturesPaths) => {
	const getRuleFixtureCode = (field, validCase) => {
		if (fixturesPaths.hasOwnProperty(field)) {
			const filepath = fixturesPaths[field];
			if (fs.existsSync(filepath)) {
				const code = fs.readFileSync(filepath).toString();
				const lang = path.extname(filepath).slice(1);
				return [
					`\n${validCase ? '👍 OK' : '🚧 Avoid'}\n`,
					`\`\`\`${lang}\n${code}\`\`\``
				].join('\n');
			}
		}
		return undefined;
	};

	return [
		getRuleFixtureCode(rule + '.invalid', false),
		getRuleFixtureCode(rule + '.valid', true)
	];
};

/**
 * @param {Object} configRules
 * @param {Object} fixturesPaths
 * @return {string}
 */
const generateRulesDescription = (configRules, fixturesPaths) => {
	return Object.entries(configRules)
		.map(([rule, value]) => {
			const block = ['', `### ${rule}`, ''];
			if (value === null) {
				block.push('Rule disabled');
			} else {
				const val = typeof value === 'string' ? '"' + value + '"' : value;
				block.push(`Value: \`${val}\``);
				block.push(...getFixtureRuleContent(rule, fixturesPaths));
			}

			return block.join('\n');
		})
		.join('\n\n---\n\n');
};

/**
 * @param {string} rulesPath
 * @param {string} toc
 * @param {string} rulesDescriptions
 */
const updateRulesContent = (rulesPath, toc, rulesDescriptions) => {
	const rulesContent = fs
		.readFileSync(rulesPath)
		.toString()
		.replace(
			/\[comment]: <> \(TOC-START\)((.|\n)+)\[comment]: <> \(TOC-END\)/gm,
			`[comment]: <> (TOC-START)\n\n${toc}\n\n[comment]: <> (TOC-END)`
		)
		.replace(
			/\[comment]: <> \(RULES-START\)((.|\n)+)\[comment]: <> \(RULES-END\)/gm,
			`[comment]: <> (RULES-START)\n\n${rulesDescriptions}\n\n[comment]: <> (RULES-END)`
		);
	fs.writeFileSync(rulesPath, rulesContent);
};

(function () {
	const folderPath = fromCWD();
	const configRules = getConfigRules(folderPath);
	const fixturesPaths = getAllFixturesPaths(folderPath);
	const toc = generateTOC(configRules);
	const rulesDescriptions = generateRulesDescription(configRules, fixturesPaths);
	const rulesPath = path.join(folderPath, 'RULES.md');
	updateRulesContent(rulesPath, toc, rulesDescriptions);
})();
