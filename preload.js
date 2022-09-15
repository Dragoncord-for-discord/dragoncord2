const fs = require("fs");

fs.readdir('./preload', function (err, files) {
    if (err) { console.log('[Error] Unable to scan directory: ' + err); }
    else {
        if (!files.length) { console.log('[Preload] Folder is empty'); }
        else {
            files.forEach(function (file) {
                require('./preload/' + file)
                console.log('[Preload] Loaded: ' + file);
            });
        }
    }
});