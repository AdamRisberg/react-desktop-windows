(this["webpackJsonpreact-desktop-windows"]=this["webpackJsonpreact-desktop-windows"]||[]).push([[0],[,,function(e,t,a){e.exports={form:"demo_form__fq-8g",formTitle:"demo_formTitle__2qBt_",formSubtitle:"demo_formSubtitle__2sWvX",formLabel:"demo_formLabel__1ODDo",formInput:"demo_formInput__3m6KK",formButton:"demo_formButton__2TlFa",sampleText:"demo_sampleText__1-4Wx",header:"demo_header__2OGjr"}},function(e,t,a){e.exports={window:"Window_window___JU81",titleBar:"Window_titleBar__jmCi7",title:"Window_title__2Vl1q",button:"Window_button__3mDwx",icon:"Window_icon__2LUNc",content:"Window_content__3jn-1"}},function(e,t,a){e.exports={left:"ResizeBorders_left___5Ow_",right:"ResizeBorders_right__aEBCs",top:"ResizeBorders_top__2p6XE",bottom:"ResizeBorders_bottom__3M_rR",topLeft:"ResizeBorders_topLeft__3L0nc",topRight:"ResizeBorders_topRight__3Siuz",bottomLeft:"ResizeBorders_bottomLeft__1PKEU",bottomRight:"ResizeBorders_bottomRight__18vXO"}},,,function(e,t,a){e.exports={fileIcon:"FileIcon_fileIcon__2_Hz0",fileIconImage:"FileIcon_fileIconImage__Spg4f"}},,,function(e,t,a){e.exports={windows:"Windows_windows__2Vpp7"}},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(9),o=a.n(r),s=a(5),u=a(19),c=a(6),m=a(1),l=a(10),d=a.n(l),p=n.a.createContext({});var f=function(e){var t=e.children,a=n.a.useState({width:0,height:0}),i=Object(s.a)(a,2),r=i[0],o=i[1],u=n.a.useState(1),l=Object(s.a)(u,2),f=l[0],h=l[1],g=n.a.useState({}),w=Object(s.a)(g,2),v=w[0],b=w[1],E=n.a.useRef();function _(){var e=E.current.getBoundingClientRect(),t=e.width,a=e.height;o({width:t,height:a})}function x(e){e.target.scrollTop=0,e.target.scrollLeft=0}return n.a.useEffect((function(){return _(),E.current.addEventListener("scroll",x),window.addEventListener("resize",_),function(){return window.removeEventListener("resize",_)}}),[]),n.a.createElement("div",{ref:E,className:d.a.windows},n.a.createElement(p.Provider,{value:{containerSize:r,windowIndexes:v,bringToFront:function(e){b(Object(m.a)({},v,Object(c.a)({},e,f))),h((function(e){return e+1}))},containerRef:E}},t))},h=a(7),g=a.n(h);var w=function(e){var t=e.name,a=e.imageSrc,i=e.onClick,r=e.windowId;return n.a.createElement("button",{className:g.a.fileIcon,onClick:i,"data-window-id":r,"aria-label":"Open ".concat(t)},n.a.createElement("div",{className:g.a.fileIconImage,style:{backgroundImage:"url(".concat(a,")")},"data-window-id":r}),n.a.createElement("span",{"data-window-id":r},t))},v=a(4),b=a.n(v);var E=function(e){var t=e.windowId;return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:b.a.right,"data-mode":"right","data-window-id":t}),n.a.createElement("span",{className:b.a.left,"data-mode":"left","data-window-id":t}),n.a.createElement("span",{className:b.a.bottom,"data-mode":"bottom","data-window-id":t}),n.a.createElement("span",{className:b.a.top,"data-mode":"top","data-window-id":t}),n.a.createElement("span",{className:b.a.topLeft,"data-mode":"left-top","data-window-id":t}),n.a.createElement("span",{className:b.a.bottomLeft,"data-mode":"left-bottom","data-window-id":t}),n.a.createElement("span",{className:b.a.topRight,"data-mode":"right-top","data-window-id":t}),n.a.createElement("span",{className:b.a.bottomRight,"data-mode":"right-bottom","data-window-id":t}))},_={open:!1,position:{left:50,top:50,width:300,height:300},prevPosition:{left:50,top:50,width:300,height:300},boundsOffset:{x:0,y:0},maximized:!1,transparent:!1},x="SET_POSITION",N="SET_MAXIMIZED",I="TOGGLE_MAXIMIZED",y="SET_TRANSPARENT",O="SET_OPEN",S="OPEN",R="CLOSE",z="RESIZE";function L(e,t){var a=e.prevPosition,i=e.maximized,n=e.position,r=e.boundsOffset,o=t.mousePosition,u=t.mouseOffset,c=t.resizeMode,l=t.containerSize,d=t.minHeight,p=t.minWidth;if(i){var f=o.x-a.width/2;return f=Math.max(0,f),f=Math.min(f,l.width-a.width),u.x=o.x-f,u.y=o.y,Object(m.a)({},e,{position:{left:f,top:0,width:a.width,height:a.height},maximized:!1})}var h=Object(m.a)({},n),g=!1,w=c.split("-"),v=Object(s.a)(w,2),b=v[0],E=v[1];b=b||E,E=E||b,"left"===b?function(e,t,a,i){var n=Math.min(a,t.left+t.width-i);e.width-=n-t.left,e.left=n}(h,n,o.x,p):"right"===b&&function(e,t,a,i){e.width=Math.max(a-t.left,i)}(h,n,o.x,p),"top"===E?function(e,t,a,i){var n=Math.min(a,t.top+t.height-i);e.height-=n-t.top,e.height=Math.max(e.height,i),e.top=n}(h,n,o.y,d):"bottom"===E&&function(e,t,a,i){e.height=Math.max(a-t.top,i)}(h,n,o.y,d),"move"===b&&(h.left=o.x-u.x,h.top=o.y-u.y,g=!0);var _=Object(m.a)({},r),x=h.left+h.width,N=h.top+h.height;return _.x=Math.min(0,l.width-x),_.y=Math.min(0,l.height-N),Object(m.a)({},e,{position:h,boundsOffset:_,transparent:g})}function q(e,t){if(!t.width||!t.height)return e;var a=e.position,i=e.boundsOffset,n=Object(m.a)({},a);return n.left<=0?n.width=Math.min(t.width-n.left-i.x,n.width):n.left=Math.min(t.width-n.width-i.x,n.left),n.top<=0?n.height=Math.min(t.height-n.top-i.y,n.height):n.top=Math.min(t.height-n.height-i.y,n.top),Object(m.a)({},e,{position:n})}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return L(e,t.payload);case N:return Object(m.a)({},e,{maximized:t.payload});case y:return Object(m.a)({},e,{transparent:t.payload});case I:return e.maximized?Object(m.a)({},e,{position:Object(m.a)({},e.prevPosition),maximized:!1}):Object(m.a)({},e,{prevPosition:Object(m.a)({},e.position),position:{top:0,left:0,width:t.payload.width,height:t.payload.height},maximized:!0});case O:return Object(m.a)({},e,{open:t.payload});case S:if(e.open)return e;var a=t.payload,i=a.containerSize,n=a.x,r=a.y,o=Math.min(.75*i.width,600),s=.75*i.height,u=Object(m.a)({},e.position,{left:n,top:r,width:o,height:s});return Object(m.a)({},e,{position:u,prevPosition:u,open:!0});case R:return Object(m.a)({},e,{position:_.position,prevPosition:_.prevPosition,open:!1});case z:return q(e,t.payload);default:return e}},C=a(3),M=a.n(C);function T(e){var t=e.name,a=void 0===t?"Untitled":t,i=e.iconImageSrc,r=e.minHeight,o=void 0===r?200:r,c=e.minWidth,m=void 0===c?200:c,l=e.children,d=n.a.useReducer(j,_),f=Object(s.a)(d,2),h=f[0],g=f[1],v=h.open,b=h.position,N=h.maximized,O=h.transparent,L=n.a.useContext(p),q=L.containerSize,C=L.containerRef,k=L.windowIndexes,W=L.bringToFront,A=n.a.useRef(Object(u.a)()),F=n.a.useRef(),U=n.a.useRef(""),X=n.a.useRef({mouseDown:!1,offset:{x:0,y:0}}),G=k[A.current];function H(){X.current.mouseDown=!1,g({type:y,payload:!1}),window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",H),C.current.removeEventListener("mouseleave",H)}function V(e){var t=e.clientX,a=e.clientY;g({type:x,payload:{mousePosition:{x:t,y:a},mouseOffset:X.current.offset,resizeMode:U.current,containerSize:q,minHeight:o,minWidth:m}})}n.a.useEffect((function(){v&&F.current.focus()}),[v]),n.a.useEffect((function(){g({type:z,payload:q})}),[q]);var J=b.left,K=b.width,Z=b.top,Y=b.height;return n.a.createElement(n.a.Fragment,null,n.a.createElement(w,{name:a,imageSrc:i,onClick:function(){var e=25*(T.windowCount+1);v||T.windowCount++,g({type:S,payload:{x:e,y:e,containerSize:q}}),W(A.current)},windowId:A.current}),v&&n.a.createElement("div",{ref:F,onMouseDown:function(e){var t=e.target.dataset,a=t.mode,i=t.windowId;if(W(A.current),i&&a){var n=e.clientX,r=e.clientY;U.current=a,X.current.mouseDown=!0,X.current.offset.x=n-b.left,X.current.offset.y=r-b.top,window.addEventListener("mousemove",V),window.addEventListener("mouseup",H),C.current.addEventListener("mouseleave",H)}},tabIndex:"-1",draggable:!1,className:M.a.window,style:{width:"".concat(K,"px"),height:"".concat(Y,"px"),transform:"translate(".concat(J,"px, ").concat(Z,"px)"),opacity:O?"0.8":"1",zIndex:G},"data-window-id":A.current},n.a.createElement("div",{className:M.a.titleBar,"data-mode":"move","data-window-id":A.current},n.a.createElement(B,{imageSrc:i}),n.a.createElement("h2",{className:M.a.title},a),n.a.createElement(D,{onClick:function(){W(A.current),g({type:I,payload:q})},maximized:N}),n.a.createElement(P,{onClick:function(){T.windowCount--,g({type:R,payload:!1})}})),n.a.createElement("div",{className:M.a.content},l),!N&&n.a.createElement(E,{windowId:A.current})))}function B(e){var t=e.imageSrc;return n.a.createElement("img",{draggable:!1,className:M.a.icon,src:t,alt:"icon"})}function D(e){var t=e.onClick,a=e.maximized;return n.a.createElement("button",{className:M.a.button,onClick:t},a?n.a.createElement("img",{className:M.a.icon,src:"images/restore-window.png",alt:"restore"}):n.a.createElement("img",{className:M.a.icon,src:"images/maximize-window.png",alt:"maximize"}))}function P(e){var t=e.onClick;return n.a.createElement("button",{className:M.a.button,onClick:t},n.a.createElement("img",{className:M.a.icon,src:"images/delete.png",alt:"close"}))}T.windowCount=0;var k=T,W=a(2),A=a.n(W);var F=function(){return n.a.createElement("div",{className:A.a.form},n.a.createElement("h1",{className:A.a.formTitle},"Demo Form"),n.a.createElement("p",{className:A.a.formSubtitle},"This form does nothing, but feel free to fill it out."),n.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},n.a.createElement("label",{className:A.a.formLabel},"Name",n.a.createElement("input",{className:A.a.formInput,name:"name"})),n.a.createElement("label",{className:A.a.formLabel},"Email",n.a.createElement("input",{className:A.a.formInput,type:"email",name:"email"})),n.a.createElement("label",{className:A.a.formLabel},"Comments",n.a.createElement("textarea",{className:A.a.formInput,name:"comments",rows:"10"})),n.a.createElement("button",{className:A.a.formButton,type:"submit"},"Submit to Nowhere")))};var U=function(){return n.a.createElement("div",{className:A.a.sampleText},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Urna nec tincidunt praesent semper. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Lacinia quis vel eros donec ac odio tempor orci. Curabitur vitae nunc sed velit dignissim sodales ut. Dictum varius duis at consectetur lorem donec. Magna ac placerat vestibulum lectus mauris ultrices. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. In cursus turpis massa tincidunt dui ut ornare lectus sit."),n.a.createElement("p",null,"Ut ornare lectus sit amet. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Aliquet nibh praesent tristique magna sit amet purus. Enim sed faucibus turpis in eu. Bibendum neque egestas congue quisque egestas diam in arcu. Erat pellentesque adipiscing commodo elit at imperdiet dui. Sit amet est placerat in egestas erat imperdiet. Non quam lacus suspendisse faucibus interdum posuere. Diam in arcu cursus euismod. Lacus vestibulum sed arcu non odio. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet."),n.a.createElement("p",null,"Eu lobortis elementum nibh tellus. Vitae turpis massa sed elementum tempus egestas. In nibh mauris cursus mattis molestie. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Odio tempor orci dapibus ultrices in iaculis nunc. Nisl rhoncus mattis rhoncus urna neque viverra. Sed sed risus pretium quam vulputate. Sagittis purus sit amet volutpat consequat. Ut sem nulla pharetra diam sit amet. A diam maecenas sed enim ut. Sed augue lacus viverra vitae congue."),n.a.createElement("p",null,"Mi proin sed libero enim sed faucibus turpis in. Erat imperdiet sed euismod nisi porta lorem. Ipsum suspendisse ultrices gravida dictum. Condimentum lacinia quis vel eros donec ac odio. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Risus nec feugiat in fermentum posuere urna. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Leo urna molestie at elementum eu facilisis sed. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Pellentesque massa placerat duis ultricies lacus."),n.a.createElement("p",null,"Tincidunt lobortis feugiat vivamus at augue eget arcu. A arcu cursus vitae congue mauris rhoncus. Pharetra pharetra massa massa ultricies mi. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Lacus vel facilisis volutpat est velit egestas. Amet venenatis urna cursus eget nunc scelerisque viverra. Ultrices vitae auctor eu augue ut. Diam maecenas sed enim ut sem viverra aliquet eget sit. Volutpat ac tincidunt vitae semper quis lectus. Risus viverra adipiscing at in tellus integer feugiat.")," ")};var X=function(){return n.a.createElement("header",{className:A.a.header},n.a.createElement("h1",null,"React Desktop Windows"),n.a.createElement("a",{href:"https://github.com/AdamRisberg/react-desktop-windows","aria-label":"Github Repo"},n.a.createElement("img",{src:"images/github-logo.png",alt:"Github"})))};var G=function(e){var t=e.src,a=e.alt;return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",{src:t,alt:a}))};var H=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,null,n.a.createElement(X,null),n.a.createElement(k,{name:"Beach Image",iconImageSrc:"images/beach-small.jpeg"},n.a.createElement(G,{src:"images/beach.jpeg",alt:"Beach"})),n.a.createElement(k,{name:"Lorem Ipsum",iconImageSrc:"images/notepad.png"},n.a.createElement(U,null)),n.a.createElement(k,{name:"River Image",iconImageSrc:"images/river-small.jpeg"},n.a.createElement(G,{src:"images/river.jpeg",alt:"River"})),n.a.createElement(k,{name:"Demo Form",iconImageSrc:"images/form.png"},n.a.createElement(F,null))))};a(16);o.a.render(n.a.createElement(H,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1eed5b25.chunk.js.map