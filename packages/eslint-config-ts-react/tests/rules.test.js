const path = require('path');
const eslint = require('eslint');
const getFixtures = require('../../../utils/getFixtures');
const getExpectedProblemsCount = require('../../../utils/getExpectedProblemsCount');
const printIfErrors = require('../../../utils/printIfErrors');

describe('Rules', () => {
	const cli = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: '.eslintrc.dev.js'
	});
	const { valid, invalid } = getFixtures('tests/fixtures/*.ts?(x)');
	describe('Valid cases', () => {
		valid.forEach((file) => {
			const fileName = path.basename(file);
			test(fileName, () => {
				const result = cli.executeOnFiles(file);
				printIfErrors(result);
				expect(result.errorCount).toEqual(0);
			});
		});
	});
	describe('Invalid cases', () => {
		invalid.forEach((file) => {
			const fileName = path.basename(file);
			describe(fileName, () => {
				const expectedErrorsCount = getExpectedProblemsCount(file, 'errors');
				if (typeof expectedErrorsCount === 'number') {
					test(`expect ${expectedErrorsCount} errors`, () => {
						const result = cli.executeOnFiles(file);
						expect(result.errorCount).toEqual(expectedErrorsCount);
					});
				} else {
					test('did error', () => {
						const result = cli.executeOnFiles(file);
						expect(result.errorCount).toBeGreaterThan(0);
					});
				}
			});
		});
	});
});
