import {handleActions, createAction} from 'redux-actions';

export const updateProfile = createAction('profile/UPDATE');

const defaultState = {
  user: {
        gender: 'none',
        height: 0,
        weight: 0
      }
    };

export default handleActions({
    [updateProfile]: (state, action) => {
      return {...state,
        user: Object.assign({}, state.user, action.payload)
      };
    }}, defaultState);
