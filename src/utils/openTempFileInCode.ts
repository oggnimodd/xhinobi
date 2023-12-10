const openTempFileInCode = (file: string) => {
  const proc = Bun.spawn(["code", file]);
  return proc;
};

export default openTempFileInCode;
