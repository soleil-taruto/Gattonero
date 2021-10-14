function @@_ToJson(prm) {
	return JSON.stringify(prm);
}

function @@_FromJson(prm) {
	return JSON.parse(prm);
}

/*
	文字列を区切り文字で分割する。

	str:         文字列
	delimiters:  区切り文字の集合
	meaningFlag: delimiters 以外を区切り文字とするか
	ignoreEmpty: 空文字列のトークンを除去するか
	limit:       最大トークン数, 0 == 無制限

	ret: トークン配列
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
	文字列の連結

	strs:      文字列の配列
	separator: 連結文字列

	ret: 連結した文字列
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
