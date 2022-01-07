import { Action, createReducer, on } from '@ngrx/store';
import { Scenes } from './scenes.interfaces';
import * as sceneActions from './scenes.actions';

const initialState: Scenes = {
  selectedSceneId: '',
  scenes: [],
  behaviors: {
    loading: false,
    error: null,
  },
};

export const scenesReducer = createReducer(
  initialState,
  on(sceneActions.scenesLoadAction, (state: Scenes) => ({
    ...state,
    behaviors: {
      loading: true,
      error: null,
    },
  })),
  on(sceneActions.scenesLoadActionSuccess, (state, action) => ({
    ...state,
    scenes: action.payload,
    behaviors: {
      loading: false,
      error: null,
    },
  })),
  on(sceneActions.scenesLoadActionError, (state, action) => ({
    ...state,
    behaviors: {
      loading: false,
      error: action.error,
    },
  }))
);

