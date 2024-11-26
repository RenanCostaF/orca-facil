import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoOrcamentoPage } from './novo-orcamento.page';

const routes: Routes = [
  {
    path: '',
    component: NovoOrcamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovoOrcamentoPageRoutingModule {}
