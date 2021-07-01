import { LoaderPlugin } from "midwife";
export default class TomlPlugin implements LoaderPlugin {
    accepts(filename: string): boolean;
    load(filename: string): Promise<any>;
}
//# sourceMappingURL=toml.d.ts.map