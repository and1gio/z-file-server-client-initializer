'use strict';

module.exports = {
    run: function (app, next) {
        var ZFileServerClient = require("z-file-server-client");
        if(!app.client){
            app.client = {};
        }
        app.client.zFileServer = new ZFileServerClient(app.config.zFileServerClient);
        next();
    }
};