import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/interfaces/paciente';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.page.html',
  styleUrls: ['./home-paciente.page.scss'],
})
export class HomePacientePage implements OnInit {

  private loading: any;
  public pacientes = new Array<Paciente>();
  private pacientesSubscription: Subscription;
  public currentUID: string;

  constructor(public router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private pacienteService: PacienteService,
    private toastCtrl: ToastController) 
    {
      this.pacientesSubscription = this.pacienteService.getPacientes().subscribe(data => {
        this.pacientes = data;
      });
      this.currentUID = this.authService.getAuth().currentUser.uid;
      console.log(this.currentUID);
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.pacientesSubscription.unsubscribe();
  }

  async logout() {
    this.authService.logout();
  }

}
