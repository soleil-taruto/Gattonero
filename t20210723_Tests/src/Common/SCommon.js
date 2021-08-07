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

/*
	�z�񂩂�v�f�������ō폜����B
	���ѕ��͉���B

	arr: [] �z��
	index: �폜�ʒu

	ret: arr
*/
function @@_FastRemove(arr, index) {
	arr[index] = @@_Last(arr);
	arr.pop();
	return arr;
}

/*
	�z��̍Ō�̗v�f���Q�Ƃ���B

	arr: [] �z��

	ret: �z��̍Ō�̗v�f
*/
function @@_Last(arr) {
	return arr[arr.length - 1];
}

/*
	�z��ɗv�f��ǉ�����B

	arr: [] �z��
	element: �v�f

	ret: arr
*/
function @@_Add(arr, element) {
	arr.push(element);
	return arr;
}

/*
	�z��̍Ō�̗v�f�����o���B

	arr: [] �z��

	ret: ���o�����v�f
*/
function @@_Pop(arr) {
	return arr.pop();
}

/*
	�z��̐擪�ɗv�f��ǉ�����B

	arr: [] �z��
	element: �v�f

	ret: arr
*/
function @@_AddToTop(arr, element) {
	arr.unshift(element);
	return arr;
}

/*
	�z��̐擪�̗v�f�����o���B

	arr: [] �z��

	ret: ���o�����v�f
*/
function @@_PopFromTop(arr) {
	return arr.shift();
}

/*
	�I�u�W�F�N�g��Json������ɕϊ�����B

	prm: �I�u�W�F�N�g

	ret: Json������
*/
function @@_ToJson(prm) {
	return JSON.stringify(prm);
}

/*
	Json��������I�u�W�F�N�g�ɕϊ�����B

	prm: Json������

	ret: �I�u�W�F�N�g
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
	�[�����p�f�B���O������

	value: ������܂��̓I�u�W�F�N�g
	minlen: �p�f�B���O��̕������(�ŒZ��)����
	padding: �p�f�B���O������

	ret: �p�f�B���O��̕�����
*/
function @@_ZPad(value, minlen, padding) {
	var str = "" + value;

	while(str.length < minlen) {
		str = padding + str;
	}
	return str;
}

/*
	�������𕶎���ŕԂ��B

	ret: ������
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
	���O�o��

	message: �o�̓��b�Z�[�W

	ret: message
*/
function @@_Log(message) {
	console.log("[" + @@_Now() + "] " + message);
	return message;
}
