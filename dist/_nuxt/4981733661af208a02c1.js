(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{582:function(t,e,n){"use strict";n.r(e);n(59);var r=n(7),s=n.n(r),i=n(92),o=n(60),a={components:{Title:i.a},asyncData:function(){var t=s()(regeneratorRuntime.mark(function t(e){var n,r,s,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.payload,r=e.params,!n){t.next=5;break}return console.log("product:"+n.fields.title),s=n,t.abrupt("return",{post:s});case 5:return t.next=7,Object(o.createClient)().getEntry(r.id).then(function(t){return console.log("entry.fields.title:"+t.fields.title),t}).catch(console.error);case 7:return i=t.sent,t.abrupt("return",{post:i});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},l=n(10),c=Object(l.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section"},[e("Title",{attrs:{title:this.post.fields.title,url:this.post.fields.thumbnail.fields.file.url}}),this._v(" "),e("div",{staticClass:"content"},[e("div",{domProps:{innerHTML:this._s(this.$md.render(this.post.fields.body))}})])],1)},[],!1,null,null,null);e.default=c.exports}}]);