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

function @@_GetSubArr_Test01(arr, start, end, assume) {
	var ans = SCommon_GetSubArr(arr, start, end);

	if(SCommon_CompArr(ans, assume, SCommon_Comp) != 0) {
		throw null;
	}
}

function @@_GetSubArr() {
	@@_GetSubArr_Test01([], 0, 0, []);
	@@_GetSubArr_Test01([ "A" ], 0, 0, []);
	@@_GetSubArr_Test01([ "A" ], 1, 0, []);
	@@_GetSubArr_Test01([ "A" ], 0, 1, [ "A" ]);
	@@_GetSubArr_Test01([ "A", "B", "C" ], 0, 1, [ "A" ]);
	@@_GetSubArr_Test01([ "A", "B", "C" ], 1, 1, [ "B",]);
	@@_GetSubArr_Test01([ "A", "B", "C" ], 2, 1, [ "C" ]);
	@@_GetSubArr_Test01([ "A", "B", "C" ], 0, 2, [ "A", "B" ]);
	@@_GetSubArr_Test01([ "A", "B", "C" ], 1, 2, [ "B", "C" ]);
	@@_GetSubArr_Test01([ "A", "B", "C" ], 0, 3, [ "A", "B", "C" ]);
}

function @@_Join_Test01(arr1, arr2, assume) {
	var ans = SCommon_Join(arr1, arr2);

	if(SCommon_CompArr(ans, assume, SCommon_Comp) != 0) {
		throw null;
	}
}

function @@_Join() {
	@@_Join_Test01([], [], []);
	@@_Join_Test01([ "A" ], [], [ "A" ]);
	@@_Join_Test01([], [ "A" ], [ "A" ]);
	@@_Join_Test01([ "A" ], [ "B" ], [ "A", "B" ]);
	@@_Join_Test01([ 1, 2, 3 ], [ "A", "B", "C" ], [ 1, 2, 3, "A", "B", "C" ]);
}

function @@_Insert_Test01(arr, index, element, assume) {
	var ans = SCommon_Insert(SCommon_CopyShallow(arr), index, element);

	if(SCommon_CompArr(ans, assume, SCommon_Comp) != 0) {
		throw null;
	}
}

function @@_Insert() {
	@@_Insert_Test01([], 0, "A", [ "A" ]);
	@@_Insert_Test01([ "A" ], 0, "B", [ "B", "A" ]);
	@@_Insert_Test01([ "A" ], 1, "B", [ "A", "B" ]);
	@@_Insert_Test01([ "A", "B", "C" ], 0, "XXX", [ "XXX", "A", "B", "C" ]);
	@@_Insert_Test01([ "A", "B", "C" ], 1, "XXX", [ "A", "XXX", "B", "C" ]);
	@@_Insert_Test01([ "A", "B", "C" ], 2, "XXX", [ "A", "B", "XXX", "C" ]);
	@@_Insert_Test01([ "A", "B", "C" ], 3, "XXX", [ "A", "B", "C", "XXX" ]);
}

function @@_Remove_Test01(arr, index, assume) {
	var ans = SCommon_Remove(SCommon_CopyShallow(arr), index);

	if(SCommon_CompArr(ans, assume, SCommon_Comp) != 0) {
		throw null;
	}
}

function @@_Remove() {
	@@_Remove_Test01([ "A" ], 0, []);
	@@_Remove_Test01([ "A", "B" ], 0, [ "B" ]);
	@@_Remove_Test01([ "A", "B" ], 1, [ "A" ]);
	@@_Remove_Test01([ "A", "B", "C" ], 0, [ "B", "C" ]);
	@@_Remove_Test01([ "A", "B", "C" ], 1, [ "A", "C" ]);
	@@_Remove_Test01([ "A", "B", "C" ], 2, [ "A", "B" ]);
}

function @@_FastRemove_Test01(arr, index, assume) {
	var ans = SCommon_FastRemove(SCommon_CopyShallow(arr), index);

	if(SCommon_CompArr(ans, assume, SCommon_Comp) != 0) {
		throw null;
	}
}

