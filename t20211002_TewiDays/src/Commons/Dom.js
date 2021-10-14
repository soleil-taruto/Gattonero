// タグ取得
function @@_Get(id) {
	return document.getElementById(id);
}

// タグ追加
function @@_Append(parentTag, tag) {
	parentTag.appendChild(tag);
	return tag;
}

// タグ削除
function @@_Remove(tag) {
	tag.parentNode.removeChild(tag);
	return tag;
}

/*
	HTTPリクエストを投げる。

	method: "GET", "POST"
	url: URL
	prm: GET の場合は null, POST の場合は Json など
	def: 失敗時のレスポンスオブジェクト
	reaction: () 受信イベント, 引数：受信オブジェクト

	ret: true

	ex.
		@@_Request("GET", "/coffee/sugar.xxx?a=123", null, "{}", res => {
			var obj = Ako_FromJson(res);
			console.log(obj);
		});

		@@_Request("POST", "/coffee/sugar.xxx", Ako_ToJson({ a: 123 }), "{}", res => {
			var obj = Ako_FromJson(res);
			console.log(obj);
		});
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

	if(prm == null) {
		xhr.send();
	}
	else {
		xhr.send(prm);
	}

	return true;
}
