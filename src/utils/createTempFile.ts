import { TEMP_FILE_NAME } from "@/constants";
import { existsSync, unlinkSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const createTempFile = (text: string) => {
  const tempFilePath = join(tmpdir(), TEMP_FILE_NAME);
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
