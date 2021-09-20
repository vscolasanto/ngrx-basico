import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  @Output() update: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() delete: EventEmitter<Person> = new EventEmitter<Person>();

  @Input() set people(value:Person[]) {
    this.dataSource = new MatTableDataSource<Person>(value)
    this.dataSource.paginator = this.paginator;
  };
  dataSource: MatTableDataSource<Person> ;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = [
    'name',
    'age',
    'address',
    'city',
    'country',
    'actions'
  ]

  constructor() { }

  ngOnInit(): void { }

  capitalize(s: string): string {
    const first = s.charAt(0).toUpperCase();
    return `${first}${s.substr(1)}`
  }
}
