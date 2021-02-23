import loadJsonFile from 'load-json-file';
import fs from 'fs';
export const readFile = (source: string) => {
    return loadJsonFile.sync(source);
};

export default readFile;
