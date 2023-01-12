import { Injectable } from '@angular/core';
import { ApiGetCoffeeList, GetApiSuccess, GetApiError } from './actions';
import { switchMap, catchError, map, mergeMap, tap, concatMap, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ListService } from '../services/list.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class RootEffects {

  constructor(
    private actions: Actions,
    private listService: ListService){}

  getPostDataEffect$ = createEffect(
    () => this.actions.pipe(
      ofType(ApiGetCoffeeList),
      mergeMap((action) => {
        return this.listService.GetCoffeeList(action.size, action.page).pipe(
          map(res => GetApiSuccess({ data: res })),
          catchError(error => of(GetApiError({ error })))
        )
      }
      )
    )
  )

}
