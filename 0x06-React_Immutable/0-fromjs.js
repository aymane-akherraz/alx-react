const { fromJS } = require('immutable');

export default function getImmutableObject(obj) {
  return fromJS(obj);
}
