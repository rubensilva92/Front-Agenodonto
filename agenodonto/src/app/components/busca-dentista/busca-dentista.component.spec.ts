import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaDentistaComponent } from './busca-dentista.component';

describe('BuscaDentistaComponent', () => {
  let component: BuscaDentistaComponent;
  let fixture: ComponentFixture<BuscaDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
