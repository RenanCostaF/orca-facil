import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrcamentoPageRoutingModule } from './orcamento-routing.module'; // Verifique se esta importação está correta
import { OrcamentoPage } from './orcamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrcamentoPageRoutingModule // Assegure-se de que o routing module está sendo importado
  ],
  declarations: [OrcamentoPage]
})
export class OrcamentoPageModule {}
