import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => {
  const list = List(page1);
  return list.concat(page2);
}

export const mergeElements = (page1, page2) => {
  const map1 = Map(page1);
  const map = map1.merge(page2);
  return List(map.toArray());
}
