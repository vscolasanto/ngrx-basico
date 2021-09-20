/**
 * A Action é uma função que tem a inteção de efetuar alguma modificação no estado.
 * Porém esta alteração acontece efetivamente a partir do reducer.
 * Os reducers são funções puras (que não modificam o estado, mas sim criam um novo),
 * que interpretam uma ACTION e agem de acordo com o que a action informa.
**/

import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Person } from "../models/person.model";
import * as fromPersonActions from "./person.actions";

export interface PeopleState extends EntityState<Person> { }

export const peopleAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId: (p: Person) => p._id
});

export const initialState: PeopleState = peopleAdapter.getInitialState({});

export function reducer(state = initialState, action: fromPersonActions.PersonActions) {
  switch(action.type) {
    case fromPersonActions.PersonActionTypes.PERSON_NEW:
      return peopleAdapter.addOne(action.payload.person, state)

    case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
      return peopleAdapter.updateOne(
        { id: action.payload.id, changes: action.payload.changes },
        state
      );

    case fromPersonActions.PersonActionTypes.PERSON_DELETE:
      return peopleAdapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}


// SEM A UTILIZAÇÃO DE ENTITY
// export const initialState: Person[] = [];

// export function reducer(state = initialState, action: fromPersonActions.PersonActions) {
//   switch(action.type) {
//     case fromPersonActions.PersonActionTypes.PERSON_ALL:
//       return state;

//     case fromPersonActions.PersonActionTypes.PERSON_NEW:
//       return state.concat([ action.payload.person ]);

//     case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
//       let people = state.slice();
//       let i = people.findIndex(p => p._id === action.payload.person._id);
//       if (i >= 0) people[i] = action.payload.person;
//       return people;

//     case fromPersonActions.PersonActionTypes.PERSON_DELETE:
//       return state.filter(p => p._id !== action.payload.id);

//     default:
//       return state;
//   }
// }
