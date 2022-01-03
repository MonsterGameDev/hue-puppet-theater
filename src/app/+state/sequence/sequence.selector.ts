import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../state.interfaces';
import { SequenceItem } from './sequence.interface';

export const selectSequenceSlice = (state: AppState) => state.sequence;

export const selectSequence = createSelector(
  selectSequenceSlice,
  (state: SequenceItem[]) => {
    console.log('state');

    return state;
  }
);
