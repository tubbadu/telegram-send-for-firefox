browser.menus.create({
	id: "telegram-send-link",
	title: "Send URL to Telegram",
	contexts: ["link"],
	"icons": {
		"48": "telegram-send.svg"
	}
});
browser.menus.create({
	id: "telegram-send-image",
	title: "Send media URL to Telegram",
	contexts: ["image"],
	"icons": {
		"48": "telegram-send.svg"
	}
});
browser.menus.create({
	id: "telegram-send-page",
	title: "Send page URL to Telegram",
	contexts: ["page"],
	"icons": {
		"48": "telegram-send.svg"
	}
});

browser.menus.onClicked.addListener(async function (info, tab) {
	console.log(info)
	if (info.menuItemId == "telegram-send-link") {
		try{
			const resp =  await browser.runtime.sendNativeMessage("firefox_telegram_send_nativeHost", {"url": info.linkUrl, "type": "link"});
			console.log("Received :" + resp);
		}catch(e) {
			console.log(`Error: ${e}`);
		}
	}

	if (info.menuItemId == "telegram-send-image") {
		try{
			const resp =  await browser.runtime.sendNativeMessage("firefox_telegram_send_nativeHost", {"url": info.srcUrl, "type": "link"});
			console.log("Received :" + resp);
		}catch(e) {
			console.log(`Error: ${e}`);
		}
	}

	if (info.menuItemId == "telegram-send-page") {
		try{
			const resp =  await browser.runtime.sendNativeMessage("firefox_telegram_send_nativeHost", {"url": info.pageUrl, "type": "link"});
			console.log("Received :" + resp);
		}catch(e) {
			console.log(`Error: ${e}`);
		}
	}
});