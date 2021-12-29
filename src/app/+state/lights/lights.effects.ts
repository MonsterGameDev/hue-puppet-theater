import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, reduce, switchMap, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { Light } from '../state.interfaces';
import * as lightActions from './lights.actions';

@Injectable({ providedIn: 'root' })
export class LightEffects {
  constructor(private httpService: HttpService, private actions$: Actions) {}

  loadLights$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(lightActions.lightsLoadAction),

      switchMap(() => {
        return this.httpService.getAllLights().pipe(
          map((response) => {
            let lights: Light[] = [];
            Object.keys(response).forEach((key) => {
              lights?.push({
                id: parseInt(key,10),
                ...response[key],
              });
            });
            return lightActions.lightsLoadSuccessAction({
              lights,
            });
          }),
          catchError((error) => {
            return of(lightActions.lightsLoadErrorAction({ error }));
          })
        );
      })
    );
  });


}
