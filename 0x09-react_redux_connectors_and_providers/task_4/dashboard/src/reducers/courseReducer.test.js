import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { coursesNormalizer } from "../schema/courses";
import courseReducer from "./courseReducer";
const { Map } = require('immutable');

describe('courseReducer', () => {
  it('default state returns an empty array', () => {
    expect((courseReducer()).toJS()).toEqual({});
  });
  const newState = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }
  ]
  it('FETCH_COURSE_SUCCESS returns the data passed', () => {
    const data = [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
    const action = {type: FETCH_COURSE_SUCCESS, data};
    expect((courseReducer(undefined, action).toJS())).toEqual(coursesNormalizer(newState).entities.courses);
  });
  it('SELECT_COURSE returns the data with the right item updated', () => {
    const action = {
      type: SELECT_COURSE,
      index: 2
    }
    const expected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }

    ] 
    const res = Map(coursesNormalizer(newState).entities.courses)
    expect((courseReducer(res, action).toJS())).toEqual((coursesNormalizer(expected).entities.courses))
  });
  it('UNSELECT_COURSE returns the data with the right item updated', () => {
    const action = {
      type: UNSELECT_COURSE,
      index: 2
    }
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]
    const res = Map(coursesNormalizer(initialState).entities.courses);    
    expect((courseReducer(res, action).toJS())).toEqual(coursesNormalizer(newState).entities.courses);
  })
})
