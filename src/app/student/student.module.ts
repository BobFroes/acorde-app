import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AppMaterialModule } from '../app-material.module';
import { StudentMaterialModule } from './student-material.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentService } from './student.service';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [StudentsComponent, StudentTableComponent],
  providers: [StudentService],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AppMaterialModule,
    StudentMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot()
  ]
})
export class StudentModule { }
