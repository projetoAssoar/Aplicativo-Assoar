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
  public userRegister : User = {}
  public userLogin: User = {}
  private loading: any;

  constructor(public router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService){}

  exibirLogin(){
    this.router.navigate(['login']);
  }

  async fazerRegistro(){
    await this.presentLoading();

    try{
      await this.authService.register(this.userRegister);
      this.router.navigate(['about']);
    } catch (error){
      console.error(error);

      this.presentToast(error.message);
    } finally{
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
