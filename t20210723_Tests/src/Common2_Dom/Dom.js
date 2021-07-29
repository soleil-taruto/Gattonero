function @@_Get(id) {
	return document.getElementById(id);
}

function @@_Append(parentTag, tag) {
	parentTag.appendChild(tag);
}

function @@_Remove(tag) {
	tag.parentNode.removeChild(tag);
}



function @@_ToJson(prm) {
	return JSON.stringify(prm);
}

function @@_FromJson(prm) {
	return JSON.parse(prm);
}

/*
	ex.
		@@_Request("POST", "/coffee/sugar.xxx?a=123", @@_ToJson({ a: 123 }), null, response => console.log(response));
*/
function @@_Request(method, url, prm, def, reaction) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				reaction(JSON.parse(xhr.responseText));
			}
			else {
				reaction(def);
			}
		}
	};

	xhr.open(method, url);
	xhr.send(prm);
}
