"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var liquidjs_1 = require("liquidjs");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var LiquidPlugin = (function () {
    function LiquidPlugin() {
    }
    LiquidPlugin.prototype.render = function (entities, viewsDir, outDir) {
        var engine = new liquidjs_1.Liquid({ root: viewsDir, extname: ".liquid" });
        return Promise.all(entities
            .map(function (_a) {
            var meta = _a.meta, data = _a.data;
            if (!meta.outpath)
                return Promise.resolve();
            var outPath = changeExtension(path_1.default.join(outDir, meta.outpath), ".html");
            var template = meta['template'] || "app";
            return engine.renderFile(template, data)
                .then(function (output) { return write(outPath, output); });
        }))
            .then(function () { return null; });
    };
    return LiquidPlugin;
}());
exports.default = LiquidPlugin;
function changeExtension(file, extension) {
    var basename = path_1.default.basename(file, path_1.default.extname(file));
    return path_1.default.join(path_1.default.dirname(file), basename + extension);
}
function write(filename, data) {
    return new Promise(function (resolve, reject) {
        fs_1.default.mkdir(path_1.default.dirname(filename), { recursive: true }, function (err) {
            if (err)
                return reject(err);
            fs_1.default.writeFile(filename, data, {}, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(null);
                }
            });
        });
    });
}
//# sourceMappingURL=liquid.js.map