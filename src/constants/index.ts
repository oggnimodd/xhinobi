export const IS_GITPOD = !!process.env.GITPOD_WORKSPACE_ID;
export const IS_CODESPACE =
  !!process.env.CODESPACE_NAME && !!process.env.CLOUDENV_ENVIRONMENT_ID;
export const IS_GOOGLE_CLOUDSHELL =
  !!process.env.DEVSHELL_GCLOUD_CONFIG || !!process.env.BASHRC_GOOGLE_PATH;
export const IS_CLOUD_ENV = IS_GITPOD || IS_CODESPACE || IS_GOOGLE_CLOUDSHELL;
export const TEMP_FILE_NAME = "temp_file.txt";
