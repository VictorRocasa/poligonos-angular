import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesFormaComponent } from './detalhes-forma.component';

describe('DetalhesFormaComponent', () => {
  let component: DetalhesFormaComponent;
  let fixture: ComponentFixture<DetalhesFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesFormaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
