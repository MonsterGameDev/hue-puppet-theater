import { createAction, props } from '@ngrx/store';
import { GroupActionUpdate } from '../state.interfaces';
import { SequenceItem } from './sequence.interface';

export const initializeSequenceAction = createAction('[SEQUENCE] - Initialize');

export const addSequenceItemAction = createAction(
  '[SEQUENCE] - Create SequenceItem',
  props<{ payload: SequenceItem }>()
);

export const setSelectedSequenceItem = createAction(
  '[SEQUENCE] - Set selected sequenceItem',
  props<{ payload: string }>()
);

export const addGroupActionToActionArray = createAction(
  '[SEQUENCE] - add GroupAction to SequenceItem',
  props<{
    payload: {
      sequenceName: string;
      groupActionUpdate: GroupActionUpdate;
    };
  }>()
);
