import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AndamentoPageRoutingModule } from './andamento-routing.module';
import { AndamentoPage } from './andamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndamentoPageRoutingModule
  ],
  declarations: [AndamentoPage]
})
export class AndamentoPageModule {}
