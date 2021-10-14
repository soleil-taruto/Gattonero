function @@_ToJson(prm) {
	return JSON.stringify(prm);
}

function @@_FromJson(prm) {
	return JSON.parse(prm);
}

/*
	���������؂蕶���ŕ�������B

	str:         ������
	delimiters:  ��؂蕶���̏W��
	meaningFlag: delimiters �ȊO����؂蕶���Ƃ��邩
	ignoreEmpty: �󕶎���̃g�[�N�����������邩
	limit:       �ő�g�[�N����, 0 == ������

	ret: �g�[�N���z��
*/
function @@_Tokenize(str, delimiters, meaningFlag, ignoreEmpty, limit) {
	var buff = "";
	var tokens = [];

	for(var index = 0; index < str.length; index++) {
		var chr = str.substr(index, 1);
		var isDelimiter = delimiters.indexOf(chr);

		if(tokens.length + 1 == limit || (delimiters.indexOf(chr) != -1 ? meaningFlag : !meaningFlag)) {
			buff += chr;
		}
		else {
			if(!ignoreEmpty || buff.length != 0) {
				tokens.push(buff);
			}
			buff = "";
		}
	}
	if(!ignoreEmpty || buff.length != 0) {
		tokens.push(buff);
	}
	return tokens;
}

/*
	������̘A��

	strs:      ������̔z��
	separator: �A��������

	ret: �A������������
*/
function @@_Untokenize(strs, separator) {
	var buff = "";

	for(var index = 0; index < strs.length; index++) {
		if(1 <= index) {
			buff += separator;
		}
		buff += strs[index];
	}
	return buff;
}
