import textExtensions from "text-extensions";
import path from "path";

const extensions = new Set(textExtensions);

const isTextPath = (filePath: string) => {
  return extensions.has(path.extname(filePath).slice(1).toLowerCase());
};

export default isTextPath;
