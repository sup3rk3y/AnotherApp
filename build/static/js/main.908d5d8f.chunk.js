(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),r=n.n(o),c=(n(18),n(10)),s=n(11),u=n(3),l=n(4),d=n(6),b=n(5),m=n(7),h=n(1),v=n(2),j=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this))).state={editing:!1},n.edit=n.edit.bind(Object(h.a)(Object(h.a)(n))),n.remove=n.remove.bind(Object(h.a)(Object(h.a)(n))),n.save=n.save.bind(Object(h.a)(Object(h.a)(n))),n.renderForm=n.renderForm.bind(Object(h.a)(Object(h.a)(n))),n.renderDisplay=n.renderDisplay.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"edit",value:function(){this.setState({editing:!0})}},{key:"remove",value:function(){this.props.onRemove(this.props.index)}},{key:"save",value:function(e){e.preventDefault(),this.props.onChange(this._newText.value,this.props.index),this.setState({editing:!1})}},{key:"renderForm",value:function(){var e=this;return i.a.createElement("div",{className:"note"},i.a.createElement("form",{onSubmit:this.save},i.a.createElement("textarea",{ref:function(t){return e._newText=t}}),i.a.createElement("button",{id:"save"},i.a.createElement(v.c,null))))}},{key:"renderDisplay",value:function(){return i.a.createElement("div",{className:"note"},i.a.createElement("p",null,this.props.children),i.a.createElement("span",null,i.a.createElement("button",{onClick:this.edit,id:"edit"},i.a.createElement(v.a,null)),i.a.createElement("button",{onClick:this.remove,id:"remove"},i.a.createElement(v.d,null))))}},{key:"render",value:function(){return this.state.editing?this.renderForm():this.renderDisplay()}}]),t}(i.a.Component),O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this))).state={notes:[]},n.add=n.add.bind(Object(h.a)(Object(h.a)(n))),n.allNotes=n.allNotes.bind(Object(h.a)(Object(h.a)(n))),n.update=n.update.bind(Object(h.a)(Object(h.a)(n))),n.remove=n.remove.bind(Object(h.a)(Object(h.a)(n))),n.nextId=n.nextId.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"update",value:function(e,t){console.log(e," at ",t),this.setState(function(n){return{notes:n.notes.map(function(n){return n.id!==t?n:Object(s.a)({},n,{note:e})})}})}},{key:"add",value:function(e){var t=this;this.setState(function(n){return{notes:[].concat(Object(c.a)(n.notes),[{id:t.nextId(),note:e}])}})}},{key:"nextId",value:function(){return this.uniqueId=this.uniqueId||0,this.uniqueId++}},{key:"remove",value:function(e){console.log("remove item at :",e),this.setState(function(t){return{notes:t.notes.filter(function(t){return t.id!==e})}})}},{key:"allNotes",value:function(e,t){return i.a.createElement(j,{key:t,index:t,onChange:this.update,onRemove:this.remove},e.note)}},{key:"render",value:function(){return i.a.createElement("div",{className:"board"},this.state.notes.map(this.allNotes),i.a.createElement("button",{onClick:this.add.bind(null,"New Note"),id:"add"},i.a.createElement(v.b,null)))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.908d5d8f.chunk.js.map