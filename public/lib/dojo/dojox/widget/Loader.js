//>>built
define("dojox/widget/Loader",["dojo","dijit","dojox","dojo/require!dijit/_Widget,dijit/_Templated"],function(a,b,c){a.provide("dojox.widget.Loader");a.deprecated("dojox.widget.Loader","","2.0");a.require("dijit._Widget");a.require("dijit._Templated");a.declare("dojox.widget.Loader",[b._Widget,b._Templated],{loadIcon:a.moduleUrl("dojox.widget.Loader","icons/loading.gif"),loadMessage:"Loading ...",hasVisuals:!0,attachToPointer:!0,duration:125,_offset:16,_pointerConnect:null,_xhrStart:null,_xhrEnd:null,
templateString:'\x3cdiv dojoAttachPoint\x3d"loadNode" class\x3d"dojoxLoader"\x3e\x3cimg src\x3d"${loadIcon}" class\x3d"dojoxLoaderIcon"\x3e \x3cspan dojoAttachPoint\x3d"loadMessageNode" class\x3d"dojoxLoaderMessage"\x3e\x3c/span\x3e\x3c/div\x3e',postCreate:function(){this.hasVisuals?(this.attachToPointer&&(a.removeClass(this.loadNode,"dojoxLoader"),a.addClass(this.loadNode,"dojoxLoaderPointer")),this._hide()):this.loadNode.style.display="none";this._setMessage(this.loadMessage);this._xhrStart=this.connect(a,
"_ioSetArgs","_show");this._xhrEnd=this.connect(a.Deferred.prototype,"_fire","_hide")},_setMessage:function(a){this.loadMessageNode.innerHTML=a},_putLoader:function(a){b.placeOnScreen(this.loadNode,{x:a.clientX+this._offset,y:a.clientY+this._offset},["TL","BR"])},_show:function(){a.publish("Loader",[{message:"started"}]);this.hasVisuals&&(this.attachToPointer&&(this._pointerConnect=this.connect(document,"onmousemove","_putLoader")),a.style(this.loadNode,{opacity:0,display:""}),a.fadeIn({node:this.loadNode,
duration:this.duration}).play())},_hide:function(){a.publish("Loader",[{message:"ended"}]);this.hasVisuals&&(this.attachToPointer&&this.disconnect(this._pointerConnect),a.fadeOut({node:this.loadNode,duration:this.duration,onEnd:a.partial(a.style,this.loadNode,"display","none")}).play())}})});
//# sourceMappingURL=Loader.js.map