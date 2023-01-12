import { createAction, props } from '@ngrx/store';
import { CoffeeItem } from './reducer';

const API_GET_COFFEE_LIST = '[CoffeeList] Get API Coffee List';
const API_ERROR_ACTION = '[CoffeeList] Get API Coffee List Error';
const API_SUCCESS_ACTION = '[CoffeeList] Get API Coffee List Success';
const ITEM_SELECT_ACTION = '[CoffeeDetail] Select Item';

export const ApiGetCoffeeList = createAction(API_GET_COFFEE_LIST, props<{size: number, page: number}>());
export const GetApiError = createAction(API_ERROR_ACTION, props<{ error: any }>());
export const GetApiSuccess = createAction(API_SUCCESS_ACTION, props<{ data: any }>());

export const SelectItemSuccess = createAction(ITEM_SELECT_ACTION, props<{ data: CoffeeItem }>());

