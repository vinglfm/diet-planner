import {handleActions, createAction} from 'redux-actions';

export const updateProfile = createAction('profile/UPDATE');

const defaultState = {
  profile: {
        gender: 'none',
        height: 0,
        weight: 0
      }
    };

export default handleActions({
    [updateProfile]: (state, action) => {
      return {...state,
        profile: Object.assign({}, state.profile, action.payload)
      };
    }}, defaultState);
