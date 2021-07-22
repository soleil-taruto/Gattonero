var @@_Resource = [
	"../dat/pastelpalettes_shirasagi-chisato_s1_1.png",
	"../dat/pastelpalettes_shirasagi-chisato_s1_2.png",
	"../dat/pastelpalettes_shirasagi-chisato_s2_1.png",
	"../dat/pastelpalettes_shirasagi-chisato_s2_2.png",
];

function @@_Main() {
	for(var index = 0; index < @@_Resource.length; index++) {
		var resource = @@_Resource[index];

		var img = document.createElement("img");
		img.src = resource;

		document.body.appendChild(img);
	}
}
