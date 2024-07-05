/* exported reverse */
function reverse(array) {
  let reverseArray = [];

  for (i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }

  return reverseArray;
}
