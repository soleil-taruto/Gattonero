function @@_CompArr_Test01(a, b, assume) {
	var ans = SCommon_CompArr(a, b, SCommon_Comp);

	if(ans !== assume) {
		throw null;
	}
	ans = SCommon_CompArr(b, a, SCommon_Comp);

	if(ans !== -assume) {
		throw null;
	}
}

function @@_CompArr() {
	@@_CompArr_Test01([], [], 0);
	@@_CompArr_Test01([ "A" ], [], 1);
	@@_CompArr_Test01([], [ "A" ], -1);
	@@_CompArr_Test01([ "A" ], [ "A" ], 0);
	@@_CompArr_Test01([ "B" ], [ "A" ], 1);
	@@_CompArr_Test01([ "A" ], [ "B" ], -1);
	@@_CompArr_Test01([ "A", "A" ], [ "A" ], 1);
	@@_CompArr_Test01([ "A" ], [ "A", "A" ], -1);
	@@_CompArr_Test01([ "A", "A" ], [ "A", "A" ], 0);
	@@_CompArr_Test01([ "A", "B" ], [ "A", "A" ], 1);
	@@_CompArr_Test01([ "A", "A" ], [ "A", "B" ], -1);
	@@_CompArr_Test01([ "B", "A" ], [ "A", "B" ], 1);
	@@_CompArr_Test01([ "A", "B" ], [ "B", "A" ], -1);
}

function @@_IndexOf_Test01(arr, target, assume) {
	var ans = SCommon_IndexOf(arr, v => v == target);

	if(ans !== assume) {
		throw null;
	}
}

function @@_IndexOf() {
	@@_IndexOf_Test01([ 100, 200, 300 ], 100, 0);
	@@_IndexOf_Test01([ 100, 200, 300 ], 200, 1);
	@@_IndexOf_Test01([ 100, 200, 300 ], 300, 2);
	@@_IndexOf_Test01([ 100, 200, 300 ], 123, -1);
}

function @@_Swap_Test01(arr, a, b, assume) {
	var ans = SCommon_Swap(SCommon_CopyShallow(arr), a, b);

	if(SCommon_CompArr(ans, assume, SCommon_Comp) != 0) {
		throw null;
	}
	ans = SCommon_Swap(SCommon_CopyShallow(arr), b, a);

	if(SCommon_CompArr(ans, assume, SCommon_Comp) != 0) {
		throw null;
	}
}

function @@_Swap() {
	@@_Swap_Test01([1, 2, 3, 4], 1, 2, [1, 3, 2, 4]);
	@@_Swap_Test01([1, 2, 3, 4], 0, 2, [3, 2, 1, 4]);
	@@_Swap_Test01([1, 2, 3, 4], 1, 3, [1, 4, 3, 2]);
}

function @@_Comp_Test01(a, b, assume) {
	var ans = SCommon_Comp(a, b);

	if(ans !== assume) {
		throw null;
	}
	ans = SCommon_Comp(b, a);

	if(ans !== -assume) {
		throw null;
	}
}

function @@_Comp() {
	@@_Comp_Test01("A", "A", 0);
	@@_Comp_Test01("A", "B", -1);
	@@_Comp_Test01("B", "A", 1);
}

function @@_CopyShallow_Test01(arr) {
	var ans = SCommon_CopyShallow(arr);

	if(SCommon_CompArr(ans, arr, SCommon_Comp) != 0) {
		throw null;
	}
	if(SCommon_CompArr(arr, ans, SCommon_Comp) != 0) {
		throw null;
	}
}

function @@_CopyShallow() {
	@@_CopyShallow_Test01([]);
	@@_CopyShallow_Test01([ 100 ]);
	@@_CopyShallow_Test01([ 100, 200 ]);
	@@_CopyShallow_Test01([ 100, 200, 300 ]);
}

// ----

function @@_Main() {
	SCommonTest_CompArr();
	SCommonTest_IndexOf();
	SCommonTest_Swap();
	SCommonTest_Comp();
	SCommonTest_CopyShallow();

	// ----

	console.log("OK!");
}
