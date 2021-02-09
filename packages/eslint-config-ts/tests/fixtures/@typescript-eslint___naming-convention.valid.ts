/* eslint-disable @typescript-eslint/no-unused-vars, no-undef */
export const blank = true;
/* __AUTO-DOC-PRINT-AFTER__ */
// Variables

const myVar = 5;
const _myTempVar = 6;
const MY_CONST = 7;
const Obj = {};

// Variables destructured

const obj = {};
const { no_camel_case_destructured_var, camelCased } = obj;

// Function parameter

function foo(
	parameterName: boolean,
	ParameterName: boolean,
	PARAMETER_NAME: boolean,
	_parameterName: boolean,
	_ParameterName: boolean,
	_PARAMETER_NAME: boolean
): void {
	console.log(parameterName);
}

// memberLike

const obj2 = {
	objProp: true,
	objMethod(): void {
		console.log(this.objProp);
	}
};

class FooBar {
	memberProp1: string;
	memberProp2: string;

	private _memberProp3 = 'xXx';

	constructor(argValue1: string, argValue2: string) {
		this.memberProp1 = argValue1;
		this.memberProp2 = argValue2;
	}

	get memberProp(): string {
		return `${this.memberProp1} ${this.memberProp2}`;
	}

	set memberProp(value: string) {
		console.log(value);
	}

	printMemberProp(): void {
		console.log(this.memberProp);
	}

	private _printPrivateMember(): void {
		console.log(this._memberProp3);
	}

	static instanceTypeGuard(instance: any): instance is FooBar {
		return instance instanceof FooBar;
	}
}

// typeLike

interface MyInterface {
	myProp: boolean;
	myMethod(): void;
}

type MyType = string;

abstract class MyClass {}

// enumMember

enum MyList {
	X,
	Y,
	Z
}

enum MySeasons {
	MySeason1 = 'xXx',
	MySeason2 = 'yYy',
	MySeason3 = 'zZz'
}
