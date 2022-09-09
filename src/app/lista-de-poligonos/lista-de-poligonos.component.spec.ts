import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePoligonosComponent } from './lista-de-poligonos.component';

describe('ListaDePoligonosComponent', () => {
  let component: ListaDePoligonosComponent;
  let fixture: ComponentFixture<ListaDePoligonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDePoligonosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDePoligonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
