import { IS_CLOUD_ENV, TEMP_FILE_NAME } from "@/constants";
import { existsSync, unlinkSync } from "fs";
import { tmpdir, homedir } from "os";
import { join } from "path";

const createTempFile = (text: string) => {
  // In google cloudshell we can only open files that exist in the home directory
  const tempFilePath = IS_CLOUD_ENV
    ? join(homedir(), TEMP_FILE_NAME)
    : join(tmpdir(), TEMP_FILE_NAME);

  if (existsSync(tempFilePath)) {
    unlinkSync(tempFilePath);
  }

  const file = Bun.file(tempFilePath);
  const writer = file.writer();

  writer.write(text);
  writer.end();

  return tempFilePath;
};

export default createTempFile;
