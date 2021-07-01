"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown = exports.Liquid = exports.Toml = exports.all = void 0;
var toml_1 = __importDefault(require("./toml"));
exports.Toml = toml_1.default;
var liquid_1 = __importDefault(require("./liquid"));
exports.Liquid = liquid_1.default;
var markdown_1 = __importDefault(require("./markdown"));
exports.Markdown = markdown_1.default;
exports.all = [
    new toml_1.default(),
    new liquid_1.default(),
    new markdown_1.default()
];
//# sourceMappingURL=index.js.map