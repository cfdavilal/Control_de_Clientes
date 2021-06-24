import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfiguracionService } from '../servicios/configuracion.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfiguracionGuard implements CanActivate {
  constructor(
    private router: Router,
    private configuracionServicio: ConfiguracionService
  ) {}

  canActivate(): Observable<boolean> {
    return this.configuracionServicio.getConfiguracion().pipe(
        map(configuracion=>{
            if(configuracion.permitirRegistro == true){
                return true
            }else{
                this.router.navigate(['/login'])
                return false
            }
        })
        );
  }
}
