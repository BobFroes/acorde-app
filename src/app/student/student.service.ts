import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStudent } from './student';

export interface IStudents {
  data: IStudent[]
  total: number
}

export interface IStudentService {
  getStudent(id: string): Observable<IStudent>
  updateStudent(id: string, user: IStudent): Observable<IStudent>
  getStudents(pageSize: number, searchText: string, pagesToSkip: number): Observable<IStudents>
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudent(id: number): Observable<IStudent> {
    return this.httpClient.get<IStudent>(`${environment.baseUrl}/v1/alunos/${id}`)
  }

  getStudents(
    page: number,
    limit: number,
    searchText = '',
    status: string,
    sortColumn = '',
    sortDirection: '' | 'asc' | 'desc' = 'asc'
  ): Observable<IStudents> {
    return this.httpClient.get<IStudents>(`${environment.baseUrl}/v1/alunos`, {
      params: {
        page: page.toString(),
        limit: limit.toString(),
        searchText: searchText,
        status: status,
        sortColumn: sortColumn,
        sortDirection: sortDirection
      },
    })
  }

}
