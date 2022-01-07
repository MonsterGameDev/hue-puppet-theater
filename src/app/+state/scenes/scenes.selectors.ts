import { createSelector } from '@ngrx/store';
import { AppState } from '../state.interfaces';

const selectScenes = (state: AppState) => state.scenes;

export const selectAllScenes = createSelector(
  selectScenes,
  (state) => state.scenes
);

export const getSelectedScene = createSelector(
  selectScenes,
  (state) => state.selectedLightId
);
