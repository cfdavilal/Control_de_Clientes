import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente.model';
import { map} from 'rxjs/operators'

@Injectable()
export class ClienteServicio {
  clientesColeccion: AngularFirestoreCollection<Cliente>;
  clienteDoc: AngularFirestoreDocument<Cliente>;
  clientes: Observable<Cliente[]>;
  cliente: Observable<Cliente>;

  constructor(private db: AngularFirestore) {
    this.clientesColeccion = db.collection('clientes', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }
  
  getClientes(): Observable<Cliente[]>{
    //obtener todos los clientes
    this.clientes = this.clientesColeccion.snapshotChanges().pipe(
        map( cambios=>{
            return cambios.map(accion=>{
                const datos = accion.payload.doc.data() as Cliente
                datos.id =accion.payload.doc.id
                return datos
            })
        })
    )
    return this.clientes
  }
}
