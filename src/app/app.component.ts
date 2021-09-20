import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './store';

import { Person } from './models/person.model';
import * as faker from 'faker';
import * as fromPersonSelectors from './store/person.selectors';
import { PersonAll, PersonDelete, PersonNew, PersonUpdate } from './store/person.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  people: Person[];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    // this.store.pipe(select('people')).subscribe(p => {
    //   this.people = p;
    // });

    this.store.dispatch(new PersonAll());
    this.store.select(fromPersonSelectors.selectAll)
      .subscribe(p => this.people = p);
  }

  addNewPerson() {
    let person: Person = {
      _id: new Date().getMilliseconds().toString(),
      name: faker.name.findName(),
      age: Math.round(Math.random() * 100),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
    }

    this.store.dispatch(new PersonNew({ person }));
  }

  update(person: Person) {
    const p = Object.assign({}, person, {
      name: faker.name.findName(),
      age: Math.round(Math.random() * 100),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
    });

    this.store.dispatch(new PersonUpdate({ id: person._id, changes: p }));
  }

  delete(person: Person) {
    person._id && this.store.dispatch(new PersonDelete({ id: person._id }));
  }
}
