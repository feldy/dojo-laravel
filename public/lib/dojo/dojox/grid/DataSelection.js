//>>built
define("dojox/grid/DataSelection",["dojo/_base/declare","./_SelectionPreserver","./Selection"],function(d,e,c){return d("dojox.grid.DataSelection",c,{constructor:function(a){a.keepSelection&&(this.preserver=new e(this))},destroy:function(){this.preserver&&this.preserver.destroy()},getFirstSelected:function(){var a=c.prototype.getFirstSelected.call(this);return-1==a?null:this.grid.getItem(a)},getNextSelected:function(a){a=this.grid.getItemIndex(a);a=c.prototype.getNextSelected.call(this,a);return-1==
a?null:this.grid.getItem(a)},getSelected:function(){for(var a=[],b=0,c=this.selected.length;b<c;b++)this.selected[b]&&a.push(this.grid.getItem(b));return a},addToSelection:function(a){if("none"!=this.mode){var b=null,b="number"==typeof a||"string"==typeof a?a:this.grid.getItemIndex(a);c.prototype.addToSelection.call(this,b)}},deselect:function(a){if("none"!=this.mode){var b=null,b="number"==typeof a||"string"==typeof a?a:this.grid.getItemIndex(a);c.prototype.deselect.call(this,b)}},deselectAll:function(a){var b=
null;a||"number"==typeof a?(b="number"==typeof a||"string"==typeof a?a:this.grid.getItemIndex(a),c.prototype.deselectAll.call(this,b)):this.inherited(arguments)}})});
//# sourceMappingURL=DataSelection.js.map