import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public userRegister: User = {name};
  private loading: any;

  constructor(public router: Router,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private authService: AuthService) {}

  exibirLogin() {
    this.router.navigate(['login']);
  }

  async fazerRegistro() {
    // verifica se o campo de nome foi preenchido
    if (this.userRegister.name.trim() === '') {
      this.presentToast('Por favor, preencha o campo de nome!');
    } else { // se foi, tenta realizar o cadastro
      await this.presentLoading();
      try {
        await this.authService.register(this.userRegister);
        this.router.navigate(['about']);
      } catch (error) {
        console.error(error);

        // verifica qual código de erro foi retornado
        if (error.code === 'auth/weak-password'){
          this.presentToast('Por favor, insira uma senha com mais de 6 caracteres!');
        } else if (error.message.indexOf('password') !== -1) {
          this.presentToast('Por favor, insira sua senha!');
        } else if (error.message.indexOf('email') !== -1) {
          this.presentToast('Por favor, insira um e-mail válido!');
        }
      } 
      finally {
        this.loading.dismiss();
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  ngOnInit() {
  }

}
