var @@_Down = false;
var @@_X = 0;
var @@_Y = 0;

function @@_ScreenPosToCanvasPos() {
	var canvasRect = DD_Canvas.getBoundingClientRect();

	@@_X -= canvasRect.left;
	@@_Y -= canvasRect.top;
	@@_X *= DD_W / canvasRect.width;
	@@_Y *= DD_H / canvasRect.height;
}

function @@_TouchStart(x, y) {
	@@_Down = true;
	@@_X = x;
	@@_Y = y;

	@@_ScreenPosToCanvasPos();
}

function @@_TouchMove(x, y) {
	@@_X = x;
	@@_Y = y;

	@@_ScreenPosToCanvasPos();
}

function @@_TouchEnd(x, y) {
	@@_Down = false;
	@@_X = x;
	@@_Y = y;

	@@_ScreenPosToCanvasPos();
}

function @@_GetEvTouch(touch) {
	return function(event) {
		touch(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
	}
}

function @@_GetEvMouse(touch) {
	return function(event) {
		touch(event.x, event.y);
	}
}

function @@_INIT() {
	if(window.ontouchstart === null) {
		DD_CanvasBox.ontouchstart = @@_GetEvTouch(@@_TouchStart);
		DD_CanvasBox.ontouchmove  = @@_GetEvTouch(@@_TouchMove);
		DD_CanvasBox.ontouchend   = @@_GetEvTouch(@@_TouchEnd);
	}
	else {
		DD_CanvasBox.onmousedown  = @@_GetEvMouse(@@_TouchStart);
		DD_CanvasBox.onmousemove  = @@_GetEvMouse(@@_TouchMove);
		DD_CanvasBox.onmouseup    = @@_GetEvMouse(@@_TouchEnd);
		DD_CanvasBox.onmouseleave = @@_GetEvMouse(@@_TouchEnd);
	}
}
