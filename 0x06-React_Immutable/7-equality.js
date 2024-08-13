const { is } = require('immutable');

export const areMapsEqual = (map1, map2) => {
  return is(map1, map2);
}
