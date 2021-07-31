/*
	idからドキュメント内のタグを取得する。

	id: id

	ret: タグ
*/
function @@_Get(id) {
	return document.getElementById(id);
}

/*
	タグの配下にタグを追加する。

	parentTag: 追加先のタグ
	tag: 追加するタグ

	ret: tag
*/
function @@_Append(parentTag, tag) {
	parentTag.appendChild(tag);
	return tag;
}

/*
	タグを削除する。

	tag: 削除するタグ

	ret: tag
*/
function @@_Remove(tag) {
	tag.parentNode.removeChild(tag);
	return tag;
}

/*
	使うのこれ？

	ex.
		var jres = @@_Request("POST", "/coffee/sugar.xxx?a=123", SCommon_ToJson({ a: 123 }), "{}", response => console.log(response));
		var res = SCommon_FromJson(jres);
*/
function @@_Request(method, url, prm, def, reaction) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				reaction(xhr.responseText);
			}
			else {
				reaction(def);
			}
		}
	};

	xhr.open(method, url);
	xhr.send(prm);

	return true;
}
