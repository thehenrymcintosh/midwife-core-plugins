"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var marked_1 = __importDefault(require("marked"));
var MarkdownPlugin = (function () {
    function MarkdownPlugin() {
    }
    MarkdownPlugin.prototype.accepts = function (filename) {
        return filename.endsWith(".md");
    };
    MarkdownPlugin.prototype.load = function (filename) {
        return open(filename)
            .then(function (text) {
            return marked_1.default(text);
        });
    };
    return MarkdownPlugin;
}());
exports.default = MarkdownPlugin;
function open(filename) {
    return new Promise(function (resolve, reject) {
        fs_1.default.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
//# sourceMappingURL=markdown.js.map