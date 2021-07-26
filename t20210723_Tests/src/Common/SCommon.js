/*
	�z��̔�r

	a: [] �z��1
	b: [] �z��2
	comp: () �z��̗v�f�̔�r

	ret: ��r����
*/
function @@_CompList(a, b, comp) {
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
	�ŏ��Ɍ��������ʒu��Ԃ��B

	arr: [] �z��
	match: () �z��̗v�f�̔���

	ret: �ŏ��Ɍ��������ʒu�A������Ȃ������ꍇ -1 ��Ԃ��B
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
	�v�f�����ւ���B

	arr: [] �z��
	a: index �ʒu1
	b: index �ʒu2

	ret: arr
*/
function @@_Swap(arr, a, b) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
	return arr;
}

/*
	�l���r����B

	a: �l1
	b: �l1

	ret: ��r����
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
	�V�����[�R�s�[���s���B

	arr: ��

	ret: �V�����z��
*/
function @@_CopyShallow(arr) {
	var dest = new Array(arr.length);

	for(var index = 0; index < arr.length; index++) {
		dest[index] = arr[index];
	}
	return dest;
}
