import { Map } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  return map1.mergeDeep(page2);
}
  