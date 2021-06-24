import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[]

  constructor(private clientesServicio: ClienteServicio) { }

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe(
      clientes=>{
        this.clientes = clientes
      }
    )
  }

  getSaldoTotal(){
    let saldototal: number = 0
    this.clientes.forEach(cliente=>{
      saldototal += Number(cliente.saldo)
    })
    return saldototal
  }
}
