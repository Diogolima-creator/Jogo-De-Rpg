(this.webpackJsonpjogoderpg=this.webpackJsonpjogoderpg||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var o,c,i=t(0),r=t.n(i),a=t(9),s=t.n(a),u=(t(17),t(5)),d=t(2),x=d.a.div(o||(o=Object(u.a)(["\n\n    background-color: #24282F;\n    min-height:100vh;\n    color: #FFF;\n\n"]))),f=d.a.div(c||(c=Object(u.a)(["\n    width: 480px;\n    height: 480px;\n    background-image: url('/assets/map.png');\n    background-position: left top;\n    background-size: 100%;\n"]))),p=d.a.div((function(n){var e=n.size,t=n.left,o=n.top,c=n.sidePos;return"\n    width: ".concat(e,"px;\n    height: ").concat(e,"px;\n    background-image:url('assets/char.png');\n    background-position: 0px ").concat(c,"px;\n    position: absolute;\n    left: ").concat(t,"px;\n    top: ").concat(o,"px;\n")})),b=t(1),g=function(n){var e,t=n.x,o=n.y,c=n.side;return Object(b.jsx)(p,{size:30,left:30*t,top:30*o,sidePos:null!==(e={0:0,1:-30,3:-60,2:-90}[c])&&void 0!==e?e:0})},y=t(7),v=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0],[0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0],[0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],h=function(){var n=function(){var n=Object(i.useState)({x:3,y:5}),e=Object(y.a)(n,2),t=e[0],o=e[1],c=Object(i.useState)(0),r=Object(y.a)(c,2),a=r[0],s=r[1],u=function(n,e){return!(n<0||e<0)&&void 0!==v[e]&&void 0!==v[e][n]&&1===v[e][n]};return{x:t.x,y:t.y,side:a,moveLeft:function(){o((function(n){return{x:u(n.x-1,n.y)?n.x-1:n.x,y:n.y}})),s(1)},moveRight:function(){o((function(n){return{x:u(n.x+1,n.y)?n.x+1:n.x,y:n.y}})),s(3)},moveUp:function(){o((function(n){return{x:n.x,y:u(n.x,n.y-1)?n.y-1:n.y}})),s(2)},moveDown:function(){o((function(n){return{x:n.x,y:u(n.x,n.y+1)?n.y+1:n.y}})),s(0)}}}();Object(i.useEffect)((function(){window.addEventListener("keydown",e)}),[]);var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:KeyboardEvent;switch(e.code){case"KeyA":case"ArrowLeft":n.moveLeft();break;case"KeyW":case"ArrowUp":n.moveUp();break;case"KeyS":case"ArrowDown":n.moveDown();break;case"KeyD":case"ArrowRight":n.moveRight()}};return Object(b.jsx)(x,{children:Object(b.jsx)(f,{children:Object(b.jsx)(g,{x:n.x,y:n.y,side:n.side})})})},j=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),o(n),c(n),i(n),r(n)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),j()}},[[21,1,2]]]);
//# sourceMappingURL=main.cee72fab.chunk.js.map