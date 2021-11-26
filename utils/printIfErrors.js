/**
 * @param {Object} result
 * @param {number} result.errorCount
 * @param {{messages:{severity:number}[]}[]} result.results
 * @param result
 */
module.exports = ({ errorCount, results }) => {
	if (errorCount > 0) {
		console.log(results.map(({ messages }) => messages.filter(({ severity }) => severity === 2)));
	}
};
