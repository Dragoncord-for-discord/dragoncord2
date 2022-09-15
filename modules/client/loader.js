const pluginLoader = require('./pluginLoader.js');

module.exports = {
    load_libs: function (win) {
        pluginLoader.load_lib_dragoncord(win);
        pluginLoader.load_lib_betterdiscord(win);
        pluginLoader.load_themes(win);
        pluginLoader.load_css_dragoncord(win);
    }
}