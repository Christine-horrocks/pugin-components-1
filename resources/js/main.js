var UK_Parliament={setCookie:function(e,t,r){var n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);var i="expires="+n.toUTCString();document.cookie=e+"="+t+"; "+i+";path=/"},getCookie:function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){var i=r[n].trim();if(0===i.indexOf(t))return i.substring(t.length,i.length)}return!1},httpRequest:function(e,t){var r=new XMLHttpRequest;r.open("GET",e),r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){var e=JSON.parse(r.responseText);t&&t(e)}else console.log(r.statusText)},r.send()},traverseUp:function(e,t,r){var n=e.parentElement,i=Object.keys(t);if(n)for(var a=0;a<i.length;a++){if(!n.hasAttribute(i[a])||n.getAttribute(i[a])!==t[i[a]])return this.traverseUp(n,t,r);if(a+1===i.length)return r?r(n):n}throw"Sorry, there is no such ancestor with the identifiers you referenced: "+JSON.stringify(t)},toggleClass:function(e,t){e&&(e.classList.contains(t)?e.classList.remove(t):e.classList.add(t))},cookieBanner:function(e,t,r){var n=document.getElementById("cookie");!this.getCookie(e)&&n&&(n.classList.add("show"),this.setCookie(e,t,r))}};UK_Parliament.cookieBanner("UK_Parliament__seen_cookie_message","yes",28),UK_Parliament.search=function(){var e=document.querySelector("header"),n=e.querySelector(".uk_parliament"),i=e.querySelector("form"),a=e.querySelector("input"),t=e.querySelector(".input-group"),r=e.querySelector("button"),s=e.querySelector(".btn--toggle");function o(){window.innerWidth<=768?(s.removeAttribute("tabIndex"),i.classList.contains("open")?c():u()):(c(),s.setAttribute("tabIndex","-1"),s.setAttribute("aria-hidden","true"))}function c(){t.removeAttribute("aria-hidden"),a.removeAttribute("tabIndex"),r.removeAttribute("tabIndex")}function u(){t.setAttribute("aria-hidden","true"),a.setAttribute("tabIndex","-1"),r.setAttribute("tabIndex","-1")}s&&(o(),s.addEventListener("click",function(e){i.classList.contains("open")?(r=e,r.preventDefault(),n.classList.remove("portcullis"),i.classList.remove("open"),s.setAttribute("aria-label","open search"),u()):(t=e,t.preventDefault(),n.classList.add("portcullis"),i.classList.add("open"),s.setAttribute("aria-label","close search"),a.focus(),c());var t;var r}),window.addEventListener("orientationchange",o))},UK_Parliament.search();
