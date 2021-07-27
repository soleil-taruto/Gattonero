/*
	�z��̔�r

	a: [] �z��1
	b: [] �z��2
	comp: () �z��̗v�f�̔�r

	ret: ��r����
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

	arr: [] �z��

	ret: [] �V�����z��
*/
function @@_CopyShallow(arr) {
	var dest = new Array(arr.length);

	for(var index = 0; index < arr.length; index++) {
		dest[index] = arr[index];
	}
	return dest;
}

/*
	�����z��𓾂�B

	arr: [] �z��
	start: �J�n�ʒu
	count: �����z��̒���

	ret: [] �����z��
*/
function @@_GetSubArr(arr, start, count) {
	var dest = new Array(count);

	for(var index = 0; index < count; index++) {
		dest[index] = arr[start + index];
	}
	return dest;
}

/*
	�z���A������B

	arr1: [] �z��1
	arr2: [] �z��2

	ret: [] �A�������z��
*/
function @@_Join(arr1, arr2) {
	return arr1.concat(arr2);
}

/*
	�z��ɗv�f��}������B

	arr: [] �z��
	index: �}���ʒu

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
	�z�񂩂�v�f���폜����B

	arr: [] �z��
	index: �폜�ʒu

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
