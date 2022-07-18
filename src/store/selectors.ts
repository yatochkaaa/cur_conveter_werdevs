import { RootState } from "./reducer";

export const getLoading = (state: RootState) => state.loading;
export const getConverters = (state: RootState) => state.converters;
