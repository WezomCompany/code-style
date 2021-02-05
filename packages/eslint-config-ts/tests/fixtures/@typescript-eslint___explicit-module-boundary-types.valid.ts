/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars */
/* __AUTO-DOC-PRINT-AFTER__ */
// Function is not exported
function test() {
	const x = 1 + 1;
}

// A return value of type number
export const fn = function (): number {
	return 1;
};

// A return value of type string
export const arrowFn1 = (arg: string): string => `test ${arg}`;

// All arguments should be typed
export const arrowFn2 = (arg: string): string => `test ${arg}`;
export const arrowFn3 = (arg: unknown): string => `test ${arg}`;

// Class is not exported
class Test {
	method() {
		const x = 1 + 1;
	}
}
