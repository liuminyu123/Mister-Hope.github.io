(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{286:function(e,t,s){},476:function(e,t,s){"use strict";var o=s(286);s.n(o).a},998:function(e,t,s){"use strict";s.r(t);var o=s(0),n=s(336),c=s(342),i=function(e,t,s,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(c<3?n(i):c>3?n(t,s,i):n(t,s))||i);return c>3&&i&&Object.defineProperty(t,s,i),i};let a=class extends o.e{constructor(){super(...arguments),this.showMenu=!1}destroyed(){document.querySelector("html").classList.remove("reveal-full-page"),document.body.classList.remove("reveal-viewport"),document.body.style.removeProperty("--slide-width"),document.body.style.removeProperty("--slide-height")}toggle(){this.showMenu=!this.showMenu}back(){window.history.go(-1),this.showMenu=!1}home(){this.$router.push("/"),this.showMenu=!1}clickOutside(){this.showMenu=!1}};a=i([Object(o.a)({components:{ThemeColor:c.a},directives:{"click-outside":n.a}})],a);var r=a,l=(s(476),s(2)),u=Object(l.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"presentation"},[s("ThemeColor",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]}),e._v(" "),s("Content",{key:e.$route.path,staticClass:"presentation-content"}),e._v(" "),s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOutside,expression:"clickOutside"}],staticClass:"menu",class:{active:e.showMenu}},[s("button",{staticClass:"menu-button",on:{click:e.toggle}},[s("span",{staticClass:"icon"})]),e._v(" "),s("button",{staticClass:"back-button",on:{click:e.back}},[s("svg",{attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"}})])]),e._v(" "),s("button",{staticClass:"home-button",on:{click:e.home}},[s("svg",{attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}})])])])],1)}),[],!1,null,null,null);t.default=u.exports}}]);