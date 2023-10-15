/* eslint-disable @typescript-eslint/no-unused-vars, no-undef */
/* __AUTO-TEST-EXPECT-ERRORS-COUNT=7__ */
export const blank = true;
/* __AUTO-DOC-PRINT-AFTER__ */

// typeLike

class fooBar {}

interface myInterface {
	myProp: boolean;
	myMethod(): void;
}

type MY_TYPE = string;

abstract class my_class {}

class FooBar {
	private PrivateField = true;
	private privateField = true;
	private PRIVATE_FIELD = true;
	private private_field = true;
}

// enumMember

enum MySeasons {
	mySeason1 = 'xXx',
	mySeason2 = 'yYy',
	mySeason3 = 'zZz',
}
