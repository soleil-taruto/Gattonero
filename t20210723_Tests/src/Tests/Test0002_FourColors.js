function @@_Main() {
	SCommon_Log("FourColors_Test");

//	var TEST_MAX = 10000000;
//	var TEST_MAX = 1000000;
	var TEST_MAX = 100000;
	
	for(var testCnt = 0; testCnt < TEST_MAX; testCnt++) {
		@@_DoTest();
	}
	SCommon_Log("OK!");
}

//var @@_COLOR_NUM = 4;
//var @@_COLOR_NUM = 20;
var @@_COLOR_NUM = 100;

function @@_DoTest() {
	var colors = [];
	
	for(var index = 0; index < @@_COLOR_NUM; index++) {
		colors[index] = Math.floor(Math.random() * @@_COLOR_NUM);
	}
	
	if(!@@_TryGuessAny(colors)) { // ? 正答者無し
		throw null;
	}
}

function @@_TryGuessAny(colors) {
	for(var answererIndex = 0; answererIndex < @@_COLOR_NUM; answererIndex++) {
		var otherColors = []; // 自分以外の色
		
		for(var index = 0; index < @@_COLOR_NUM; index++) {
			if(index != answererIndex) {
				otherColors.push(colors[index]);
			}
		}
		var myColor = colors[answererIndex]; // 自分の色
		var answeredColor = @@_TryGuess(otherColors, answererIndex); // 回答者の回答
		
		if(myColor == answeredColor) { // ? 正答した
			return true;
		}
	}
	return false; // 正答者無し
}

function @@_TryGuess(otherColors, answererIndex) {
	return (@@_COLOR_NUM - otherColors.reduce((sum, v) => sum += v, 0) % @@_COLOR_NUM + answererIndex) % @@_COLOR_NUM;
}
/*
function @@_TryGuess(otherColors, answererIndex) {
	var sum = 0;
	
	for(var index = 0; index < otherColors.length; index++) {
		sum += otherColors[index];
	}
	return (@@_COLOR_NUM - sum % @@_COLOR_NUM + answererIndex) % @@_COLOR_NUM;
}
*/
