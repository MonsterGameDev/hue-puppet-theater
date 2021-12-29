import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Group } from "../state.interfaces";

export const groupsLoadAction = createAction('[GROUPS] - load');
export const groupsLoadSuccessAction = createAction('[GROUPS] - load success', props<{groups: Group[]}>());
export const groupsLoadErrorAction = createAction('[GROUPS] - load error', props<{error: HttpErrorResponse}>());
