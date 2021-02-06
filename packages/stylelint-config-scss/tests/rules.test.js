const fs = require('fs');
const path = require('path');
const stylelint = require('stylelint');
const config = require('../.stylelintrc.json');
const getFixtures = require('../../../utils/getFixtures');

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

				test('flags no warnings', () => {
					return result.then((data) =>
						expect(data.results[0].warnings).toHaveLength(0)
					);
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

				test('did error', () => {
					return result.then((data) => expect(data.errored).toBeTruthy());
				});
			});
		});
	});
});
