import { createReducer, on } from '@ngrx/store';
import { Groups } from '../state.interfaces';
import * as groupsAction from './groups.actions';

export const initialState: Groups = {
  groups: [],
  behaviors: {
    loading: false,
    error: null,
  },
};

export const groupsReducer = createReducer(
  initialState,
  on(groupsAction.groupsLoadAction, (state) => ({
    ...state,
    behaviors: {
      loading: true,
      error: null,
    },
  })),
  on(groupsAction.groupsLoadSuccessAction, (state, action) => ({
    ...state,
    groups: action.groups,
    behaviors: {
      loading: false,
      error: null,
    },
  })),
  on(groupsAction.groupsLoadErrorAction, (state, action) => ({
    ...state,
    behaviors: {
      loading: false,
      error: action.error,
    },
  }))
);
