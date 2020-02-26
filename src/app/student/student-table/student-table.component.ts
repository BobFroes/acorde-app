import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { BehaviorSubject, merge, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { $enum } from 'ts-enum-util';
import { IStudent, Status } from '../student';
import { IStudents, StudentService } from '../student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnDestroy, AfterViewInit {
  displayedColumns = ['id', 'nome', 'cpf', 'cidade', 'bairro', 'acoes']
  resultsLength = 0
  hasError = false
  errorText = ''
  private skipLoading = false
  Status = Status
  Statuses = $enum(this.Status).getKeys()
  items$: Observable<IStudent[]>
  readonly isLoadingResults$ = new BehaviorSubject(true)
  loading$: Observable<boolean>
  refresh$ = new Subject()

  private subs = new SubSink()

  search = new FormControl('')
  statusSelected = new FormControl(Status.Ativos)

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator
  @ViewChild(MatSort, { static: false }) sort: MatSort

  constructor(private studentService: StudentService) { }

  // ngOnInit(): void {
  //   this.search.valueChanges
  //     .subscribe(() => {
  //       this.search.markAsTouched();
  //     });
  // }

  getStudents(
    page: number,
    limit: number,
    searchText: string,
    status: string,
    sortColumn: string,
    sortDirection: SortDirection
  ): Observable<IStudents> {
    return this.studentService.getStudents(
      page,
      limit,
      searchText,
      status,
      sortColumn,
      sortDirection
    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  ngAfterViewInit() {
    this.subs.sink = this.sort.sortChange.subscribe(() => this.paginator.firstPage())

    if (this.skipLoading) {
      return
    }

    this.items$ = merge(
      this.refresh$,
      this.sort.sortChange,
      this.paginator.page,
      this.search.valueChanges.pipe(debounceTime(500)),
      this.statusSelected.valueChanges
    ).pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults$.next(true)
        return this.getStudents(
          this.paginator.pageIndex + 1,
          this.paginator.pageSize,
          this.search.value,
          this.statusSelected.value,
          this.sort.active,
          this.sort.direction
        )
      }),
      map((results: { total: number; data: IStudent[] }) => {
        this.isLoadingResults$.next(false)
        this.hasError = false
        this.resultsLength = results.total
        return results.data
      }),
      catchError(err => {
        this.isLoadingResults$.next(false)
        this.hasError = true
        this.errorText = err
        return of([])
      })
    )
    this.items$.subscribe()
  }

}

