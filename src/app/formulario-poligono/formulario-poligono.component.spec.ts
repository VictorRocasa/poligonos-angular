import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPoligonoComponent } from './formulario-poligono.component';

describe('FormularioPoligonoComponent', () => {
  let component: FormularioPoligonoComponent;
  let fixture: ComponentFixture<FormularioPoligonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPoligonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPoligonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
