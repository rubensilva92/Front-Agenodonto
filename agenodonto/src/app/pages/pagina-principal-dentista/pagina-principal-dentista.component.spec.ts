import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalDentistaComponent } from './pagina-principal-dentista.component';

describe('PaginaPrincipalDentistaComponent', () => {
  let component: PaginaPrincipalDentistaComponent;
  let fixture: ComponentFixture<PaginaPrincipalDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPrincipalDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrincipalDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
