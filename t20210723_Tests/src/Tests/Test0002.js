function @@_Main() {
	console.log("[" + new Date() + "] FourColors_Test");

//	var TEST_MAX = 10000000;
//	var TEST_MAX = 1000000;
	var TEST_MAX = 100000;
	
	for(var testCnt = 0; testCnt < TEST_MAX; testCnt++) {
		@@_DoTest();
	}
	console.log("[" + new Date() + "] OK!");
}

//var @@_COLOR_NUM = 4;
//var @@_COLOR_NUM = 20;
var @@_COLOR_NUM = 100;

function @@_DoTest() {
	var colors = [];
	
	for(var index = 0; index < @@_COLOR_NUM; index++) {
		colors[index] = Math.floor(Math.random() * @@_COLOR_NUM);
	}
	
	if(!@@_TryGuessAny(colors)) { // ? ³“šŽÒ–³‚µ
		throw null;
	}
}

function @@_TryGuessAny(colors) {
	for(var answererIndex = 0; answererIndex < @@_COLOR_NUM; answererIndex++) {
		var otherColors = []; // Ž©•ªˆÈŠO‚ÌF
		
		for(var index = 0; index < @@_COLOR_NUM; index++) {
			if(index != answererIndex) {
				otherColors.push(colors[index]);
			}
		}
		var myColor = colors[answererIndex]; // Ž©•ª‚ÌF
		var answeredColor = @@_TryGuess(otherColors, answererIndex); // ‰ñ“šŽÒ‚Ì‰ñ“š
		
		if(myColor == answeredColor) { // ? ³“š‚µ‚½
			return true;
		}
	}
	return false; // ³“šŽÒ–³‚µ
}

function @@_TryGuess(otherColors, answererIndex) {
	var sum = 0;
	
	for(var index = 0; index < otherColors.length; index++) {
		sum += otherColors[index];
	}
	return (@@_COLOR_NUM - sum % @@_COLOR_NUM + answererIndex) % @@_COLOR_NUM;
}
