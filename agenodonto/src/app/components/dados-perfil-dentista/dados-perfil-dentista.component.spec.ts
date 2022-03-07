import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPerfilDentistaComponent } from './dados-perfil-dentista.component';

describe('DadosPerfilDentistaComponent', () => {
  let component: DadosPerfilDentistaComponent;
  let fixture: ComponentFixture<DadosPerfilDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPerfilDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPerfilDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
