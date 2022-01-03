import { createReducer, on } from '@ngrx/store';
import { SequenceItem } from './sequence.interface';
import * as sequenceActions from './sequence.actions';

const initialSequence: SequenceItem[] = [];

export const sequenceReducer = createReducer(
  initialSequence,
  on(sequenceActions.initializeSequenceAction, (state) => []),
  on(sequenceActions.addSequenceItemAction, (state: SequenceItem[], action) => {
    return [...state, action.payload];
  }),
  on(
    sequenceActions.addGroupActionToActionArray,
    (state: SequenceItem[], action) => {
      const arrIndex: number = state.findIndex(
        (sequenceItem: SequenceItem) =>
          sequenceItem.sequenceName === action.payload.sequenceName
      );
      console.log(`state: ${state}, action: ${action}, index: ${arrIndex}`);

      return [...state];
    }
  )
);
