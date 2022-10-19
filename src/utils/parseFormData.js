import { IncomingForm } from 'formidable';

const parseFormData = async req => {
  return await new Promise((resolve, reject) => {
    const form = new IncomingForm({
      multiples: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);

      const stFileResult = Array.isArray(files.file)
        ? files.file
        : [files.file];

      return resolve({ data: fields, files: stFileResult });
    });
  });
};

export default parseFormData;
