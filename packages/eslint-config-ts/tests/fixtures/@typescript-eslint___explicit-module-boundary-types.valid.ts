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

// Allow arguments explicitly typed as any
export const arrowFn2 = (arg: any): string => `test ${arg}`;

// Class is not exported
class Test {
	method() {
		const x = 1 + 1;
	}
}

// allowDirectConstAssertionInArrowFunctions
export const bar = () => 1 as const;
export const func = (value: number) => ({ type: 'X', value } as const);
