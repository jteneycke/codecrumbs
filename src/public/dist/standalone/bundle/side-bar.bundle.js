(window.webpackJsonpcodecrumbs=window.webpackJsonpcodecrumbs||[]).push([[8],{1151:function(e,t){e.exports={config:{sourceType:"module",plugins:["jsx","asyncGenerators","classProperties","classPrivateProperties","classPrivateMethods","doExpressions","dynamicImport","exportDefaultFrom","exportNamespaceFrom","functionBind","functionSent","importMeta","logicalAssignment","nullishCoalescingOperator","numericSeparator","objectRestSpread","optionalCatchBinding","optionalChaining","throwExpressions"]},getNodeLines:function(e){return[e.loc.start.line,e.loc.end.line]}}},1152:function(e,t,n){var r=n(1153);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(97)(r,o);r.locals&&(e.exports=r.locals)},1153:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".DependenciesTab {\n  height: 100%; }\n  .DependenciesTab .ant-collapse {\n    margin-left: -16px;\n    margin-right: -16px;\n    max-height: 100%;\n    overflow: auto; }\n",""])},1154:function(e,t,n){var r=n(1155);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(97)(r,o);r.locals&&(e.exports=r.locals)},1155:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".CrumbsTab {\n  height: 100%; }\n  .CrumbsTab .ant-collapse {\n    margin-left: -16px;\n    margin-right: -16px;\n    max-height: 100%;\n    overflow: auto; }\n",""])},1157:function(e,t,n){var r=n(1158);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(97)(r,o);r.locals&&(e.exports=r.locals)},1158:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".FlowChartTabContainer {\n  position: relative;\n  height: 100%;\n  overflow: auto; }\n",""])},1159:function(e,t,n){var r=n(1160);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(97)(r,o);r.locals&&(e.exports=r.locals)},1160:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".SideBar {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 650px;\n  z-index: 4;\n  background-color: white;\n  border-left: 1px solid #ebedf0;\n  padding: 8px 16px; }\n  .SideBar .header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between; }\n    .SideBar .header .filePath {\n      display: flex; }\n      .SideBar .header .filePath .copyIcon {\n        margin-left: 5px; }\n  .SideBar .bodySideBar {\n    height: calc(100% - 25px);\n    position: relative; }\n    .SideBar .bodySideBar .ant-tabs {\n      height: 100%; }\n    .SideBar .bodySideBar .ant-tabs-content, .SideBar .bodySideBar .ant-tabs-tabpane {\n      height: calc(100% - 25px); }\n",""])},1175:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(139),a=n(22),l=n(142),c=n(25),s=(n(724),n(1170)),u=(n(493),n(513)),f=(n(729),n(1168)),d=n(10),p=n(489),m=n(95),b=n.n(m),h=n(732),y=n.n(h),v=n(915);n(994);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,O(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,o.a.Component),function(e,t,n){t&&C(e.prototype,t),n&&C(e,n)}(t,[{key:"fixScroll",value:function(){var e=this.props,t=e.dependenciesLines,n=void 0===t?[]:t,r=e.crumbedLines,o=void 0===r?[]:r;if(this.codeRef&&this.codeRef.scrollTo){var i=n.length?n:o.length?o:null;i&&this.codeRef.scrollTo(0,15*i[0][0]-5)}}},{key:"componentDidUpdate",value:function(e){this.fixScroll()}},{key:"componentDidMount",value:function(){this.fixScroll()}},{key:"render",value:function(){var e=this,t=this.props,n=t.code,r=t.crumbedLines,i=void 0===r?[]:r,a=t.dependenciesLines,l=void 0===a?[]:a,c=t.limitedHeight;return o.a.createElement("div",{className:b()("Code",{limitedHeight:c}),ref:function(t){return e.codeRef=t}},o.a.createElement(y.a,{language:"javascript",style:v.atomOneLight,showLineNumbers:!0,wrapLines:!0,customStyle:{fontSize:"12px"},lineProps:function(e){return S(i,e)?{className:"crumbedLine"}:S(l,e)?{className:"importedDependencyLine"}:{}}},n))}}]),t}(),S=function(e,t){return!!e.find(function(e){return e[0]===t&&e[1]===t||e[0]<=t&&e[1]>=t})},j=(n(543),n(582)),F=n(494),N=n(448),k=n(1151),T=k.config,D=k.getNodeLines,B=(n(1152),j.a.Panel),P=Object(i.b)(function(e,t){var n=Object(a.c)(e,t),r=n.filesMap,o=n.foldersMap;return{selectedNode:Object(a.e)(e,t).selectedNode,selectedDependencyEdgeNodes:Object(a.b)(e,t).selectedDependencyEdgeNodes,filesMap:r,foldersMap:o}})(function(e){var t=e.selectedNode,n=e.filesMap,r=e.foldersMap,i=e.selectedDependencyEdgeNodes,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter(function(e){return t.sources.find(function(t){var n=/\w/.exec(e.sourceFile),r=e.sourceFile.substr(n&&n.index);return-1!==t.indexOf(r)})}):[]}(t.importedDependencies,i);return o.a.createElement("div",{className:"DependenciesTab"},a.length?o.a.createElement(j.a,{bordered:!1,defaultActiveKey:["0","1"]},o.a.createElement(B,{header:t.path,key:"0"},o.a.createElement(x,{limitedHeight:!0,code:t.fileCode,dependenciesLines:a.map(function(e){return e.importNodeLines})})),a.map(function(e,t){var i=function(e,t,n){return n[e]&&(e+="/index"),t[e]?t[e]:t[Object.keys(t).find(function(t){return 0===t.indexOf(e)})]}(e.sourceFile,n,r);if(!i)return null;var a=function(e,t,n){var r={},o=[];try{r=F.parse(e,T);var i=!!t.find(function(e){return"ImportDefaultSpecifier"===e.type}),a=t.filter(function(e){return"ImportSpecifier"===e.type}).map(function(e){return e.name});return N.default(r,{enter:function(e){var t=e.node;i&&"ExportDefaultDeclaration"===t.type?o.push(t):"ExportNamedDeclaration"===t.type&&t.declaration&&t.declaration.declarations.find(function(e){return a.includes(e.id.name)})&&o.push(t)}}),o.map(D)}catch(e){return console.log(n,e),o}}(i.fileCode,e.specifiers,e.sourceFile);return o.a.createElement(B,{header:i.path,key:t+1},o.a.createElement(x,{limitedHeight:!0,code:i.fileCode||"",dependenciesLines:a}))})):o.a.createElement(u.a,{message:"C-mon, my dear friend, select dependency connection, what are you waiting for?",type:"info",showIcon:!0}))}),L=(n(1154),j.a.Panel),I=function(e,t,n){var r=[],o=t[e];return o?(Object.keys(o).forEach(function(t){var o=(n[t]&&n[t].children||[]).filter(function(t){return t.data.params.flow===e}).map(function(e){var r=e.data;return{crumbNodeLines:r.crumbNodeLines,file:n[t].data,step:r.params.flowStep}});r=r.concat(o)}),r.sort(function(e,t){return e.step-t.step}),r):r},_=Object(i.b)(function(e,t){var n=Object(a.e)(e,t).selectedNode,r=Object(a.d)(e,t).filesLayoutMap,o=Object(a.a)(e,t),i=o.selectedCrumbedFlowKey,l=o.codeCrumbedFlowsMap;return{selectedNode:n,flowStepsFiles:I(i,l,r)}})(function(e){var t=e.flowStepsFiles;return o.a.createElement("div",{className:"CrumbsTab"},t.length?o.a.createElement(j.a,{bordered:!1,defaultActiveKey:Array(t.length).fill().map(function(e,t){return"".concat(t)})},t.map(function(e,t){return o.a.createElement(L,{header:"[".concat(void 0!==e.step?e.step:"*","] ").concat(e.file.path),key:t},o.a.createElement(x,{limitedHeight:!0,code:e.file.fileCode||"",crumbedLines:[e.crumbNodeLines]}))})):o.a.createElement(u.a,{message:"C-mon, my dear friend, select crumbs trail, what are you waiting for?",type:"info",showIcon:!0}))}),M=n(1156);n(1157);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z={strokeColor:"#00bcd4",defaultFillColor:"#e6f7ff",textColor:"#595959",arrowFillColor:"#00bcd4",rectangleFillColor:"#fff",rectangleDotFillColor:"#fff",functionFillColor:"#fff",rootCircleFillColor:"#fff",loopFillColor:"#fff",conditionFillColor:"#fff",destructedNodeFillColor:"#fff",classFillColor:"#fff",debuggerFillColor:"#fff",exportFillColor:"#e6f7ff",throwFillColor:"#fff",tryFillColor:"#fff",objectFillColor:"#fff",callFillColor:"#fff",debugModeFillColor:"#fff"},J=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=A(this,K(t).call(this,e))).state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,o.a.Component),function(e,t,n){t&&H(e.prototype,t),n&&H(e,n)}(t,[{key:"componentDidMount",value:function(){this.svgRender=Object(M.createSVGRender)(),this.svgRender.applyColorBasedTheme(z),this.setState({ready:!0})}},{key:"shouldComponentUpdate",value:function(){return this.props.active}},{key:"render",value:function(){if(!this.state.ready)return null;var e="";try{var t=Object(M.convertCodeToFlowTree)(this.props.fileCode||"");e=this.svgRender.buildShapesTree(t).print()}catch(e){console.error("SVG generation failed!",e)}return o.a.createElement("div",{className:"FlowChartTabContainer"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))}}]),t}(),U=(n(1159),f.a.TabPane),V=function(e){var t=e.selectedNode,n=e.onClose,r=e.selectedTabInSideBar,i=e.dependenciesDiagramOn,a=e.codeCrumbsDiagramOn,l=e.onTabSelect,c=t&&t.type===d.b?t:null,m=null,b=null;return c&&c.fileCode?(m=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,c.path),o.a.createElement("div",{className:"copyIcon"},o.a.createElement(p.a,{copyText:c.path}))),b=o.a.createElement(f.a,{defaultActiveKey:r,onChange:l},o.a.createElement(U,{tab:"Code",key:"Code"},o.a.createElement(x,{code:c.fileCode})),i&&o.a.createElement(U,{tab:"Dependencies",key:"Dependencies"},o.a.createElement(P,null))||null,a&&o.a.createElement(U,{tab:"Crumbs",key:"Crumbs"},o.a.createElement(_,null))||null,o.a.createElement(U,{tab:"FlowChart",key:"FlowChart"},o.a.createElement(J,{fileCode:c.fileCode,active:"FlowChart"===r})))):(m=o.a.createElement(u.a,{message:"Please select file on diagram to investigate it here.",type:"info",showIcon:!0}),b=o.a.createElement(s.a,null)),o.a.createElement("div",{className:"SideBar"},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"filePath"},m),o.a.createElement("a",{href:"#",onClick:n},"X")),o.a.createElement("div",{className:"bodySideBar"},b))};function X(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=Object(i.b)(function(e,t){var n=Object(a.e)(e,t).selectedNode,r=Object(c.d)(e,t).selectedTabInSideBar,o=Object(c.a)(e);return{selectedNode:n,sideBar:o.sideBar,dependenciesDiagramOn:o.dependenciesDiagramOn,codeCrumbsDiagramOn:o.codeCrumbsDiagramOn,selectedTabInSideBar:r}},function(e){return{onClose:function(){return e(Object(l.e)("sideBar",!1))},onTabSelect:function(t){return e(Object(l.b)(t))}}})(function(e){var t=e.sideBar,n=X(e,["sideBar"]);return t?o.a.createElement(V,n):null})},489:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(441);var r=n(428),o=n(1),i=n.n(o),a=n(490),l=n.n(a),c=function(e){var t=e.copyText;return i.a.createElement("a",{href:"#",onClick:function(){return l()(t)},title:"Copy path"},i.a.createElement(r.a,{type:"copy",theme:"outlined"}))}},994:function(e,t,n){var r=n(995);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(97)(r,o);r.locals&&(e.exports=r.locals)},995:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".Code {\n  height: 100%;\n  position: relative;\n  overflow: auto; }\n  .Code .crumbedLine {\n    display: block;\n    background-color: rgba(255, 225, 244, 0.8); }\n  .Code .importedDependencyLine {\n    display: block;\n    background-color: rgba(0, 148, 249, 0.1); }\n  .Code.limitedHeight {\n    max-height: 300px; }\n",""])}}]);