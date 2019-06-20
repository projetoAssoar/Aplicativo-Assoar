import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { Doador } from '../interfaces/doador';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any = {};

  constructor(private afa: AngularFireAuth, private afs: AngularFirestore) { }

  async login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  async register(user: User) {
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.afa.auth.signOut();
  }

  getAuth() {
    return this.afa.auth;
  }

}
