import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/modelos/configuracion.model';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
})
export class ConfiguracionComponent implements OnInit {
  permitirRegistro: boolean = false;
  constructor(
    private router: Router,
    private congiguracionService: ConfiguracionService
  ) {}

  ngOnInit(): void {
    this.congiguracionService
      .getConfiguracion()
      .subscribe((configuracion: Configuracion) => {
        this.permitirRegistro = configuracion.permitirRegistro as boolean
        console.log('la configuracion esta en: '+this.permitirRegistro);
      });

  }

  guardar() {
    let configuracion = {permitirRegistro: this.permitirRegistro}
    this.congiguracionService.modificarConfiguracion(configuracion)
    this.router.navigate(['/'])
  }
}
