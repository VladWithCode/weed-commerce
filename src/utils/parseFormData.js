import { IncomingForm } from 'formidable';

const parseFormData = async req => {
  return await new Promise((resolve, reject) => {
    const form = new IncomingForm({
      multiples: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);

      return resolve({ data: fields, files: files.imgs });
    });
  });
};

export default parseFormData;
