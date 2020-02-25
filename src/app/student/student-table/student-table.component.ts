import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { $enum } from 'ts-enum-util';
import { OptionalTextValidation } from '../../common/validations';
import { IStudent, Status } from '../student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  displayedColumns = ['id', 'nome', 'cpf', 'cidade', 'bairro']
  Status = Status
  Statuses = $enum(this.Status).getKeys()
  items$: Observable<IStudent[]>
  loading$: Observable<boolean>

  search = new FormControl('', OptionalTextValidation)

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
      .subscribe(() => {
        this.search.markAsTouched();
      });
  }
}
