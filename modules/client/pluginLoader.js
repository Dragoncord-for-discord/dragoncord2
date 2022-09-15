const fs = require("fs");

module.exports = {
  load_plugins: function (win) {
    fs.readdir('./plugins', function (err, files) {
      if (err) { console.log('[Error] Unable to scan directory: ' + err); }
      else {
        if (!files.length) { console.log('[Plugin JS] Folder is empty'); }
        else {
          files.forEach(function (file) {
            const pluginsToLoad = fs.readFileSync('./plugins/' + file).toString();
            win.webContents.executeJavaScript(pluginsToLoad);
            win.webContents.executeJavaScript("console.log('[Plugin JS] Loaded: " + file + "');");
            console.log('[Plugin JS] Loaded: ' + file);
          });
        }
      }
    });
  },

  load_lib_betterdiscord: function (win) {
    fs.readdir('./modules/betterdiscord', function (err, files) {
      if (err) { console.log('[Error] Unable to scan directory: ' + err); }
      else {
        if (!files.length) { console.log('[BetterDiscord JS] Folder is empty'); }
        else {
          files.forEach(function (file) {
            const pluginsToLoad = fs.readFileSync('./modules/betterdiscord/' + file).toString();
            win.webContents.executeJavaScript(pluginsToLoad);
            win.webContents.executeJavaScript("console.log('[BetterDiscord JS] Loaded: " + file + "');");
            console.log('[BetterDiscord JS] Loaded: ' + file);
          });
        }
      }
    });
  },

  load_lib_dragoncord: function (win) {
    fs.readdir('./modules/dragoncord', function (err, files) {
      if (err) { console.log('[Error] Unable to scan directory: ' + err); }
      else {
        if (!files.length) { console.log('[Dragoncord JS] Folder is empty'); }
        else {
          files.forEach(function (file) {
            const pluginsToLoad = fs.readFileSync('./modules/dragoncord/' + file).toString();
            win.webContents.executeJavaScript(pluginsToLoad);
            win.webContents.executeJavaScript("console.log('[Dragoncord JS] Loaded: " + file + "');");
            console.log('[Dragoncord JS] Loaded: ' + file);
          });
        }
      }
    });
  },






  load_themes: function (win) {
    fs.readdir('./themes', function (err, files) {
      if (err) { console.log('[Error] Unable to scan directory: ' + err); }
      else {
        if (!files.length) { console.log('[Themes CSS] Folder is empty'); }
        else {
          files.forEach(function (file) {
            const themesToLoad = fs.readFileSync('./themes/' + file).toString();
            win.webContents.insertCSS(themesToLoad);
            win.webContents.executeJavaScript("console.log('[Themes CSS] Loaded: " + file + "');");
            console.log('[Themes CSS] Loaded: ' + file);
          });
        }
      }
    });
  },


  load_css_dragoncord: function (win) {
    fs.readdir('./modules/dragoncord-css', function (err, files) {
      if (err) { console.log('[Error] Unable to scan directory: ' + err); }
      else {
        if (!files.length) { console.log('[Dragoncord CSS] Folder is empty'); }
        else {
          files.forEach(function (file) {
            const cssDragoncordToLoad = fs.readFileSync('./modules/dragoncord-css/' + file).toString();
            win.webContents.insertCSS(cssDragoncordToLoad);
            win.webContents.executeJavaScript("console.log('[Dragoncord CSS] Loaded: " + file + "');");
            console.log('[Dragoncord CSS] Loaded: ' + file);
          });
        }
      }
    });
  },
}