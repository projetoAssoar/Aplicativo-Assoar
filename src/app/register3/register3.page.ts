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
  private pacienteId: string = null;
  public paciente: Paciente = {};
  private loading: any;
  private pacienteSubscription: Subscription; 

  form_paciente1 = true;
  form_paciente2 = false;

  constructor(public router: Router,
    private pacienteService: PacienteService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) 
    { 
      this.pacienteId = this.activatedRoute.snapshot.params['id'];
      if(this.pacienteId) this.loadDoador();
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.pacienteSubscription) this.pacienteSubscription.unsubscribe();
  }

  loadDoador(){
    this.pacienteSubscription = this.pacienteService.getPaciente(this.pacienteId).subscribe(data => {
      this.paciente = data;
    });
  }
  

  async cadastrar2(){
    await this.presentLoading();

    this.paciente.userId = this.authService.getAuth().currentUser.uid;
    
    if (this.pacienteId){

    } else {
      this.paciente.rg = new Date().getTime();
    }
    try{
      await this.pacienteService.addPacientes(this.paciente);
      await this.loading.dismiss();
      this.router.navigate(['home-paciente']);
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
