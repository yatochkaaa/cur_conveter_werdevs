import { CurrencyConvert } from "../types/types";
import { LOADING_CONVERTS, LOADED_CONVERTS } from "./actionTypes";

export const loadingConvertAction = () => ({ type: LOADING_CONVERTS });
export const loadedConvertAction = (payload: CurrencyConvert[]) => ({ type: LOADED_CONVERTS, payload });
