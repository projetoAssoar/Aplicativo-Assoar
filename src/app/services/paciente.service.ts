import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Paciente } from '../interfaces/paciente';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private pacienteInfoColletion: AngularFirestoreCollection<Paciente>;
  
  constructor(private afs: AngularFirestore, private afa: AngularFireAuth) {
    this.pacienteInfoColletion = this.afs.collection<Paciente>('Pacientes');
   }

   getPacientes(){
    return this.pacienteInfoColletion.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    )
  }

  addPacientes(paciente: Paciente){
    return this.pacienteInfoColletion.add(paciente);
  }

  getPaciente(userId: string) {
    return this.pacienteInfoColletion.doc<Paciente>(userId).valueChanges();
  }
}
