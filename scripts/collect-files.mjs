/** Encode each path segment individually, preserving slashes between them. */
export const encodePath = (rawPath) =>
  rawPath.replace(/\\/g, '/').split('/').map(encodeURIComponent).join('/');

/** Recursively collect every file path under a directory. */
export const collectFiles = async (dir) => {
  const { readdir } = await import('node:fs/promises');
  const { join } = await import('node:path');
  const entries = await readdir(dir, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      paths.push(...(await collectFiles(full)));
    } else {
      paths.push(full);
    }
  }
  return paths;
};
