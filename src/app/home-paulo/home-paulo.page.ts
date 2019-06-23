import { Component, OnInit } from '@angular/core';
import { DoadorService } from '../services/doador.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/interfaces/paciente';
import { Doador } from 'src/app/interfaces/doador';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-paulo',
  templateUrl: './home-paulo.page.html',
  styleUrls: ['./home-paulo.page.scss'],
})
export class HomePauloPage implements OnInit {

  private loading: any;
  public pacientes = new Array<Paciente>();
  private pacientesSubscription: Subscription;

  assoar_home = true;
  doadores_home = false;
  paciente_home = false;

  private loading2: any;
  public doadores = new Array<Doador>();
  private doadoresSubscription: Subscription;
  public text: string = 'Autorizar Doação'; 

  constructor(public router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private doadorService: DoadorService,
    private pacienteService: PacienteService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) 
    {
      this.doadoresSubscription = this.doadorService.getDoadores().subscribe(data => {
        this.doadores = data;
      });

      this.pacientesSubscription = this.pacienteService.getPacientes().subscribe(data => {
        this.pacientes = data;
      });
    }

  ngOnDestroy() {
    this.pacientesSubscription.unsubscribe();
    this.doadoresSubscription.unsubscribe();
  }  

  ngOnInit() {
  }

  ver_doadores(){
    this.assoar_home = false;
    this.doadores_home = true;
  }

  ver_pacientes(){
    this.assoar_home = false;
    this.paciente_home = true;
  }

  sair(){
    this.router.navigate(['home']);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Autorizar Doação!',
      message: 'Deseja confirmar a <strong>doação?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  autorizar_doacao(){
    this.presentAlert();
    if (this.presentAlert()){
      if(this.text == 'Autorizar Doação'){
        this.text = 'Doação Autorizada';
      } else {
        this.text == "Autorizar Doação";
      }
    }
  }

  voltar(){
    this.assoar_home = true;
    this.paciente_home = false;
  }
  voltar1(){
    this.assoar_home = true;
    this.doadores_home = false;
  }

}
