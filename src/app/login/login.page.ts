import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;


  constructor(public router: Router,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private authService: AuthService) {}

  exibirRegistrar() {
    this.router.navigate(['register']);
  }

  async fazerLogin() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        this.presentToast('Usuário não encontrado em nosso sistema!');
      } else {
        this.presentToast('Por favor, verifique se os campos de email e senha estão preenchidos corretamente!');
      }
    } finally {
      this.loading.dismiss();
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
