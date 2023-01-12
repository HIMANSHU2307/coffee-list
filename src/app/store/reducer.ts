import { createReducer, on } from '@ngrx/store';

import { GetApiSuccess, SelectItemSuccess } from './actions';

export interface CoffeeItem {id: number,
  uid: string,
  blend_name: string,
  origin: string,
  variety: string,
  notes: string,
  intensifier: string,
  imageUrl?: string}

export interface RootState {
  coffeeList: CoffeeItem[],
    pagesLoaded: number,
    selectedItem: CoffeeItem
}

export const defaultItem = {
  "id": 0,
  "uid": "",
  "blend_name": "",
  "origin": "",
  "variety": "",
  "notes": "",
  "intensifier": ""
}

export const initialState: RootState = {
  coffeeList: [],
  pagesLoaded: -1,
  selectedItem: defaultItem
}

export const rootReducer = createReducer(initialState,
  on(GetApiSuccess, (state, action) => ({ ...state, coffeeList: state.coffeeList.concat(action.data), pagesLoaded: state.pagesLoaded+1, selectedItem: defaultItem, error: null })),
  on(SelectItemSuccess, (state, action) => ({ ...state, selectedItem: action.data, error: null })),
)
