import { postbuild } from "./postbuild";

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  target: "bun",
});

await postbuild();
