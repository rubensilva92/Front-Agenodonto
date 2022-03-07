import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPerfilPacienteComponent } from './dados-perfil-paciente.component';

describe('DadosPerfilPacienteComponent', () => {
  let component: DadosPerfilPacienteComponent;
  let fixture: ComponentFixture<DadosPerfilPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPerfilPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPerfilPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
