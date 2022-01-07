import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Scenes } from "src/app/models/hue-interfaces";
import { Scene } from "./scenes.interfaces";

export const scenesLoadAction = createAction(
  '[SCENES] - Load Scenes'
);
export const scenesLoadActionSuccess = createAction(
  '[SCENES] - Load Scenes',
  props<{payload: Scene[]}>()
);
export const scenesLoadActionError = createAction(
  '[SCENES] - Load Scenes',
  props<{error: HttpErrorResponse}>()
);


