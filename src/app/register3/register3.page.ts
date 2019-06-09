import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';
import { Paciente } from 'src/app/interfaces/paciente';
import { Subscription } from 'rxjs';
import { PacienteService } from '../services/paciente.service';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register3',
  templateUrl: './register3.page.html',
  styleUrls: ['./register3.page.scss'],
})
export class Register3Page implements OnInit {
  private pacientes = new Array<Paciente>();
  private pacientesSubscription: Subscription; 
  private paciente: Paciente = {}
  private pacienteId: string = null;
  private loading: any;

  form_paciente1 = true;
  form_paciente2 = false;

  constructor(public router: Router,
    private pacienteService: PacienteService,
    private authService: AuthService,
    private activateRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) { 
      this.pacientesSubscription = this.pacienteService.getPaciente().subscribe(data => {
        this.pacientes = data;
      });
    }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.pacientesSubscription.unsubscribe();
  }

  async cadastrar2(){
    await this.presentLoading();

    this.paciente.userId = this.authService.getAuth().currentUser.uid;

    if (this.pacienteId){

    } else {
      this.paciente.rg = new Date().getTime();
    }
    try{
      await this.pacienteService.addPaciente(this.paciente);
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

  exibir_formPaciente2(){
    this.form_paciente1 = false;
    this.form_paciente2 = true;
  }
  

}
