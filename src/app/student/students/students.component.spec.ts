import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentTableComponent } from '../student-table/student-table.component';
import { StudentsComponent } from './students.component';


describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsComponent, StudentTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
