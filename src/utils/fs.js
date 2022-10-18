import {
  mkdir,
  readFile,
  rename,
  writeFile as fsWriteFile,
} from 'node:fs/promises';
import { join } from 'node:path';
import asyncHandler from './asyncHandler';

export function createDir(path, { r } = { r: false }) {
  return mkdir(join(process.cwd(), path), {
    recursive: r,
  });
}

export function writeFile(file, name, path) {
  return fsWriteFile(join(process.cwd(), path, name), file);
}

export async function mvFile(from, to) {
  const [renameError] = await asyncHandler(
    rename(from, join(process.cwd(), to))
  );

  if (!renameError) return;

  const [readError, tempFile] = await asyncHandler(readFile(from));

  if (readError) throw new readError();

  const [writeError] = await asyncHandler(writeFile(tempFile, '', to));

  if (writeError) throw writeError;
}
