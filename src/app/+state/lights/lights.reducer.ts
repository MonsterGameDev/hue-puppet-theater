import { createReducer, on } from '@ngrx/store';
import { Lights } from '../state.interfaces';
import * as hueActions from './lights.actions';

export const initialState: Lights = {
  lights: [],
  behaviors: {
    loading: false,
    error: null,
  },
};

export const lightsReducer = createReducer(
  initialState,
  on(hueActions.lightsLoadAction, (state) => ({
    ...state,
    behaviors: {
      loading: true,
      error: null,
    },
  })),
  on(hueActions.lightsLoadSuccessAction, (state, action) => {
    return {
      ...state,
      lights: action.lights,
      behaviors: {
        loading: false,
        error: null,
      },
    };
  }),
  on(hueActions.lightsLoadErrorAction, (state, action) => {
    return {
      ...state,
      behaviors: {
        loading: false,
        error: action.error,
      },
    };
  })
);
