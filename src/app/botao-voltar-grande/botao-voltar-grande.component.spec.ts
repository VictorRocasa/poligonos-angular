import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoVoltarGrandeComponent } from './botao-voltar-grande.component';

describe('BotaoVoltarGrandeComponent', () => {
  let component: BotaoVoltarGrandeComponent;
  let fixture: ComponentFixture<BotaoVoltarGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoVoltarGrandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoVoltarGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
