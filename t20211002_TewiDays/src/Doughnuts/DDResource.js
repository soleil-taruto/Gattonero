var @@_LoadingCount = 0;

function @@_LoadImage(url) {
	var image = new Image();

	image.src = url;
	image.onload = () => { @@_LoadingCount--; };

	@@_LoadingCount++;

	return image;
}

function @@_LoadAudio(url) {
	var audio = new Audio(url);

	audio.load();
	audio.addEventListener("canplaythrough", function a() {
		audio.removeEventListener("canplaythrough", a);
		@@_LoadingCount--;
	});

	@@_LoadingCount++;

	return audio;
}
