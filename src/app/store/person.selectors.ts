import { createFeatureSelector } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

export const peopleState = createFeatureSelector<fromPersonReducer.PeopleState>('people');

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = fromPersonReducer.peopleAdapter.getSelectors(peopleState)
