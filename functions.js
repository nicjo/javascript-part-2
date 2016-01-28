var list = ["longest string ever","long string"];


list.sort(function compare(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  } else {
  // a must be equal to b
  return 0;}
})

