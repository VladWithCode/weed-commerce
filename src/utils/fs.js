import {
  mkdir,
  readFile,
  rename,
  writeFile as fsWriteFile,
} from 'node:fs/promises';
import { join } from 'node:path';
import asyncHandler from './asyncHandler';

export async function createDir(path, { r } = { r: false }) {
  return await mkdir(join(process.cwd(), path), {
    recursive: r,
  });
}

export async function writeFile(file, name, path) {
  return await fsWriteFile(join(process.cwd(), path, name), file);
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
