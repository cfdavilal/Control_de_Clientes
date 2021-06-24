import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
})
export class EditarClienteComponent implements OnInit {
  id: string;
  clientes: Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };

  constructor(
    private clientesServicio: ClienteServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.getCliente(this.id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  guardar(form: NgForm) {
    if (!form.valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    }else{
      form.value.id = this.id
      //modificar cliente
      this.clientesServicio.modificarCliente(form.value)
      this.router.navigate(['/'])
    }
  }

  eliminar() {
    if(confirm('¿Seguro que desea eliminar el cliente?')){
      this.clientesServicio.eliminarCliente(this.cliente)
      this.router.navigate(['/'])
    }else{

    }
  }
}
