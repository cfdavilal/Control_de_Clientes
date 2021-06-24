import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  @ViewChild('emailInput') email: ElementRef;
  @ViewChild('passwordInput') password: ElementRef;

  constructor(
    private router: Router,
    private flashMessages: FlashMessagesService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.getAuth().subscribe((auth) => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  registro() {
    this.loginService
      .registrarse(this.email.nativeElement.value, this.password.nativeElement.value)
      .then((res) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        this.flashMessages.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 4000,
        });
      });
  }
}
