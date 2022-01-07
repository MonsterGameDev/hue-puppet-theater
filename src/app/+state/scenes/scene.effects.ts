import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import * as sceneActions from './scenes.actions';

@Injectable({ providedIn: 'root' })
export class ScenesEffects {
  constructor(private httpService: HttpService, private actions$: Actions) {}
  loadScenes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sceneActions.scenesLoadAction),
      switchMap(() =>
        this.httpService.getAllScenes().pipe(
          map((data) =>
            sceneActions.scenesLoadActionSuccess({ payload: data })
          ),
          catchError((error) =>
            of(sceneActions.scenesLoadActionError({ error }))
          )
        )
      )
    );
  });
}
