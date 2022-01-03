import { createSelector } from '@ngrx/store';
import { AppState, Sequences } from '../state.interfaces';

export const selectSequenceSlice = (state: AppState) => state.sequences;

export const selectSequence = createSelector(
  selectSequenceSlice,
  (state: Sequences) => {
    console.log('state');

    return state.sequences;
  }
);

export const getSelectedSequence = createSelector(
  selectSequenceSlice,
  (state: Sequences) => state.selectedSequence
);
