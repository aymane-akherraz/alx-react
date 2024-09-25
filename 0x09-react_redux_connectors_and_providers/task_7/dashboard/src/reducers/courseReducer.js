import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { coursesNormalizer } from "../schema/courses";
const { Map } = require('immutable');

const initialState = Map();

export default function courseReducer(state = initialState, action = {}) {
  
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const data = coursesNormalizer(action.data);
      const newCourses = Map(data.entities.courses).map(course =>
        Map(course).set('isSelected', false)
      )
      return state.merge(newCourses);
    }
    case SELECT_COURSE: {  
      return state.map((course) => {
        course = Map(course)
        return course.setIn(['isSelected'], course.get('id') === action.index);
      })
    }
    case UNSELECT_COURSE: {
      return state.map((course) => {
        course = Map(course)
        return course.setIn(['isSelected'], course.get('id') === action.index? false : 
        course.get('isSelected'));
      })
    }
    default:
      return state
  }
}
