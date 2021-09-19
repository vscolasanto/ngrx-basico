/**
 * Criamos um appReducer para agrupar todos os reducers da aplicação, e utilizamos
 * ele na importação do StoreModule no módulo principal.
 *
 * Um SELECTOR é uma função chamada pelo STORE, para retornar parte do estado.
 * Podemos manipular e/ou encadear seletores.
**/

import { ActionReducerMap, createSelector } from "@ngrx/store";
import { Person } from "../models/person.model";
import * as fromPersonReducer from "./person.reducer";

export interface AppState {
  people: Person[];
}

export const appReducers: ActionReducerMap<AppState, any> = {
  people: fromPersonReducer.reducer
}

export const selectPeople = (state: AppState) => state.people;

export const selectPeopleCount = createSelector(
  selectPeople,
  (people) => people.length
)
