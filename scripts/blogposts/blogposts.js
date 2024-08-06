"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFolders = getAllFolders;
exports.getAllFiles = getAllFiles;
function getAllFolders() {
    var fs = require('fs');
    return fs.readdirSync(__dirname + '/posts');
}
function getAllFiles(folder) {
    var fs = require('fs');
    return fs.readdirSync(__dirname + '/posts/' + folder);
}
