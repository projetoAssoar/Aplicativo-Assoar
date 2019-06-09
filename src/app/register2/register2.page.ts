import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Router, ActivatedRoute } from '@angular/router';
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';
import { Doador } from 'src/app/interfaces/doador';
import { Subscription } from 'rxjs';
import { DoadorService } from '../services/doador.service';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {
  private doadores = new Array<Doador>();
  private doadoresSubscription: Subscription; 
  private doador: Doador = {}
  private doadorId: string = null;
  private loading: any;

  form_doador1 = true;
  form_doador2 = false;

  constructor(public router: Router,
  private doadorService: DoadorService,
  private authService: AuthService,
  private activateRoute: ActivatedRoute,
  private toastCtrl: ToastController,
  private loadingCtrl: LoadingController) { 
    this.doadoresSubscription = this.doadorService.getDoadores().subscribe(data => {
      this.doadores = data;
    });
  }
  
  ngOnInit() { }  
  
  ngOnDestroy(){
    this.doadoresSubscription.unsubscribe();
  }

  async cadastrar(){
    await this.presentLoading();

    this.doador.userId = this.authService.getAuth().currentUser.uid;

    if (this.doadorId){

    } else {
      this.doador.rg = new Date().getTime();
    }
    try{
      await this.doadorService.addDoadores(this.doador);
      await this.loading.dismiss();
    } catch(error) {
      this.presentToast("Erro ao tentar salvar!");
      this.loading.dismiss();
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  exibir_formDoador2(){
    this.form_doador1 = false;
    this.form_doador2 = true;
  }
}
