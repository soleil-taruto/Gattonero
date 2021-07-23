/*
	配列の比較

	a: [] 配列1
	b: [] 配列2
	comp: () 配列の要素の比較

	ret: 比較結果
*/
function @@_CompList(a, b, comp) {
	var minlen = Math.min(a.length, b.length);

	for(var index = 0; index < minlen; index++) {
		var ret = comp(a[index], b[index]);

		if(ret != 0) {
			return ret;
		}
	}
	return a.length - b.length;
}

/*
	最初に見つかった位置を返す。

	arr: [] 配列
	match: () 配列の要素の判定

	ret: 最初に見つかった位置、見つからなかった場合 -1 を返す。
*/
function @@_IndexOf(arr, match) {
	for(var index = 0; index < arr.length; index++) {
		if(match(arr[index])) {
			return index;
		}
	}
	return -1; // not found
}

/*
	要素を入れ替える。

	arr: [] 配列
	a: 位置1
	b: 位置2
*/
function @@_Swap(arr, a, b) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}
