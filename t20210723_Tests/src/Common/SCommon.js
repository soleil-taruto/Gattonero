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

/*
	配列から要素を高速で削除する。
	並び方は壊れる。

	arr: [] 配列
	index: 削除位置

	ret: arr
*/
function @@_FastRemove(arr, index) {
	arr[index] = @@_Last(arr);
	arr.pop();
	return arr;
}

/*
	配列の最後の要素を参照する。

	arr: [] 配列

	ret: 配列の最後の要素
*/
function @@_Last(arr) {
	return arr[arr.length - 1];
}

/*
	配列に要素を追加する。

	arr: [] 配列
	element: 要素

	ret: arr
*/
function @@_Add(arr, element) {
	arr.push(element);
	return arr;
}

/*
	配列の最後の要素を取り出す。

	arr: [] 配列

	ret: 取り出した要素
*/
function @@_Pop(arr) {
	return arr.pop();
}

/*
	配列の先頭に要素を追加する。

	arr: [] 配列
	element: 要素

	ret: arr
*/
function @@_AddToTop(arr, element) {
	arr.unshift(element);
	return arr;
}

/*
	配列の先頭の要素を取り出す。

	arr: [] 配列

	ret: 取り出した要素
*/
function @@_PopFromTop(arr) {
	return arr.shift();
}

/*
	オブジェクトをJson文字列に変換する。

	prm: オブジェクト

	ret: Json文字列
*/
function @@_ToJson(prm) {
	return JSON.stringify(prm);
}

/*
	Json文字列をオブジェクトに変換する。

	prm: Json文字列

	ret: オブジェクト
*/
function @@_FromJson(prm) {
	return JSON.parse(prm);
}

// overload
function @@_ZPad(value) {
	return @@_ZPad(value, 1);
}

// overload
function @@_ZPad(value, minlen) {
	return @@_ZPad(value, minlen, "0");
}

/*
	ゼロをパディングするやつ

	value: 文字列またはオブジェクト
	minlen: パディング後の文字列の(最短の)長さ
	padding: パディング文字列

	ret: パディング後の文字列
*/
function @@_ZPad(value, minlen, padding) {
	var str = "" + value;

	while(str.length < minlen) {
		str = padding + str;
	}
	return str;
}

/*
	現時刻を文字列で返す。

	ret: 現時刻
*/
function @@_Now() {
	var now = new Date();

	var y = now.getFullYear();
	var m = now.getMonth() + 1;
	var d = now.getDate();
	var h = now.getHours();
	var i = now.getMinutes();
	var s = now.getSeconds();

	return
		@@_ZPad(y, 4) + "/" +
		@@_ZPad(m, 2) + "/" +
		@@_ZPad(d, 2) + " " +
		@@_ZPad(h, 2) + ":" +
		@@_ZPad(i, 2) + ":" +
		@@_ZPad(s, 2);
}

/*
	ログ出力

	message: 出力メッセージ

	ret: message
*/
function @@_Log(message) {
	console.log("[" + @@_Now() + "] " + message);
	return message;
}
