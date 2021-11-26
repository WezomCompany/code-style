// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const fs = require('fs');

// -----------------------------------------------------------------------------
// utils
// -----------------------------------------------------------------------------

/**
 * @param {string} filepath
 * @param {'errors'|'warns'} type
 * @returns {null|number}
 */
module.exports = (filepath, type) => {
	const reqExp =
		type === 'errors' ? /__AUTO-TEST-EXPECT-ERRORS-COUNT=(\d+)__/ : /__AUTO-TEST-EXPECT-WARNS-COUNT=(\d+)__/;
	const matches = fs.readFileSync(filepath).toString().match(reqExp);
	if (matches !== null) {
		const count = parseInt(matches[1]);
		if (!Number.isNaN(count)) {
			return count;
		}
	}
	return null;
};
