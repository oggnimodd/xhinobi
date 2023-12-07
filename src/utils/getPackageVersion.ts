import path from "path";

/**
 * Retrieves the application's version, taking into account whether it's running
 * in development or production mode.
 *
 * @returns {string} The application's version.
 */
const getPackageVersion = () => {
  // Combine the paths with the current directory to avoid potential path traversal vulnerabilities.
  const packageJsonPath = path.join(
    __dirname,
    process.env.NODE_ENV !== "development" ? "../" : "../../",
    "package.json",
  );

  const packageJson = require(packageJsonPath);

  // Validate the package name before returning the version.
  if (packageJson.name !== "xhinobi") {
    console.warn(`Unexpected package name: ${packageJson.name}`);
    return null;
  }

  return packageJson.version;
};

export default getPackageVersion;
