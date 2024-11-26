import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(public ngFireAuth: AngularFireAuth) {}

  /**
   * Realiza o login no Firebase usando email e senha.
   * @param email Email do usuário.
   * @param password Senha do usuário.
   * @returns Retorna uma Promise do Firebase com os dados de autenticação.
   */
  loginNoFireBase(email: string, password: string) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Cadastra um novo usuário no Firebase com email e senha.
   * @param email Email do usuário.
   * @param password Senha do usuário.
   * @returns Retorna uma Promise do Firebase com os dados do novo usuário.
   */
  cadastroNoFirebase(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }
}
