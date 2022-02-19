export const calcCounts = (arrayData) => {
  const counts = {};
  arrayData.forEach((elm) => {
    counts[elm.topic] = (counts[elm.topic] || 0) + 1;
  });
  return counts;
};

export const removeDuplicates = (arrayData) => {
  const flag = {};
  const unique = [];

  arrayData.forEach((elm) => {
    if (!flag[elm.topic]) {
      flag[elm.topic] = true;
      unique.push(elm);
    }
  });

  return unique;
};

export const convertObjToArray = (counts) => {
  const result = Object.keys(counts).map((key) => [Number(key), counts[key]]);
  return result;
};
