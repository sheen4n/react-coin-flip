(this["webpackJsonpreact-coin-flip"]=this["webpackJsonpreact-coin-flip"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./heads.jpg":13,"./tails.jpg":14};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=c,e.exports=o,o.id=12},function(e,t,n){e.exports=n.p+"static/media/heads.99a10729.jpg"},function(e,t,n){e.exports=n.p+"static/media/tails.43f803d7.jpg"},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(9),n(10),n(1)),l=(n(11),function(e){var t=e.status;return null==t?null:o.a.createElement("div",{className:"Coin"},o.a.createElement("img",{src:n(12)("./".concat(t,".jpg")),alt:"coin"}))}),s=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),s=Object(i.a)(r,2),u=s[0],f=s[1],m=Object(a.useState)(0),d=Object(i.a)(m,2),p=d[0],h=d[1];return o.a.createElement("div",null,o.a.createElement("h1",null,"Let's flip a coin!"),o.a.createElement(l,{status:n}),o.a.createElement("button",{onClick:function(){0===Math.round(Math.random())?(h(p+1),c("tails")):(f(u+1),c("heads"))}},"Flip me!"),o.a.createElement("p",null,"Out of ",u+p," flips, there have been ",u," ","heads and ",p," tails."))};var u=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.9aa2ce9f.chunk.js.map