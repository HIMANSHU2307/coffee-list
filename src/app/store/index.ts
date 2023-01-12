import { GetApiSuccess, GetApiError, ApiGetCoffeeList, SelectItemSuccess } from './actions';
import { RootEffects } from './effects';
import { rootReducer, initialState } from './reducer';

export const ngrxRoot = {
  ApiGetCoffeeList, GetApiSuccess, GetApiError, rootReducer,
  RootEffects, initialState, SelectItemSuccess
};


