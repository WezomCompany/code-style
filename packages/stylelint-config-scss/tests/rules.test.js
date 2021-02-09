const fs = require('fs');
const path = require('path');
const stylelint = require('stylelint');
const config = require('../.stylelintrc.json');
const getFixtures = require('../../../utils/getFixtures');
const getExpectedProblemsCount = require('../../../utils/getExpectedProblemsCount');

describe('Rules', () => {
	const { valid, invalid } = getFixtures('tests/fixtures/*.scss');
	describe('Valid cases', () => {
		valid.forEach((file) => {
			const code = fs.readFileSync(file).toString('utf-8');
			const fileName = path.basename(file);
			describe(fileName, () => {
				let result;

				beforeEach(() => {
					result = stylelint.lint({ code, config });
				});

				test('did not error', () => {
					return result.then((data) => {
						expect(data.errored).toBeFalsy();
					});
				});
			});
		});
	});

	describe('Invalid cases', () => {
		invalid.forEach((file) => {
			const code = fs.readFileSync(file).toString('utf-8');
			const fileName = path.basename(file);
			describe(fileName, () => {
				let result;

				beforeEach(() => {
					result = stylelint.lint({ code, config });
				});

				const expectedErrorsCount = getExpectedProblemsCount(file, 'errors');
				if (typeof expectedErrorsCount === 'number') {
					test(`expect ${expectedErrorsCount} errors`, () => {
						return result.then((data) => {
							const errors = data.results[0].warnings.filter(
								(block) => block.severity === 'error'
							);
							expect(errors.length).toEqual(expectedErrorsCount);
						});
					});
				} else {
					test('did error', () => {
						return result.then((data) => expect(data.errored).toBeTruthy());
					});
				}
			});
		});
	});
});
