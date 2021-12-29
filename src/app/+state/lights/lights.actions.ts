import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Light } from '../state.interfaces';

export const lightsLoadAction = createAction('[LIGHTS] - load');
export const lightsLoadSuccessAction = createAction(
  '[LIGHTS] - load success',
  props<{ lights: Light[] }>()
);
export const lightsLoadErrorAction = createAction(
  '[LIGHTS] load error',
  props<{ error: HttpErrorResponse }>()
);

