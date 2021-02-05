/* eslint-disable @typescript-eslint/no-unused-vars */
/* __AUTO-DOC-PRINT-AFTER__ */
// Should indicate that no value is returned (void)
function test() {
	const x = 1 + 1;
}

// Should indicate that a number is returned
const fn = function () {
	return 1;
};

// Should indicate that a string is returned
const arrowFn = () => 'test';

class Test {
	// Should indicate that no value is returned (void)
	method() {
		const x = 1 + 1;
	}
}
