import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  constructor(public router: Router,
              private authService: AuthService) {}

  ngOnInit() {
  }

  async logout() {
    this.authService.logout();
  }

}
