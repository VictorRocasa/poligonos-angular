import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPoligonoComponent } from './editar-poligono.component';

describe('EditarPoligonoComponent', () => {
  let component: EditarPoligonoComponent;
  let fixture: ComponentFixture<EditarPoligonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPoligonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPoligonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
