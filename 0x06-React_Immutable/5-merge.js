import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const list = List(page1);
  return list.concat(page2);
}

export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  return map1.merge(page2);
}
