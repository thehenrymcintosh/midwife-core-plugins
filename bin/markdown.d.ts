import { LoaderPlugin } from "midwife";
export default class MarkdownPlugin implements LoaderPlugin {
    accepts(filename: string): boolean;
    load(filename: string): Promise<string>;
}
//# sourceMappingURL=markdown.d.ts.map