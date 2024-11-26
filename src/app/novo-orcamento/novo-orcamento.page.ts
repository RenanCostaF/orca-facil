import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-orcamento',
  templateUrl: './novo-orcamento.page.html',
  styleUrls: ['./novo-orcamento.page.scss'],
})
export class NovoOrcamentoPage {
  orcamento = {
    tipo: '',
    material: '',
    quantidade: null,
    valorUnitario: null,
    nomeCliente: '',
    cpfCnpj: '',
    whatsapp: '',
  };

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  async tirarFoto() {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        quality: 100,
      });
      console.log('Imagem capturada:', image.dataUrl);
      // Você pode armazenar a imagem ou exibi-la conforme necessário
    } catch (error) {
      console.error('Erro ao capturar imagem:', error);
    }
  }

  voltar() {
    this.navCtrl.back(); // Volta para a página anterior
  }

  submitOrcamento() {
    const quantidade = this.orcamento.quantidade || 0; // Valor padrão se for null
    const valorUnitario = this.orcamento.valorUnitario || 0; // Valor padrão se for null
    const total = quantidade * valorUnitario;
    const mensagem = `Novo Orçamento:\nTipo: ${this.orcamento.tipo}\nMaterial: ${this.orcamento.material}\nQuantidade: ${quantidade}\nValor Unitário: ${valorUnitario}\nNome do Cliente: ${this.orcamento.nomeCliente}\nCPF/CNPJ: ${this.orcamento.cpfCnpj}\nTotal: ${total}`;
    
    const numeroWhatsApp = this.orcamento.whatsapp.replace(/\D/g, ''); // Remover caracteres não numéricos
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');

    // Resetar o formulário após o envio
    this.orcamento = {
      tipo: '',
      material: '',
      quantidade: null,
      valorUnitario: null,
      nomeCliente: '',
      cpfCnpj: '',
      whatsapp: '',
    };
  }
}
