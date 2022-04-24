import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAgendamentoComponent } from './pagina-agendamento.component';

describe('PaginaAgendamentoComponent', () => {
  let component: PaginaAgendamentoComponent;
  let fixture: ComponentFixture<PaginaAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAgendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
