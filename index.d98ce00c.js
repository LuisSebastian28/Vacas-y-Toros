var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},t=e.parcelRequirec771;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},e.parcelRequirec771=t),t.register("6grdb",(function(e,r){function o(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var t=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t,n;return r=e,(t=[{key:"buscaPrimos",value:function(e){for(var r=this.separarCodigo(e),o="",t=0;t<r.length;t++)this.primo(r[t])&&(o="%");return o}},{key:"primo",value:function(e){for(var r=2;r<e;r++)if(e%r==0)return!1;return 1!==e}},{key:"mensajeFelicidades",value:function(){return"Felicidades Adivinaste El codigo"}},{key:"buscarVacaToro",value:function(e,r){for(var o=!1,t=this.separarCodigo(e),n=this.separarCodigo(r),i="",a=0;a<t.length;a++)t[a]==n[a]?(i+="!",o=!0):t.includes(n[a])&&(i+="*",o=!0),t[a]+1!=n[a]&&t[a]-1!=n[a]||(i+="#",o=!0);return 0==o&&(i="Codigo imcompatible"),i}},{key:"unir",value:function(e){for(var r="",o=0;o<e.length;o++)r+=e[o];return r}},{key:"compararCodigo",value:function(e,r){var o=this.validarCodigo(r);return e==r&&(o=this.mensajeFelicidades()),"Codigo Vacio"!=o&&e!=r&&"Codigo imcompatible"!=(o=this.buscarVacaToro(e,r))&&(o=this.unir(this.separarCodigo(o).sort())),o}},{key:"separarCodigo",value:function(e){for(var r=String(e),o=[],t=0;t<r.length;t++){var n=r.charAt(t);o.push(n)}return o}},{key:"validarCodigo",value:function(e){return""==e?"Codigo Vacio":e}}])&&o(r.prototype,t),n&&o(r,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();e.exports.default=t}));var n,i=(n=t("6grdb"))&&n.__esModule?n:{default:n};var a,u,d=document.querySelector("#intentos"),l=document.querySelector("#codigo-secreto"),c=document.querySelector("#intento"),s=document.querySelector("#inicio-form"),f=document.querySelector("#intento-form"),p=(document.querySelector("#random-code"),document.querySelector("#resultado-div"));document.querySelector("#random-div");s.addEventListener("submit",(function(e){e.preventDefault(),a=l.value,u=Number.parseInt(d.value),s.reset()})),f.addEventListener("submit",(function(e){e.preventDefault();var r=c.value,o=(new i.default).compararCodigo(a,r);u--,p.innerHTML=0==u?"<p> Perdiste :(  El codigo secreto era: "+a+"</p>":"<p>"+o+" Te quedan: "+u+" intentos</p>"}));
//# sourceMappingURL=index.d98ce00c.js.map