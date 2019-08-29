const imageURL = (mlsID, index) => `https://media.mlspin.com/photo.aspx?nopadding=1&mls=${mlsID}&n=${index}`

const getImages = (mlsID, photoCount) => {
  const max = photoCount - 1
  let i = 0
  // eslint-disable-next-line
  let images = []
  while (i <= max) {
    images.push(imageURL(mlsID, i))
    i++
  }
  return images
}

/**
 * Returns an array with arrays of the given size.
 * Source: https://ourcodeworld.com/articles/read/278/how-to-split-an-array-into-chunks-of-the-same-size-easily-in-javascript
 *
 * @param myArray {Array} array to split
 * @param chunkSize {Integer} Size of every group
 */
function chunkArray (myArray, chunkSize) {
  let index = 0
  const arrayLength = myArray.length
  const tempArray = []

  for (index = 0; index < arrayLength; index += chunkSize) {
    const myChunk = myArray.slice(index, index + chunkSize)
    // Do something if you want with the group
    tempArray.push(myChunk)
  }

  return tempArray
}

export { getImages, chunkArray }
