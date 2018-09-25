import { FETCH_EXAMPLE, DONE_EXAMPLE } from './actions';

const initialState = {
  title: 'Example of store',
  isFetching: false,
  success: false,
};

const example = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXAMPLE:
      return {
        ...state,
        title: action.payload.title,
        isFetching: true,
        success: true,
      };
    case DONE_EXAMPLE:
      return {
        ...state,
        title: action.payload.title,
        isFetching: false,
        success: true,
      };
  }

  return Object.assign(initialState, state);
};

export default example;
