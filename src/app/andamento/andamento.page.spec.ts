import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AndamentoPage } from './andamento.page';

describe('AndamentoPage', () => {
  let component: AndamentoPage;
  let fixture: ComponentFixture<AndamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
