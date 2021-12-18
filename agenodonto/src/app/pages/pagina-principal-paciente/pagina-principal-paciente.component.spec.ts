import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalPacienteComponent } from './pagina-principal-paciente.component';

describe('PaginaPrincipalPacienteComponent', () => {
  let component: PaginaPrincipalPacienteComponent;
  let fixture: ComponentFixture<PaginaPrincipalPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPrincipalPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrincipalPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
