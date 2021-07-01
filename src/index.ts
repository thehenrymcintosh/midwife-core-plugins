import Toml from "./toml";
import Liquid from "./liquid";
import Markdown from "./markdown";

export const all = [
  new Toml(), 
  new Liquid(), 
  new Markdown()
];

export {
  Toml,
  Liquid,
  Markdown,
}