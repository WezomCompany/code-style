// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const glob = require('glob');
const fromCWD = require('from-cwd');

// -----------------------------------------------------------------------------
// utils
// -----------------------------------------------------------------------------

/**
 * @param {string} pkgRelativePath
 * @returns {{valid: string[], invalid: string[]}}
 */
module.exports = (pkgRelativePath) => {
	const pattern = fromCWD(pkgRelativePath);
	const cases = { valid: [], invalid: [] };
	return glob.sync(pattern).reduce((cases, file) => {
		const branch = file.includes('.invalid.')
			? 'invalid'
			: file.includes('.valid.')
			? 'valid'
			: null;
		if (typeof branch === 'string') {
			cases[branch].push(file);
		}
		return cases;
	}, cases);
};
