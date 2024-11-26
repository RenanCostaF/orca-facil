import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Orcamento {
  tipo: string;
  material: string;
  quantidade: number;
  valorUnitario: number;
  nomeCliente: string;
  cpfCnpj: string;
  whatsapp: string;
}

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.page.html',
  styleUrls: ['./orcamento.page.scss'],
})
export class OrcamentoPage {
  orcamentos: Orcamento[] = []; // Declare explicitamente como um array de Orcamento

  constructor(private navCtrl: NavController) {
    this.orcamentos = this.carregarOrcamentos(); // Carregue os orçamentos
  }

  carregarOrcamentos(): Orcamento[] {
    return JSON.parse(localStorage.getItem('orcamentos') || '[]');
  }

  aprovar(orcamento: Orcamento) { // Defina o tipo do parâmetro
    this.orcamentos = this.orcamentos.filter(o => o !== orcamento);
    this.navCtrl.navigateForward('/andamento', {
      queryParams: { orcamento: JSON.stringify(orcamento) }
    });
    localStorage.setItem('orcamentos', JSON.stringify(this.orcamentos));
  }

  recusar(orcamento: Orcamento) { // Defina o tipo do parâmetro
    this.orcamentos = this.orcamentos.filter(o => o !== orcamento);
    localStorage.setItem('orcamentos', JSON.stringify(this.orcamentos));
  }

  voltar() {
    this.navCtrl.back(); // Volta para a página anterior
  }
}
