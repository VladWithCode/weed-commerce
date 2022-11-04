export const requestErrorHandler = (
  error,
  { req, res, customMessage, customError, customStatus }
) => {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    console.error(error);
  }

  let sendError = customError || error;

  return res.status(parseInt(customStatus) || 500).json({
    message: customMessage || 'There was an error on the server.',
    error: isDev ? sendError : undefined,
  });
};
