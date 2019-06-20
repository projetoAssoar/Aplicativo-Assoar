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
  private doadorId: string = null;
  public doador: Doador = {};
  private loading: any;
  private doadorSubscription: Subscription;

  form_doador1 = true;
  form_doador2 = false;

  constructor(public router: Router,
  private doadorService: DoadorService,
  private authService: AuthService,
  private activatedRoute: ActivatedRoute,
  private toastCtrl: ToastController,
  private loadingCtrl: LoadingController) { 

    this.doadorId = this.activatedRoute.snapshot.params['id'];
    if(this.doadorId) this.loadDoador();
  }
  
  ngOnInit() { }  
  
  ngOnDestroy() {
    if (this.doadorSubscription) this.doadorSubscription.unsubscribe();
  }

  loadDoador(){
    this.doadorSubscription = this.doadorService.getDoador(this.doadorId).subscribe(data => {
      this.doador = data;
    });
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
      this.router.navigate(['home2']);
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
