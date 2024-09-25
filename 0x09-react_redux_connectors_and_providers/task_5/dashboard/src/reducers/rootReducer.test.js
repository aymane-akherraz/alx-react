import { Map } from 'immutable'
import rootReducer from './rootReducer';

describe('rootreducer ', () => {
  it("test the root reducer's initial state", () => {
    const initialState = {
      courses: Map(),
      notifications: Map(),
      ui: Map()
    };
    const state = rootReducer(initialState);
    expect(state).toEqual(initialState);
  })
})