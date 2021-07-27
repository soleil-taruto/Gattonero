/*
	配列の比較

	a: [] 配列1
	b: [] 配列2
	comp: () 配列の要素の比較

	ret: 比較結果
*/
function @@_CompArr(a, b, comp) {
	var minlen = Math.min(a.length, b.length);

	for(var index = 0; index < minlen; index++) {
		var ret = comp(a[index], b[index]);

		if(ret != 0) {
			return ret;
		}
	}
	return @@_Comp(a.length, b.length);
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
	a: index 位置1
	b: index 位置2

	ret: arr
*/
function @@_Swap(arr, a, b) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
	return arr;
}

/*
	値を比較する。

	a: 値1
	b: 値1

	ret: 比較結果
*/
function @@_Comp(a, b) {
	if(a < b) {
		return -1;
	}
	if(a > b) {
		return 1;
	}
	return 0;
}

/*
	シャローコピーを行う。

	arr: [] 配列

	ret: [] 新しい配列
*/
function @@_CopyShallow(arr) {
	var dest = new Array(arr.length);

	for(var index = 0; index < arr.length; index++) {
		dest[index] = arr[index];
	}
	return dest;
}

/*
	部分配列を得る。

	arr: [] 配列
	start: 開始位置
	count: 部分配列の長さ

	ret: [] 部分配列
*/
function @@_GetSubArr(arr, start, count) {
	var dest = new Array(count);

	for(var index = 0; index < count; index++) {
		dest[index] = arr[start + index];
	}
	return dest;
}

/*
	配列を連結する。

	arr1: [] 配列1
	arr2: [] 配列2

	ret: [] 連結した配列
*/
function @@_Join(arr1, arr2) {
	return arr1.concat(arr2);
}

/*
	配列に要素を挿入する。

	arr: [] 配列
	index: 挿入位置

	ret: arr
*/
function @@_Insert(arr, index, element) {
	if(index == 0) {
		arr.unshift(element);
	}
	else if(index == arr.length) {
		arr.push(element);
	}
	else {
		arr.splice(index, 0, element);
	}
	return arr;
}

/*
	配列から要素を削除する。

	arr: [] 配列
	index: 削除位置

	ret: arr
*/
function @@_Remove(arr, index) {
	if(index == 0) {
		arr.shift();
	}
	else if(index == arr.length) {
		arr.pop();
	}
	else {
		arr.splice(index, 1);
	}
	return arr;
}
