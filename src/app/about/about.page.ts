import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoadorPageModule } from '../doador/doador.module';
import { PacientPageModule } from '../pacient/pacient.module';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  constructor(public router: Router) { }
  ngOnInit() {
  }

  btn_Doador() {
    this.router.navigate(['doador']);
  }

  btn_Paciente() {
    this.router.navigate(['pacient']);
  }

}
