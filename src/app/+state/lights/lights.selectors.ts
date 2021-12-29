import { createSelector } from '@ngrx/store';
import { AppState, Light, Lights } from '../state.interfaces';

export const selectLights = (state: AppState) => state.lights;

export const selectAllLights = createSelector(
  selectLights,
  (state: Lights) => state.lights
);
