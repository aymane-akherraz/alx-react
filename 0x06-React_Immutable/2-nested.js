import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const nested = fromJS(object);
  return nested.getIn(array);
}
