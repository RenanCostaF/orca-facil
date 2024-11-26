import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoOrcamentoPage } from './novo-orcamento.page';

describe('NovoOrcamentoPage', () => {
  let component: NovoOrcamentoPage;
  let fixture: ComponentFixture<NovoOrcamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoOrcamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
