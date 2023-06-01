import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacasListComponent } from './vacas-list.component';

describe('VacasListComponent', () => {
  let component: VacasListComponent;
  let fixture: ComponentFixture<VacasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
