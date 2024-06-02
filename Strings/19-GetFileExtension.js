function getFilenameExtension(filename) {
    const extension = filename.split(".").pop();
    return extension;
}

const result1 = getFilenameExtension('abc.py');
console.log(result1);

const result2 = getFilenameExtension('abc.js');
console.log(result2);