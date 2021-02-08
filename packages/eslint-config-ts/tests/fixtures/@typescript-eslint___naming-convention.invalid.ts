/* eslint-disable @typescript-eslint/no-unused-vars, no-undef */
/* __AUTO-DOC-PRINT-AFTER__ */
// Variables

const my_const = 7;
const Obj = {};

// Function parameter

function foo(PARAMETER_NAME: boolean, _param_name: boolean): void {
	console.log(PARAMETER_NAME);
	console.log(_param_name);
}

// memberLike

const obj2 = {
	obj_prop: true,
	obj_method(): void {
		console.log(this.objProp);
	}
};

// typeLike

class fooBar {
}

interface myInterface {
	myProp: boolean;
	myMethod (): void;
}

type MY_TYPE = string;

abstract class my_class {

}

// enumMember

enum MySeasons {
	mySeason1 = 'xXx',
	mySeason2 = 'yYy',
	mySeason3 = 'zZz'
}