function @@_FastRemove() {
	@@_FastRemove_Test01([ "A" ], 0, []);
	@@_FastRemove_Test01([ "A", "B" ], 0, [ "B" ]);
	@@_FastRemove_Test01([ "A", "B" ], 1, [ "A" ]);
	@@_FastRemove_Test01([ "A", "B", "C" ], 0, [ "C", "B" ]);
	@@_FastRemove_Test01([ "A", "B", "C" ], 1, [ "A", "C" ]);
	@@_FastRemove_Test01([ "A", "B", "C" ], 2, [ "A", "B" ]);
}

function @@_Last_Test01(arr, assume) {
	var ans = SCommon_Last(arr);

	if(ans != assume) {
		throw null;
	}
}

function @@_Last() {
	@@_Last_Test01([ "A" ], "A");
	@@_Last_Test01([ "A", "B" ], "B");
	@@_Last_Test01([ "A", "B", "C" ], "C");
}

function @@_Add_Test01(arr, element, assume) {
	var ans = SCommon_Add(SCommon_CopyShallow(arr), element);

	if(SCommon_CompArr(ans, assume, SCommon_Comp) != 0) {
		throw null;
	}
}

function @@_Add() {
	@@_Add_Test01([], "XXX", [ "XXX" ]);
	@@_Add_Test01([ "A" ], "XXX", [ "A", "XXX" ]);
	@@_Add_Test01([ "A", "B" ], "XXX", [ "A", "B", "XXX" ]);
	@@_Add_Test01([ "A", "B", "C" ], "XXX", [ "A", "B", "C", "XXX" ]);
}

function @@_Pop_Test01(arr, assume) {
	var ans = SCommon_Pop(arr);

	if(ans != assume) {
		throw null;
	}
}

function @@_Pop() {
	@@_Pop_Test01([ "A" ], "A");
	@@_Pop_Test01([ "A", "B" ], "B");
	@@_Pop_Test01([ "A", "B", "C" ], "C");
}

function @@_AddToTop_Test01(arr, element, assume) {
	var ans = SCommon_AddToTop(SCommon_CopyShallow(arr), element);

	if(SCommon_CompArr(ans, assume, SCommon_Comp) != 0) {
		throw null;
	}
}

function @@_AddToTop() {
	@@_AddToTop_Test01([], "XXX", [ "XXX" ]);
	@@_AddToTop_Test01([ "A" ], "XXX", [ "XXX", "A" ]);
	@@_AddToTop_Test01([ "A", "B" ], "XXX", [ "XXX", "A", "B" ]);
	@@_AddToTop_Test01([ "A", "B", "C" ], "XXX", [ "XXX", "A", "B", "C" ]);
}

function @@_PopFromTop_Test01(arr, assume) {
	var ans = SCommon_PopFromTop(arr);

	if(ans != assume) {
		throw null;
	}
}

function @@_PopFromTop() {
	@@_PopFromTop_Test01([ "A" ], "A");
	@@_PopFromTop_Test01([ "A", "B" ], "A");
	@@_PopFromTop_Test01([ "A", "B", "C" ], "A");
}

function @@_ToJson() {
	// TODO
}

function @@_FromJson() {
	// TODO
}

function @@_ZPad() {
	// TODO
}

function @@_Now() {
	// TODO
}

function @@_Log() {
	SCommon_Log("テストメッセージ_1");
	SCommon_Log("テストメッセージ_2");
	SCommon_Log("テストメッセージ_3");
}

// ----

function @@_Main() {
	@@_CompArr();
	@@_IndexOf();
	@@_Swap();
	@@_Comp();
	@@_CopyShallow();
	@@_GetSubArr();
	@@_Join();
	@@_Insert();
	@@_Remove();
	@@_FastRemove();
	@@_Last();
	@@_Add();
	@@_Pop();
	@@_AddToTop();
	@@_PopFromTop();
	@@_ToJson();
	@@_FromJson();
	@@_ZPad();
	@@_Now();
	@@_Log();

	// ----

	console.log("OK!");
}
