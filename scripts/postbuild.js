import path from "path";

export const postbuild = async () => {
  console.log("Starting postbuild");

  const targetFilePath = path.resolve(process.cwd(), "dist/index.js");

  const output = await Bun.file(targetFilePath).text();
  const paths = process.env.PATH;

  const sanitized = output
    .replaceAll(`"${paths}"`, "process.env.PATH")
    .replaceAll(`"${path.resolve("src/utils")}"`, "__dirname");
  Bun.write(targetFilePath, sanitized);
  console.log("Postbuild complete");
};
