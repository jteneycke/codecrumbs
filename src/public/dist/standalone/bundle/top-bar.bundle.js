(window.webpackJsonpcodecrumbs=window.webpackJsonpcodecrumbs||[]).push([[6],{1177:function(e,n,t){"use strict";t.r(n);t(425),t(707);var r=t(39),a=t.n(r),o=t(43),l=t.n(o),i=t(40),s=t.n(i),c=t(41),p=t.n(c),u=t(1),d=t.n(u),m=t(2),b=t(440),f=t(42),y=t.n(f),h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&(t[r[a]]=e[r[a]])}return t},g=function(e){function n(){return a()(this,n),s()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.prefixCls,t=e.separator,r=e.children,a=h(e,["prefixCls","separator","children"]),o=void 0;return o="href"in this.props?u.createElement("a",y()({className:n+"-link"},a),r):u.createElement("span",y()({className:n+"-link"},a),r),r?u.createElement("span",null,o,u.createElement("span",{className:n+"-separator"},t)):null}}]),n}(u.Component),v=g;g.__ANT_BREADCRUMB_ITEM=!0,g.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},g.propTypes={prefixCls:m.string,separator:m.oneOfType([m.string,m.element]),href:m.string};var x=t(95),E=t.n(x);function C(e,n,t,r){var a=t.indexOf(e)===t.length-1,o=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":("+t+")","g"),function(e,t){return n[t]||e})}(e,n);return a?u.createElement("span",null,o):u.createElement("a",{href:"#/"+r.join("/")},o)}var k=function(e){function n(){return a()(this,n),s()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p()(n,e),l()(n,[{key:"componentDidMount",value:function(){var e=this.props;Object(b.a)(!("linkRender"in e||"nameRender"in e),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){var e=void 0,n=this.props,t=n.separator,r=n.prefixCls,a=n.style,o=n.className,l=n.routes,i=n.params,s=void 0===i?{}:i,c=n.children,p=n.itemRender,d=void 0===p?C:p;if(l&&l.length>0){var m=[];e=l.map(function(e){e.path=e.path||"";var n=e.path.replace(/^\//,"");return Object.keys(s).forEach(function(e){n=n.replace(":"+e,s[e])}),n&&m.push(n),u.createElement(v,{separator:t,key:e.breadcrumbName||n},d(e,s,l,m))})}else c&&(e=u.Children.map(c,function(e,n){return e?(Object(b.a)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children"),Object(u.cloneElement)(e,{separator:t,key:n})):e}));return u.createElement("div",{className:E()(o,r),style:a},e)}}]),n}(u.Component),O=k;k.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},k.propTypes={prefixCls:m.string,separator:m.node,routes:m.array,params:m.object,linkRender:m.func,nameRender:m.func},O.Item=v;var j=O,I=(t(441),t(428)),N=t(139),w=t(10),R=t(489),_=t(22);t(709),n.default=Object(N.b)(function(e,n){return{selectedNode:Object(_.e)(e,n).selectedNode}})(function(e){var n=e.selectedNode;if(!n)return d.a.createElement("div",{className:"SubPanelContainer"},d.a.createElement(j,null,d.a.createElement(j.Item,null,d.a.createElement(I.a,{type:"home"})),d.a.createElement(j.Item,null," ")));var t=n.path.split("/"),r=n.type===w.b?t.pop():null;return d.a.createElement("div",{className:"SubPanelContainer"},d.a.createElement(j,null,d.a.createElement(j.Item,null,d.a.createElement(I.a,{type:"home"})),t.map(function(e,n){return d.a.createElement(j.Item,{key:e+n},d.a.createElement("a",{href:"#",onClick:function(){return console.log("close folder ".concat(t.slice(0,n).join("/")))}},e))}),r&&d.a.createElement(j.Item,null,r)),d.a.createElement("div",{className:"copyIcon"},d.a.createElement(R.a,{copyText:n.path})))})},441:function(e,n,t){"use strict";t(425),t(474)},474:function(e,n,t){var r=t(475);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(97)(r,a);r.locals&&(e.exports=r.locals)},475:function(e,n,t){(e.exports=t(96)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n",""])},489:function(e,n,t){"use strict";t.d(n,"a",function(){return s});t(441);var r=t(428),a=t(1),o=t.n(a),l=t(490),i=t.n(l),s=function(e){var n=e.copyText;return o.a.createElement("a",{href:"#",onClick:function(){return i()(n)},title:"Copy path"},o.a.createElement(r.a,{type:"copy",theme:"outlined"}))}},490:function(e,n,t){"use strict";e.exports=(e=>{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const t=document.getSelection();let r=!1;t.rangeCount>0&&(r=t.getRangeAt(0)),document.body.appendChild(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch(e){}return document.body.removeChild(n),r&&(t.removeAllRanges(),t.addRange(r)),a})},707:function(e,n,t){var r=t(708);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(97)(r,a);r.locals&&(e.exports=r.locals)},708:function(e,n,t){(e.exports=t(96)(!1)).push([e.i,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-breadcrumb {\n  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.ant-breadcrumb .anticon {\n  font-size: 14px;\n}\n.ant-breadcrumb a {\n  color: rgba(0, 0, 0, 0.45);\n  -webkit-transition: color .3s;\n  transition: color .3s;\n}\n.ant-breadcrumb a:hover {\n  color: #40a9ff;\n}\n.ant-breadcrumb > span:last-child {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-breadcrumb > span:last-child .ant-breadcrumb-separator {\n  display: none;\n}\n.ant-breadcrumb-separator {\n  margin: 0 8px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-breadcrumb-link > .anticon + span {\n  margin-left: 4px;\n}\n',""])},709:function(e,n,t){var r=t(710);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(97)(r,a);r.locals&&(e.exports=r.locals)},710:function(e,n,t){(e.exports=t(96)(!1)).push([e.i,".SubPanelContainer {\n  padding: 3px 0;\n  border-top: 1px solid #ebedf0;\n  border-bottom: 1px solid #F5F5F5;\n  display: flex; }\n\n.copyIcon {\n  margin-left: 5px; }\n",""])}}]);