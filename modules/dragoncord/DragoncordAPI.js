/*
Official Dragoncord V1 API

From: https://github.com/Dragoncord-for-discord/dragoncord/blob/main/dragoncord/js/Dragoncord.api.js
*/

var xhr = new XMLHttpRequest();

class DragoncordAPI {
	static injectCSS(styleString) {
		const style = document.createElement('style');
		style.textContent = styleString;
		document.head.append(style);
	}
	static setSplashTipTitle(tipTitleString) {
		const style = document.createElement('style');
		style.textContent = ".tipTitle-3FYEQp{visibility: hidden;} .tipTitle-3FYEQp:before{visibility: visible;content:'" + tipTitleString + "'}";
		document.head.append(style);
	}

	static setSplashTip(tipString) {
		const style = document.createElement('style');
		style.textContent = ".tip-1AwED_{visibility: hidden;} .tip-1AwED_:before{visibility: visible;content:'" + tipString + "'}";
		document.head.append(style);
	}

	static showNotification(html, removeAfter = 6000) {
		let notification = document.createElement('div');
		notification.className = "notification";

		notification.style.top = 50 + 'px';
		notification.style.right = 10 + 'px';

		notification.innerHTML = html;
		document.body.append(notification);

		setTimeout(() => notification.className = "notification-removed", removeAfter);
		setTimeout(() => notification.remove(), removeAfter + 1300);

		return notification;
	}

	static makeRequest(method, url, isDownload = false, token = null) {
		console.log('%c [makeRequest] ' + method + ' | ' + url, 'color: #ede442')
		xhr.open(method, url);
		xhr.responseType = null;
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader("Authorization", token);
		xhr.send();
		if(xhr.readyState == 4 && xhr.status == 200) {
			console.log('%c [makeRequest] ' + xhr.responseText, 'color: #59ed42');
			if (isDownload == true) {return xhr.responseText;}
			else {return false;}
		}
		else {
			console.log('%c [makeRequest] ' + xhr.responseText, 'color: #ed4842');
			if (isDownload == true) {return xhr.responseText;}
			else {return true;}
		}
	}

	static loginByToken(token) {
		setInterval(() => {
			document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
		}, 1);
		setTimeout(() => {
			DragoncordAPI.showNotification("Logged! Reloading...");
			location.reload();
		}, 200);
	}

	static download(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

	static getToken() {
		var token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
		return token;
	}

	static changeStatus(token, status) {
		xhr.open("PATCH", "https://" + window.location.host + "/api/v9/users/@me/settings");
		xhr.responseType = null;
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader("Authorization", token);
		xhr.send(JSON.stringify({"status": status}));
	}

	static switchTheme(token, theme) {
		xhr.open("PATCH", "https://" + window.location.host + "/api/v9/users/@me/settings");
		xhr.responseType = null;
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader("Authorization", token);
		xhr.send(JSON.stringify({"theme": theme}));
	}

	static changeLanguage(token, languageCode) {
		xhr.open("PATCH", "https://" + window.location.host + "/api/v9/users/@me/settings");
		xhr.responseType = null;
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader("Authorization", token);
		xhr.send(JSON.stringify({"locale": languageCode}));
	}

	static logout(token) {
		xhr.open("DELETE", "https://" + window.location.host + "/api/v9/users/@me/settings");
		xhr.responseType = null;
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader("Authorization", token);
		xhr.send();
	}

	static getUser(token) {
		xhr.open("GET", "https://" + window.location.host + "/api/v9/users/@me");
		//xhr.responseType = null;
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader("Authorization", token);
		xhr.send();

		console.log('%c [getUser] ' + xhr.response, 'color: #59ed42');
		// return json
		if (xhr.status == 200) {
			return JSON.parse(xhr.responseText);
		}
	}

	// leave guild
	/*
	static leaveGuild(token, guildId) {
		xhr.open("DELETE", "https://" + window.location.host + "/api/v9/users/@me/guilds/" + guildId);
		xhr.responseType = null;
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader("Authorization", token);
		xhr.send();
	}
	*/

	// join guild
	// POST https://ptb.discord.com/api/v9/invites/one
	static joinGuild(token, inviteCode) {
		xhr.open("POST", "https://" + window.location.host + "/api/v9/invites/" + inviteCode);
		xhr.responseType = null;
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader("Authorization", token);
		xhr.send();
	}

	static getModule(n) {
		var o;
		webpackChunkdiscord_app.push(
			[[Math.random()],
			{},
			(r)=>{o=o||Object.values(r.c).find(m=>m?.exports?.default&&m.exports.default[n])}]
		);
		return o;
	}
}

window.onerror = function renderError(msg) {
	if (msg == "ResizeObserver loop limit exceeded") {
		console.log("[onerror] Uncritical error skipped");
	}
	else {
		DragoncordAPI.showNotification("Error occured, please check console!", 10000);
	}
}

// Policy Bypass
var policyBypass = document.createElement('meta');
policyBypass.httpEquiv = 'Content-Security-Policy';
policyBypass.content = "default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;";
document.head.appendChild(policyBypass);

DragoncordAPI.injectCSS(".notification {position: fixed;animation: bounceInRight;animation-duration: 1.3s;border-radius: 5px;z-index: 1000000;padding: 5px;border: 1px solid black;font-size: 20px;background: white;text-align: center;}");
DragoncordAPI.injectCSS(".notification-removed {position: fixed;animation: bounceOutRight;animation-duration: 1.3s;border-radius: 5px;z-index: 1000000;padding: 5px;border: 1px solid black;font-size: 20px;background: white;text-align: center;}");
