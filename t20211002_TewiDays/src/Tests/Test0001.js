function @@_Test01() {
	var arr = [];

	for(var index = 0; index < 10; index++) {
		arr[index] = index + 1; // ����Ɋg�����Ă����B
	}
	console.log(arr);
}

function @@_Test02() {
	var arr = [];

	arr[10] = 10; // �I�[���痣��Ă��Ă��g�����Ă����B
	arr[20] = 20;
	arr[30] = 30;

	console.log(arr[19]); // undefined
	console.log(arr[20]); // 20
	console.log(arr[21]); // undefined

	console.log(arr[30]); // 30
	console.log(arr[31]); // undefined -- �͈͊O�ł��Q�Ƃł���B

	console.log(arr);
}

function @@_Main() {
	@@_Test01();
	@@_Test02();

	// ----

	console.log("OK!");
}
