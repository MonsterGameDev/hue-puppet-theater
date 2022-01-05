import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Group, GroupActionUpdate } from '../state.interfaces';

export const groupsLoadAction = createAction('[GROUPS] - load');
export const groupsLoadSuccessAction = createAction(
  '[GROUPS] - load success',
  props<{ groups: Group[] }>()
);
export const groupsLoadErrorAction = createAction(
  '[GROUPS] - load error',
  props<{ error: HttpErrorResponse }>()
);

export const groupUpdateAction = createAction(
  '[GROUPS] - update group put',
  props<{ body: GroupActionUpdate }>()
);
export const groupUpdateErrorAction = createAction(
  '[GROUPS] - update group-state put error',
  props<{ error: HttpErrorResponse }>()
);

export const groupSelectedAction = createAction(
  '[GROUPS] - Set selected GroupId',
  props<{ payload: Group }>()
);

export const clearGroupSelectedAction = createAction(
  '[GROUPS] - Clear selected Acton'
);
