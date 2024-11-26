import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  selector: 'app-andamento',
  templateUrl: './andamento.page.html',
  styleUrls: ['./andamento.page.scss'],
})
export class AndamentoPage {
  orcamentos: Orcamento[] = []; // Declare explicitamento como um array de Orcamento

  constructor(private navCtrl: NavController, private router: Router) {
    // Obtenha os dados da navegação
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const orcamento = navigation.extras.state['orcamento']; // Acesse usando colchetes
      if (orcamento) {
        this.orcamentos.push(JSON.parse(orcamento));
      }
    }

    this.orcamentos = this.carregarOrcamentos(); // Carregue os orçamentos
  }

  carregarOrcamentos(): Orcamento[] {
    return JSON.parse(localStorage.getItem('orcamentos-andamento') || '[]');
  }

  concluir(orcamento: Orcamento) { // Defina o tipo do parâmetro
    this.orcamentos = this.orcamentos.filter(o => o !== orcamento);
    localStorage.setItem('orcamentos-andamento', JSON.stringify(this.orcamentos));
  }

  voltar() {
    this.navCtrl.back(); // Volta para a página anterior
  }
}
