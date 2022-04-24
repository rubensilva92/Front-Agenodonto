import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaResultadoBuscaDentistaComponent } from './tabela-resultado-busca-dentista.component';

describe('TabelaResultadoBuscaDentistaComponent', () => {
  let component: TabelaResultadoBuscaDentistaComponent;
  let fixture: ComponentFixture<TabelaResultadoBuscaDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaResultadoBuscaDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaResultadoBuscaDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
