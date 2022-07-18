import { AnyAction} from 'redux';
import { CurrencyConvert } from '../types/types';
import { LOADING_CONVERTS, LOADED_CONVERTS } from './actionTypes';

export type RootState = {
  loading: boolean;
  converters: CurrencyConvert[]
};

const initialState: RootState = {
  loading: false,
  converters: []
};

const rootReducer = (state = initialState, action: AnyAction): RootState => {
  switch (action.type) {
    case LOADING_CONVERTS:
      return { loading: true, converters: [] }
    case LOADED_CONVERTS:
      return { ...state, loading: false, converters: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
