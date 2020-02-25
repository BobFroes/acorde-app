import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { StudentMaterialModule } from './student-material.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [StudentsComponent, StudentTableComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AppMaterialModule,
    StudentMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class StudentModule { }
