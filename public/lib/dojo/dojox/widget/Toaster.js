//>>built
define("dojox/widget/Toaster","dojo/_base/declare dojo/_base/lang dojo/on dojo/aspect dojo/topic dojo/_base/fx dojo/dom-style dojo/dom-class dojo/dom-geometry dijit/registry dijit/_WidgetBase dijit/_TemplatedMixin dijit/BackgroundIframe dojo/fx dojo/has dojo/window".split(" "),function(p,b,A,q,r,t,g,h,k,u,v,w,x,y,z,l){b.getObject("dojox.widget",!0);var m=function(a){return a.substring(0,1).toUpperCase()+a.substring(1)};return p("dojox.widget.Toaster",[v,w],{templateString:'\x3cdiv class\x3d"dijitToasterClip" data-dojo-attach-point\x3d"clipNode"\x3e\x3cdiv class\x3d"dijitToasterContainer" data-dojo-attach-point\x3d"containerNode" data-dojo-attach-event\x3d"onclick:onSelect"\x3e\x3cdiv class\x3d"dijitToasterContent" data-dojo-attach-point\x3d"contentNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
messageTopic:"",messageTypes:{MESSAGE:"message",WARNING:"warning",ERROR:"error",FATAL:"fatal"},defaultType:"message",positionDirection:"br-up",positionDirectionTypes:"br-up br-left bl-up bl-right tr-down tr-left tl-down tl-right".split(" "),duration:2E3,slideDuration:500,separator:"\x3chr\x3e",postCreate:function(){this.inherited(arguments);this.hide();this.ownerDocument.body.appendChild(this.domNode);this.messageTopic&&this.own(r.subscribe(this.messageTopic,b.hitch(this,"_handleMessage")))},_handleMessage:function(a){b.isString(a)?
this.setContent(a):this.setContent(a.message,a.type,a.duration)},setContent:function(a,n,c){c=void 0===c?this.duration:c;if(this.slideAnim&&("playing"!=this.slideAnim.status()&&this.slideAnim.stop(),"playing"==this.slideAnim.status()||this.fadeAnim&&"playing"==this.fadeAnim.status())){setTimeout(b.hitch(this,function(){this.setContent(a,n,c)}),50);return}for(var d in this.messageTypes)h.remove(this.containerNode,"dijitToaster"+m(this.messageTypes[d]));g.set(this.containerNode,"opacity",1);this._setContent(a);
h.add(this.containerNode,"dijitToaster"+m(n||this.defaultType));this.show();d=k.getMarginBox(this.containerNode);this._cancelHideTimer();if(this.isVisible)this._placeClip(),this._stickyMessage||this._setHideTimer(c);else{var e=this.containerNode.style,f=this.positionDirection;if(0<=f.indexOf("-up"))e.left="0px",e.top=d.h+10+"px";else if(0<=f.indexOf("-left"))e.left=d.w+10+"px",e.top="0px";else if(0<=f.indexOf("-right"))e.left=0-d.w-10+"px",e.top="0px";else if(0<=f.indexOf("-down"))e.left="0px",e.top=
0-d.h-10+"px";else throw Error(this.id+".positionDirection is invalid: "+f);this.slideAnim=y.slideTo({node:this.containerNode,top:0,left:0,duration:this.slideDuration,onEnd:b.hitch(this,function(){this.fadeAnim=t.fadeOut({node:this.containerNode,duration:1E3,onEnd:b.hitch(this,function(){this.isVisible=!1;this.hide()})});this.own(this.fadeAnim);this._setHideTimer(c);this.on("select",b.hitch(this,function(){this._cancelHideTimer();this._stickyMessage=!1;this.fadeAnim.play()}));this.isVisible=!0})});
this.own(this.slideAnim);this.slideAnim.play()}},_setContent:function(a){b.isFunction(a)?a(this):(a&&this.isVisible&&(a=this.contentNode.innerHTML+this.separator+a),this.contentNode.innerHTML=a)},_cancelHideTimer:function(){this._hideTimer&&(clearTimeout(this._hideTimer),this._hideTimer=null)},_setHideTimer:function(a){this._cancelHideTimer();0<a?(this._cancelHideTimer(),this._hideTimer=setTimeout(b.hitch(this,function(a){this.bgIframe&&this.bgIframe.iframe&&(this.bgIframe.iframe.style.display="none");
this._hideTimer=null;this._stickyMessage=!1;this.fadeAnim.play()}),a)):this._stickyMessage=!0},_placeClip:function(){var a=l.getBox(this.ownerDocument),b=k.getMarginBox(this.containerNode),c=this.clipNode.style;c.height=b.h+"px";c.width=b.w+"px";var d=this.positionDirection;d.match(/^t/)?c.top=a.t+"px":d.match(/^b/)&&(c.top=a.h-b.h-2+a.t+"px");d.match(/^[tb]r-/)?c.left=a.w-b.w-1-a.l+"px":d.match(/^[tb]l-/)?c.left="0px":d.match(/^[tb]c-/)&&(c.left=Math.round((a.w-b.w-1-a.l)/2)+"px");c.clip="rect(0px, "+
b.w+"px, "+b.h+"px, 0px)";z("ie")&&(this.bgIframe||(this.clipNode.id||(this.clipNode.id=u.getUniqueId("dojox_widget_Toaster_clipNode")),this.bgIframe=new x(this.clipNode)),a=this.bgIframe.iframe)&&(a.style.display="block")},onSelect:function(a){},show:function(){g.set(this.domNode,"display","block");this._placeClip();this._scrollConnected||(this._scrollConnected=q.after(l,"scroll",b.hitch(this,"_placeClip")),this.own(this._scrollConnected))},hide:function(){g.set(this.domNode,"display","none");this._scrollConnected&&
(this._scrollConnected.remove(),this._scrollConnected=!1);g.set(this.containerNode,"opacity",1)}})});
//# sourceMappingURL=Toaster.js.map