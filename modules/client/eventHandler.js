const pluginLoader = require('./pluginLoader.js');
const loader = require('./loader.js')

module.exports = {
	load: function (win) {
		win.webContents.on('did-finish-load', () => {
			loader.load_libs(win);
			pluginLoader.load_plugins(win);
		});

		win.webContents.on('new-window', function(e, url) {
			e.preventDefault();
			require('electron').shell.openExternal(url);
		});
	}
}