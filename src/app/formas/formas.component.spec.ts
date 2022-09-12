import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormasComponent } from './formas.component';

describe('FormasComponent', () => {
  let component: FormasComponent;
  let fixture: ComponentFixture<FormasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
