#!/usr/bin/env node
/**
 * upload-to-cdn.mjs
 *
 * Uploads all files from dist/ to Bunny CDN storage, then purges the pull-zone
 * cache. Runs as part of the CI/CD deploy step.
 */

import { stat } from 'node:fs/promises';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { collectFiles } from './collect-files.mjs';
import { purgeCache, uploadBatch } from './upload-batch.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = resolve(here, '..', 'dist');

const STORAGE_ACCESS_KEY = process.env.BUNNY_STORAGE_ACCESS_KEY;
const API_KEY = process.env.BUNNY_API_KEY;
const ZONE_ID = process.env.BUNNY_ZONE_ID;
const isCI = Boolean(process.env.CI || process.env.GITHUB_ACTIONS);

const main = async () => {
  try {
    const s = await stat(DIST_DIR);
    if (!s.isDirectory()) throw new Error('not a directory');
  } catch {
    console.warn('[cdn] dist/ not found — skipping CDN upload');
    return;
  }

  if (!STORAGE_ACCESS_KEY || !API_KEY || !ZONE_ID) {
    console.warn(
      '[cdn] Missing one or more required env vars ' +
        '(BUNNY_STORAGE_ACCESS_KEY, BUNNY_API_KEY, BUNNY_ZONE_ID) — skipping CDN upload',
    );
    return;
  }

  if (!/^\d+$/.test(ZONE_ID)) {
    console.warn('[cdn] BUNNY_ZONE_ID must be a numeric ID — skipping CDN upload');
    return;
  }

  console.log('[cdn] Starting CDN upload…');

  let files;
  try {
    files = await collectFiles(DIST_DIR);
  } catch (err) {
    console.error(`[cdn] Failed to read dist/: ${err.message}`);
    return;
  }

  console.log(`[cdn] ${files.length} file(s) to upload`);
  for (const file of files) {
    console.log(`[cdn] queued  ${relative(DIST_DIR, file).replace(/\\/g, '/')}`);
  }

  const { ok, fail } = await uploadBatch(files, DIST_DIR, STORAGE_ACCESS_KEY, isCI);
  console.log(`[cdn] Upload complete — ${ok} succeeded, ${fail} failed`);

  if (fail === 0) {
    await purgeCache(ZONE_ID, API_KEY, isCI);
  } else {
    console.warn('[cdn] Skipping cache purge because some uploads failed');
  }
};

main().catch((err) => {
  console.error(`[cdn] Unexpected error: ${err instanceof Error ? err.message : String(err)}`);
  if (isCI) process.exit(1);
});
