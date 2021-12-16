/* eslint-disable @typescript-eslint/no-unused-vars */

export const blank = true;
/* __AUTO-DOC-PRINT-AFTER__ */

// No return value should be expected (void)
function test(): void {
	const x = 1 + 1;
}

// A return value of type number
const fn = function (): number {
	return 1;
};

// A return value of type string
const arrowFn = (): string => 'test';

class Test {
	// No return value should be expected (void)
	method(): void {
		const x = 1 + 1;
	}
}

// allowExpressions
// ----------------

document.addEventListener('click', () => undefined);

document.addEventListener('click', function () {
	return undefined;
});

const arr: number[] = [];
const foo = arr.map((i) => i * i);

// allowHigherOrderFunctions
// -------------------------

const arrowFn2 = () => (): void => undefined;

function fn2() {
	return function (): void {
		return undefined;
	};
}

// allowTypedFunctionExpressions
// -----------------------------

interface TypedFn {
	(): void;
}

const typedFn: TypedFn = () => undefined;
