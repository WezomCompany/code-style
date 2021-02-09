/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars */
/* __AUTO-TEST-EXPECT-ERRORS-COUNT=8__ */
/* __AUTO-DOC-PRINT-AFTER__ */
// Should indicate that no value is returned (void)
export function test() {
	const x = 1 + 1;
}

// Should indicate that a number is returned
export default function () {
	return 1;
}

// Should indicate that a string is returned
export const arrowFn1 = () => 'test';

// All arguments should be typed
export const arrowFn2 = (arg): string => `test ${arg}`;
export const arrowFn3 = (arg: any): string => `test ${arg}`;

export class Test {
	// Should indicate that no value is returned (void)
	method() {
		const x = 1 + 1;
	}
}
