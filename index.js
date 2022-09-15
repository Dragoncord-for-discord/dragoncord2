const { app, BrowserWindow } = require('electron');
const path = require('path');

const pluginLoader = require('./modules/client/pluginLoader.js');
const eventHandler = require('./modules/client/eventHandler.js');


console.log('[Dragoncord] Dragoncord V2');
console.log('[Dragoncord] Please wait, we are loading :)');

function createWindow () {
	const win = new BrowserWindow({
		width: 1280,
		height: 720,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	});

	win.loadFile('./pages/loader.html');

	eventHandler.load(win);
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});