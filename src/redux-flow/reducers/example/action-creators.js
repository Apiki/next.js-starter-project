import { FETCH_EXAMPLE, DONE_EXAMPLE } from './actions';

export const fetchExample = value => (dispatch) => {
  dispatch({
    type: FETCH_EXAMPLE,
    payload: {
      title: value,
    },
  });

  setTimeout(() => {
    dispatch({
      type: DONE_EXAMPLE,
      payload: {
        title: 'Finished dispatch',
      },
    });
  }, 3000);
};
