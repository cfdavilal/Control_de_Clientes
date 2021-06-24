import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  @ViewChild('clienteForm') clienteForm : NgForm
  @ViewChild('botonCerrar') botonCerrar: ElementRef
  clientes: Cliente[]
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  constructor(private clientesServicio: ClienteServicio,
     private flashMessages: FlashMessagesService) { }

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

  agregar(form: NgForm){
    if(!form.valid){
      this.flashMessages.show('por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      })
    }else{
      //agregar nuevo componente
      this.clientesServicio.agregarCliente(form.value)
      this.clienteForm.resetForm()
      this.cerrarModal()
    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }
}
