import { createSelector } from '@ngrx/store';
import { AppState, Sequences } from '../state.interfaces';

export const selectSequenceSlice = (state: AppState) => state.sequences;

export const getAllSequences = createSelector(
  selectSequenceSlice,
  (state: Sequences) => {
    return state.sequences;
  }
);

export const getSelectedSequenceName = createSelector(
  selectSequenceSlice,
  (state: Sequences) => state.selectedSequence
);

export const getSelectedSequence = createSelector (
  selectSequenceSlice,
  getSelectedSequenceName,
  (slice, sequenceName) => {
    return slice.sequences.find((sequence) => sequence.sequenceName === sequenceName)
  }
)
