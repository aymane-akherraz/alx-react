const { Map } = require('immutable');

export default function getImmutableObject(obj) {
  return Map(obj);
}
