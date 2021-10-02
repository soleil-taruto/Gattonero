/*
	id����h�L�������g���̃^�O���擾����B

	id: id

	ret: �^�O
*/
function @@_Get(id) {
	return document.getElementById(id);
}

/*
	�^�O�̔z���Ƀ^�O��ǉ�����B

	parentTag: �ǉ���̃^�O
	tag: �ǉ�����^�O

	ret: tag
*/
function @@_Append(parentTag, tag) {
	parentTag.appendChild(tag);
	return tag;
}

/*
	�^�O���폜����B

	tag: �폜����^�O

	ret: tag
*/
function @@_Remove(tag) {
	tag.parentNode.removeChild(tag);
	return tag;
}

/*
	HTTP���N�G�X�g�𓊂���B

	method: "GET", "POST" (���̃��\�b�h�͑z�肵�Ȃ�)
	url: URL
	prm: GET �̏ꍇ�� null, POST �̏ꍇ�� Json �Ȃ�
	def: ���s���̃��X�|���X�I�u�W�F�N�g
	reaction: () ��M�C�x���g, �����F��M�I�u�W�F�N�g

	ret: true

	ex.
		@@_Request("GET", "/coffee/sugar.xxx?a=123", null, "{}", res => {
			var obj = SCommon_FromJson(res);
			console.log(obj);
		});

		@@_Request("POST", "/coffee/sugar.xxx", SCommon_ToJson({ a: 123 }), "{}", res => {
			var obj = SCommon_FromJson(res);
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
