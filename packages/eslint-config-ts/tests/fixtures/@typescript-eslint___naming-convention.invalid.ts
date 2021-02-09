/* eslint-disable @typescript-eslint/no-unused-vars, no-undef */
/* __AUTO-TEST-EXPECT-ERRORS-COUNT=10__ */
export const blank = true;
/* __AUTO-DOC-PRINT-AFTER__ */
// Variables

const my_const = 7;

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
