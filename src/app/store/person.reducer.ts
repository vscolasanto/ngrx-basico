/**
 * A Action é uma função que tem a inteção de efetuar alguma modificação no estado.
 * Porém esta alteração acontece efetivamente a partir do reducer.
 * Os reducers são funções puras (que não modificam o estado, mas sim criam um novo),
 * que interpretam uma ACTION e agem de acordo com o que a action informa.
**/

import { Person } from "../models/person.model";
import * as fromPersonActions from "./person.actions";

export const initialState: Person[] = [];

export function reducer(state = initialState, action: fromPersonActions.PersonActions) {
  switch(action.type) {
    case fromPersonActions.PersonActionTypes.PERSON_ALL:
      return state;
    case fromPersonActions.PersonActionTypes.PERSON_NEW:
      return state;
    case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
      return state;
    case fromPersonActions.PersonActionTypes.PERSON_DELETE:
      return state;
    default:
      return state;
  }
}
