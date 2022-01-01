import { createReducer, on } from '@ngrx/store';
import {
  AppState,
  Group,
  Groups,
  GroupState,
  GroupStateUpdateRequest,
} from '../state.interfaces';
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
  })),
  on(groupsAction.groupUpdateAction, (state: Groups) => ({
    ...state,
    behaviors: {
      loading: false,
      error: null,
    },
  })),
  on(groupsAction.groupUpdateErrorAction, (state, action) => ({
    ...state,
    behaviors: {
      loading: false,
      error: action.error,
    },
  }))
);
