/**
 * Handler for async functions
 * @param {Promise.<T>} p - The Async fn to be handled
 * @returns {Promise<[Error | null, T | null]>}
 */
const asyncHandler = async p => {
  try {
    return [null, await p];
  } catch (err) {
    // Ignore EXDEV errors
    if (process.env.DEBUG && !err.code === 'EXDEV') console.error(err);
    return [err, null];
  }
};

export default asyncHandler;
