import { createReducer, on } from '@ngrx/store';
import * as sequenceActions from './sequence.actions';
import { Sequences } from '../state.interfaces';
import { state } from '@angular/animations';

const initialSequences: Sequences = {
  selectedSequence: undefined,
  sequences: [],
};

export const sequenceReducer = createReducer(
  initialSequences,
  on(sequenceActions.initializeSequenceAction, (state) => initialSequences),
  on(sequenceActions.addSequenceItemAction, (state: Sequences, action) => {
    return {
      ...state,
      sequences: [...state.sequences, action.payload],
    };
  }),
  on(sequenceActions.setSelectedSequenceItem, (state: Sequences, action) => ({
    ...state,
    selectedSequence: action.payload,
  })),
  on(
    sequenceActions.addGroupActionToActionArray,
    (state: Sequences, action) => {
      return {
        ...state,
        sequences: state.sequences
          .map((sequenceItem) => ({ ...sequenceItem }))
          .map((sequenceItem) => {
            if (sequenceItem.sequenceName === action.payload.sequenceName) {
              return {
                ...sequenceItem,
                groupActionArray: [
                  ...sequenceItem.groupActionArray,
                  action.payload.groupActionUpdate,
                ],
              };
            } else {
              return sequenceItem;
            }
          }),
      };
    }
  )
);
