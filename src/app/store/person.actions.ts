/**
 * Actions são eventos que sugerem/tem a inteção de efetuar alguma modificação
 * no estado da aplicação.
 * A inteção de modificação pode vir a partir da view, ou do backend(services).
 * A inteção não quer dizer que a modificação será efetuada!
**/

import { Action } from "@ngrx/store";
import { Person } from "../models/person.model";

export enum PersonActionTypes {
  PERSON_ALL = '[PERSON_ALL] Get all Person',
  PERSON_NEW = '[PERSON_NEW] Insert a new Person',
  PERSON_UPDATE = '[PERSON_UPDATE] Update an existing Person',
  PERSON_DELETE = '[PERSON_DELETE] Delete a Person'
};

export class PersonAll implements Action {
  readonly type = PersonActionTypes.PERSON_ALL;
}

export class PersonNew implements Action {
  readonly type = PersonActionTypes.PERSON_NEW;
  constructor(public payload: { person: Person }) {}
}

export class PersonUpdate implements Action {
  readonly type = PersonActionTypes.PERSON_UPDATE;
  constructor(public payload: { id: string, changes: Partial<Person> }) {}
}

export class PersonDelete implements Action {
  readonly type = PersonActionTypes.PERSON_DELETE;
  constructor(public payload: { id: string }) {}
}

export type PersonActions = PersonAll | PersonNew | PersonUpdate | PersonDelete;
