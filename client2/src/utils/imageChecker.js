const getFileExtension = (fileName) => {
  var fileNameArray = fileName.split('.')
  var fileExtension = fileNameArray[fileNameArray.length - 1]
  return fileExtension
}

export const isValidImageFile = ({ name, type, size }) => {
  try {
    // Regex for proper file/mime types
    const allowedFileExt = /^jpeg$|^jpg$|^png$|^gif$/gi
    const allowedMimeTypes = /^image\/jpeg$|^image\/jpg$|^image\/png$|^image\/gif$/gi
    // Test for correct file/mime types
    const isCorrectFileExt = allowedFileExt.test(getFileExtension(name))
    const isCorrectMimeType = allowedMimeTypes.test(type)
    const isCorrectFileSize = size < 250000
    // Return boolean
    return isCorrectFileExt && isCorrectMimeType && isCorrectFileSize
  } catch (err) {
    return false;
  }
};
