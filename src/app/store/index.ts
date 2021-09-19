import { ActionReducerMap } from "@ngrx/store";
import { Person } from "../models/person.model";
import * as fromPersonReducer from "./person.reducer";

export interface AppState {
  people: Person[];
}

export const appReducers: ActionReducerMap<AppState, any> = {
  people: fromPersonReducer.reducer
}
