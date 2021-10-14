// �^�O�擾
function @@_Get(id) {
	return document.getElementById(id);
}

// �^�O�ǉ�
function @@_Append(parentTag, tag) {
	parentTag.appendChild(tag);
	return tag;
}

// �^�O�폜
function @@_Remove(tag) {
	tag.parentNode.removeChild(tag);
	return tag;
}

/*
	HTTP���N�G�X�g�𓊂���B

	method: "GET", "POST"
	url: URL
	prm: GET �̏ꍇ�� null, POST �̏ꍇ�� Json �Ȃ�
	def: ���s���̃��X�|���X�I�u�W�F�N�g
	reaction: () ��M�C�x���g, �����F��M�I�u�W�F�N�g

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
