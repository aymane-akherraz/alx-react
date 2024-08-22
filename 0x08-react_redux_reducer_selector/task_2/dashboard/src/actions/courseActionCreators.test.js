import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('course', () => {
  it('Calling the selectCourse creator with 1 as argument return the expected result', () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: SELECT_COURSE, index: 1 })
  });
  it('Calling the unselectCourse creator with 1 as argument return the expected result', () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 })
  });
});