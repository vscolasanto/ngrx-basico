import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people$: Observable<Person[]>

  addNewPerson() {

  }

  update(person: Person) {}

  delete(person: Person) {}
}
