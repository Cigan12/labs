import { extname } from 'path';

export const editFileName = (req, file, callback) => {
    console.log('Cigan-log: editFileName -> file', file);
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}${fileExtName}`);
};
