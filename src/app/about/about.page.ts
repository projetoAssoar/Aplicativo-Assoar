import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
    this.router.navigate(['register2']);
  }

  btn_Paciente() {
    this.router.navigate(['register3']);
  }

}
