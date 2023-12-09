import { TEMP_FILE_NAME } from "@/constants";
import { createWriteStream, existsSync, unlinkSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const createTempFile = (text: string) => {
  const tempFilePath = join(tmpdir(), TEMP_FILE_NAME);
  if (existsSync(tempFilePath)) {
    unlinkSync(tempFilePath);
  }

  const writeStream = createWriteStream(tempFilePath);
  writeStream.write(text);
  writeStream.end();

  return tempFilePath;
};

export default createTempFile;
