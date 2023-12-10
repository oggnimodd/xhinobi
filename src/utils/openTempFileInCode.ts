import { IS_GOOGLE_CLOUDSHELL } from "@/constants";

const openTempFileInCode = (file: string) => {
  const proc = IS_GOOGLE_CLOUDSHELL
    ? Bun.spawn(["cloudshell", "open", file])
    : Bun.spawn(["code", file]);
  return proc;
};

export default openTempFileInCode;
