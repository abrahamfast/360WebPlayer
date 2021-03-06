/* global Bivrost */
"use strict";


(function() {
	
	Bivrost.Renderer = function() {
		this.onRenderMainView = new Bivrost.Observable();
	};
	
	Bivrost.Renderer.prototype.render = function(webglRenderer, view) { throw "abstract"; };
	
	Bivrost.Renderer.prototype.init = function(player) {
		this.player=player;
	};
	
	/**
	 * @type {Bivrost.Player}
	 */
	Bivrost.Renderer.prototype.player = null;
	
	Bivrost.Renderer.prototype.destroy = function(player) {};
	
	Bivrost.Renderer.prototype.updateSize = function(w, h) {}
	
	Bivrost.Renderer.prototype.fullscreenChanged = function(isFullscreen) { ; }

	/**
	 * Called on rendering the main view, specifies the location being viewed
	 * The main view is the most interesting view for the user, for example if
	 * there is a PC VR headset and the viewport is monitored on the monitor, 
	 * this will be called during rendering on the headset (once per frame).
	 * Arguments of callback: { euler: THREE.Euler, fov: number, platform: string }
	 * @type {Bivrost.Observable}
	 * @memberof Bivrost.Renderer#
	 */
	Bivrost.Renderer.prototype.onRenderMainView = null;

	/**
	 * @static
	 * @returns {Boolean}
	 */
	Bivrost.Renderer.shouldWork = function() { return false; }
	
	
})();
