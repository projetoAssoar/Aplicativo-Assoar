import { Component } from '@angular/core';
import { LoginPageModule } from '../login/login.module';
import { RegisterPageModule } from '../register/register.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public router: Router) {}

  go() {
    this.router.navigate(['login']);
  }
  register() {
    this.router.navigate(['register']);
  }
}