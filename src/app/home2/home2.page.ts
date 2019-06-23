import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { DoadorService } from 'src/app/services/doador.service';
import { Doador } from 'src/app/interfaces/doador';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  private loading: any;
  public doadores = new Array<Doador>();
  public currentUID: string;
  private doadoresSubscription: Subscription;

  constructor(
    public router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private doadorService: DoadorService,
    private toastCtrl: ToastController) {
      this.doadoresSubscription = this.doadorService.getDoadores().subscribe(data => {
        this.doadores = data;
      });
      this.currentUID = this.authService.getAuth().currentUser.uid;
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.doadoresSubscription.unsubscribe();
  }

  async logout() {
    this.authService.logout();
  }

}
