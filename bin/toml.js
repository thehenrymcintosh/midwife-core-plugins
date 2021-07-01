"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toml_1 = __importDefault(require("toml"));
var fs_1 = __importDefault(require("fs"));
var TomlPlugin = (function () {
    function TomlPlugin() {
    }
    TomlPlugin.prototype.accepts = function (filename) {
        return filename.endsWith(".toml");
    };
    TomlPlugin.prototype.load = function (filename) {
        return open(filename)
            .then(function (text) {
            return toml_1.default.parse(text);
        });
    };
    return TomlPlugin;
}());
exports.default = TomlPlugin;
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
//# sourceMappingURL=toml.js.map