function @@_CompList_Test01(a, b, assume) {
	var ans = SCommon_CompList(a, b, SCommon_Comp);

	if(ans != assume) {
		throw null;
	}
}

function @@_CompList() {
	@@_CompList_Test01([], [], 0);
	@@_CompList_Test01([ "A" ], [], 1);
	@@_CompList_Test01([], [ "A" ], -1);
	@@_CompList_Test01([ "A" ], [ "A" ], 0);
	@@_CompList_Test01([ "B" ], [ "A" ], 1);
	@@_CompList_Test01([ "A" ], [ "B" ], -1);
	@@_CompList_Test01([ "A", "A" ], [ "A" ], 1);
	@@_CompList_Test01([ "A" ], [ "A", "A" ], -1);
	@@_CompList_Test01([ "A", "A" ], [ "A", "A" ], 0);
	@@_CompList_Test01([ "A", "B" ], [ "A", "A" ], 1);
	@@_CompList_Test01([ "A", "A" ], [ "A", "B" ], -1);
	@@_CompList_Test01([ "B", "A" ], [ "A", "B" ], 1);
	@@_CompList_Test01([ "A", "B" ], [ "B", "A" ], -1);
}

function @@_IndexOf() {
	// TODO
}

function @@_Swap() {
	// TODO
}

function @@_Comp_Test01(a, b, assume) {
	var ans = SCommon_Comp(a, b);

	if(ans != assume) {
		throw null;
	}
}

function @@_Comp() {
	@@_Comp_Test01("A", "A", 0);
	@@_Comp_Test01("A", "B", -1);
	@@_Comp_Test01("B", "A", 1);
}
