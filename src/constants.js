define([],function() {
	var IS_MAC        = /Mac/.test(navigator.userAgent);

	var KEY_A         = 65;
	var KEY_COMMA     = 188;
	var KEY_RETURN    = 13;
	var KEY_ESC       = 27;
	var KEY_LEFT      = 37;
	var KEY_UP        = 38;
	var KEY_P         = 80;
	var KEY_RIGHT     = 39;
	var KEY_DOWN      = 40;
	var KEY_N         = 78;
	var KEY_BACKSPACE = 8;
	var KEY_DELETE    = 46;
	var KEY_SHIFT     = 16;
	var KEY_CMD       = IS_MAC ? 91 : 17;
	var KEY_CTRL      = IS_MAC ? 18 : 17;
	var KEY_TAB       = 9;

	var TAG_SELECT    = 1;
	var TAG_INPUT     = 2;

	// for now, android support in general is too spotty to support validity
	var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('input').validity;

	return {
		IS_MAC,
		KEY_A,
		KEY_COMMA,
		KEY_RETURN,
		KEY_ESC,
		KEY_LEFT,
		KEY_UP,
		KEY_P,
		KEY_RIGHT,
		KEY_DOWN,
		KEY_N,
		KEY_BACKSPACE,
		KEY_DELETE,
		KEY_SHIFT,
		KEY_CMD,
		KEY_CTRL,
		KEY_TAB,
		TAG_SELECT,
		TAG_INPUT,
		SUPPORTS_VALIDITY_API
	};
});