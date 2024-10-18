function sumItems(array) {
  let sum = 0;
  for (const arrayElement of array) {
    if (Array.isArray(arrayElement)) {
      sum += sumItems(arrayElement);
    } else {
      sum += arrayElement;
    }
  }
  return sum;
}

module.exports = sumItems;