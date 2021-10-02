function @@_Test01() {
	var arr = [];

	for(var index = 0; index < 10; index++) {
		arr[index] = index + 1; // 勝手に拡張してくれる。
	}
	console.log(arr);
}

function @@_Test02() {
	var arr = [];

	arr[10] = 10; // 終端から離れていても拡張してくれる。
	arr[20] = 20;
	arr[30] = 30;

	console.log(arr[19]); // undefined
	console.log(arr[20]); // 20
	console.log(arr[21]); // undefined

	console.log(arr[30]); // 30
	console.log(arr[31]); // undefined -- 範囲外でも参照できる。

	console.log(arr);
}

function @@_Main() {
	@@_Test01();
	@@_Test02();

	// ----

	console.log("OK!");
}
