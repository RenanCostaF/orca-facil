import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NovoOrcamentoPageRoutingModule } from './novo-orcamento-routing.module';
import { NovoOrcamentoPage } from './novo-orcamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoOrcamentoPageRoutingModule
  ],
  declarations: [NovoOrcamentoPage]
})
export class NovoOrcamentoPageModule {}
