import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Doador } from '../interfaces/doador';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class DoadorService {
  private doadorInfoColletion: AngularFirestoreCollection<Doador>;

  constructor(private afs: AngularFirestore, private afa: AngularFireAuth) { 
    this.doadorInfoColletion = this.afs.collection<Doador>('Doadores');
  }

  getDoadores(){
    return this.doadorInfoColletion.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    )

  }

  addDoadores(doador: Doador){
    return this.doadorInfoColletion.add(doador);
  }

  getDoador(userId: string) {
    return this.doadorInfoColletion.doc<Doador>(userId).valueChanges();
  }


}
