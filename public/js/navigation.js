"use strict";window.onload=function(){var e=document.getElementById("contact-email-btn"),t=document.getElementById("copy-email-btn"),n=document.getElementById("contact-email-address");e.addEventListener("mouseover",function(){t.classList.add("visible"),n.classList.add("visible")}),e.addEventListener("mouseout",function(){t.classList.remove("visible"),n.classList.remove("visible"),t.innerText="Copy",t.classList.remove("copied")}),t.addEventListener("click",function(){t.innerText="Copied",t.classList.add("copied"),function(e){var t=document.createElement("textarea");if(t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),navigator.userAgent.match(/ipad|ipod|iphone/i)){var n=t.contentEditable,i=t.readOnly;t.contentEditable=!0,t.readOnly=!0;var o=document.createRange();o.selectNodeContents(t);var d=window.getSelection();d.removeAllRanges(),d.addRange(o),t.setSelectionRange(0,999999),t.contentEditable=n,t.readOnly=i}else t.select();document.execCommand("copy"),document.body.removeChild(t)}("ildiko!ildiesign".replace("!","@")+"moc.".split("").reverse().join(""))})};