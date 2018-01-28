export const omit = (obj, arr) => {
  const res = {};
  for (var n in obj) {
    if (arr.indexOf(n) === -1) res[n] = obj[n];
  }
  return res;
};
