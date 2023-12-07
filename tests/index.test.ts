import { getFiles, processFiles } from "@/index";
import { expect, test } from "bun:test";
import clipboardy from "clipboardy";

test("getFiles should return an array of file objects", () => {
  const data = Buffer.from("file1\nfile2");
  const files = getFiles(data);

  expect(files).toBeInstanceOf(Array);
  expect(files).toHaveLength(2);
  expect(files[0]).toHaveProperty("text");
  expect(files[0]).toHaveProperty("name");
});

test.only("processFiles should write the files to the clipboard", () => {
  const data = Buffer.from("tests/mock/file2.js\ntests/mock/file1.txt");
  const files = getFiles(data);
  processFiles(files);

  const clipboard = clipboardy.readSync();
  expect(clipboard).toEqual(
    "const a = 2; console.log(a);Hello world Hello world Hello world",
  );
});
