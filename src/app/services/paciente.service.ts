import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Paciente } from '../interfaces/paciente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private pacienteInfoColletion: AngularFirestoreCollection<Paciente>;
  
  constructor(private afs: AngularFirestore) {
    this.pacienteInfoColletion = this.afs.collection<Paciente>('Pacientes');
   }

   getPaciente(){
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

  addPaciente(paciente: Paciente){
    return this.pacienteInfoColletion.add(paciente);
  }
}
