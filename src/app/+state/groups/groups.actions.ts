import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Group, GroupStateUpdateRequest } from "../state.interfaces";

export const groupsLoadAction = createAction('[GROUPS] - load');
export const groupsLoadSuccessAction = createAction('[GROUPS] - load success', props<{groups: Group[]}>());
export const groupsLoadErrorAction = createAction('[GROUPS] - load error', props<{error: HttpErrorResponse}>());

export const groupUpdateAction = createAction('[GROUPS] - update group put', props<{body: GroupStateUpdateRequest}>())
export const groupUpdateSuccessAction = createAction('[GROUPS] - update group-state put success', props<{ body: Group[]}>())
export const groupUpdateErrorAction = createAction('[GROUPS] - update group-state put error', props<{error: HttpErrorResponse}>())
