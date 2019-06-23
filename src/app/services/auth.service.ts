import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { Doador } from '../interfaces/doador';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any = {};

  constructor(private afa: AngularFireAuth, private afs: AngularFirestore, public router: Router) { }

  async login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  async register(user: User) {
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password).then((newUser:any) => {
      console.log(newUser.uid);
  });
}
  async login_paulo(user: User){
    if(this.user.email == "projetoassoar@gmail.com" && this.user.password == "assoar123"){
      this.router.navigate(['home-paulo']);
    }
  }

  logout() {
    return this.afa.auth.signOut();
  }

  getAuth() {
    return this.afa.auth;
  }

}
