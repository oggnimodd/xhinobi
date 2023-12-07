import path from "path";
import clipboardy from "clipboardy";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { isTextPath } from "@/utils";

const cwd = process.cwd();

const { n: prependFileName, m: minify } = await yargs(hideBin(Bun.argv))
  .option("n", {
    alias: "prependFileName",
    describe: "Prepend the file name before the content",
    type: "boolean",
    default: false,
  })
  .option("m", {
    alias: "minify",
    describe: "Minify the output",
    type: "boolean",
    default: true,
  }).argv;

export const getFiles = (data: Buffer) => {
  return data
    .toString()
    .split("\n")
    .filter((p) => p)
    .map((p) => {
      const filePath = path.resolve(cwd, p);
      const fileName = path.basename(filePath);

      return {
        text: isTextPath(filePath) ? Bun.file(filePath).text() : fileName,
        name: fileName,
      };
    });
};

export const processFiles = (files: ReturnType<typeof getFiles>) => {
  Promise.all(files.map((i) => i.text))
    .then((results) => {
      const final = results
        .map((p, id) => {
          if (prependFileName) {
            return `${files[id].name} ${p}`;
          }
          return p;
        })
        .map((t) => (minify ? t.replace(/\s+/g, " ").trim() : t))
        .reduce((a, b) => a + b, "");

      clipboardy.writeSync(final);
      console.log(`Copied ${final.length} characters to clipboard`);
    })
    .catch((error) => {
      console.error(error);
    });
};

process.stdin.on("data", async (data) => {
  console.log(data.toString());
  const files = getFiles(data);
  processFiles(files);
});
