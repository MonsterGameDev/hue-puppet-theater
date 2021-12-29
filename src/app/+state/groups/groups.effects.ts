import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { Group } from '../state.interfaces';
import * as groupActions from './groups.actions';

@Injectable({ providedIn: 'root' })
export class GroupEffects {
  constructor(private httpService: HttpService, private actions$: Actions) {}

  loadGroups$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(groupActions.groupsLoadAction),
      switchMap(() => {
        return this.httpService.getAllGroups().pipe(
          map((response) => {
            let groups: Group[] = [];
            Object.keys(response).forEach((key) => {
              groups?.push({
                id: parseInt(key, 10),
                ...response[key],
              });
            });
            return groupActions.groupsLoadSuccessAction({ groups });
          }),
          catchError((error) => {
            return of(groupActions.groupsLoadErrorAction({ error }));
          })
        );
      })
    );
  });
}
