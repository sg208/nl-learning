import { readFile } from 'node:fs/promises';
import { relative } from 'node:path';

import { encodePath } from './collect-files.mjs';

const STORAGE_BASE_URL = 'https://storage.bunnycdn.com/nllearning-prod';
const PURGE_URL = 'https://api.bunny.net/pullzone';

export const uploadFile = async (filePath, distDir, storageAccessKey, isCI) => {
  const relativePath = relative(distDir, filePath).replace(/\\/g, '/');
  const url = `${STORAGE_BASE_URL}/${encodePath(relativePath)}`;

  let body;
  try {
    body = await readFile(filePath);
  } catch (err) {
    const msg = `[cdn] ✗ read error  ${relativePath}: ${err.message}`;
    if (isCI) throw new Error(msg);
    console.error(msg);
    return false;
  }

  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        AccessKey: storageAccessKey,
        'Content-Type': 'application/octet-stream',
      },
      body,
    });

    if (!res.ok) {
      const msg = `[cdn] ✗ upload failed  ${relativePath}  HTTP ${res.status}`;
      if (isCI) throw new Error(msg);
      console.error(msg);
      return false;
    }

    console.log(`[cdn] ✓ uploaded  ${relativePath}`);
    return true;
  } catch (err) {
    const msg = err.message.startsWith('[cdn]')
      ? err.message
      : `[cdn] ✗ network error  ${relativePath}: ${err.message}`;
    if (isCI) throw new Error(msg);
    console.error(msg);
    return false;
  }
};

export const uploadBatch = async (files, distDir, storageAccessKey, isCI, concurrency = 8) => {
  let ok = 0;
  let fail = 0;

  for (let i = 0; i < files.length; i += concurrency) {
    const batch = files.slice(i, i + concurrency);
    const results = await Promise.all(
      batch.map((file) => uploadFile(file, distDir, storageAccessKey, isCI)),
    );
    for (const success of results) {
      if (success) ok++;
      else fail++;
    }
  }

  return { ok, fail };
};

export const purgeCache = async (zoneId, apiKey, isCI) => {
  const url = `${PURGE_URL}/${zoneId}/purgeCache`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        AccessKey: apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const msg = `[cdn] ✗ cache purge failed  HTTP ${res.status}`;
      if (isCI) throw new Error(msg);
      console.error(msg);
      return false;
    }

    console.log('[cdn] ✓ cache purged');
    return true;
  } catch (err) {
    const msg = err.message.startsWith('[cdn]')
      ? err.message
      : `[cdn] ✗ cache purge network error: ${err.message}`;
    if (isCI) throw new Error(msg);
    console.error(msg);
    return false;
  }
};
