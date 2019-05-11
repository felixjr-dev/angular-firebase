import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeComponenteComponent } from './mensaje-componente.component';

describe('MensajeComponenteComponent', () => {
  let component: MensajeComponenteComponent;
  let fixture: ComponentFixture<MensajeComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
