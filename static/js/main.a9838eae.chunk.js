(this.webpackJsonpsabrina2020=this.webpackJsonpsabrina2020||[]).push([[0],{12:function(n,e,t){n.exports=t(20)},17:function(n,e,t){},20:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(3),i=t.n(a),c=(t(17),t(1)),l=t(2);function u(){var n=Object(c.a)(["\n    ul{\n        max-width:1200px;\n        width:100%;\n        display:flex;\n        justify-content:center;\n        algin-item:center;\n        li{\n            max-width:calc((100% / ",") - 30px);\n            margin:0 15px;\n            width:100%;\n            list-style-type:none;\n            text-align:center;\n            a{\n                width:100%;\n                display:block;\n                padding:15px 0;\n                font-size:20px;\n                color:darkblue;\n                text-decoration:none;\n                transition:all 0.3s;\n                &:hover{\n                    color:darkcyan;\n                }\n            }\n        }\n    }\n"]);return u=function(){return n},n}var s=["introduce","myworks","others","others"],d=function(){return o.a.createElement(h,null,o.a.createElement("ul",null,s.map((function(n,e){return o.a.createElement("li",{key:e},o.a.createElement("a",{href:""},n))}))))},h=l.a.div(u(),s.length),p=t(11);function f(){var n=Object(c.a)(["\n    position: fixed;\n    bottom: 50px;\n    right: 50px;\n    color: #343434;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    border: 1px solid #343434;\n    cursor: pointer;\n    background-color: transparent;\n    transition: 0.3s;\n    text-align: center;\n    display: ",";\n    span {\n      line-height: 60px;\n      color: #343434;\n    }\n    &:hover {\n      background-color: #999999;\n    }\n    @media (max-width: 768px) {\n      right: 20px;\n    }\n  "]);return f=function(){return n},n}var m=function(n){var e=o.a.useState(!1),t=Object(p.a)(e,2),r=t[0],a=t[1],i=o.a.useRef(null),c=o.a.useRef(null),l="undefined"!==typeof window?window.scrollY:0,u=o.a.useRef(l);o.a.useEffect((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[]);var s=function(){l=window.scrollY;var n=u.current-l>0;i.current||(i.current=document.body.getBoundingClientRect().height,c.current=0*i.current),n&&l>c.current?a(!0):a(!1),u.current=l};return o.a.createElement(w,{style:{showGoTopBtn:r},onClick:function(){window.scrollTo({top:0,behavior:n.animationDuration})}},n.children)};m.defaultProps={animationDuration:"auto"};var w=l.a.div(f(),(function(n){return n.style.showGoTopBtn?"block":"none"})),v=m;function x(){var n=Object(c.a)(["\n  height:500vh;\n  overflow-x:hidden;\n"]);return x=function(){return n},n}var g=function(){return o.a.createElement(b,null,o.a.createElement(d,null),o.a.createElement(v,{animationDuration:"smooth"},o.a.createElement("span",null,"GOTOP")))},b=l.a.div(x());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a9838eae.chunk.js.map