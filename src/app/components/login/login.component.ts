import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('emailInput') email: ElementRef;
  @ViewChild('passwordInput') password: ElementRef
  constructor(
    private router: Router,
    private flashMessages: FlashMessagesService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth=>{
      if(auth){
        this.router.navigate(['/'])
      }
    })
  }

  login() {
    this.loginService
      .login(this.email.nativeElement.value, this.password.nativeElement.value)
      .then((res) => this.router.navigate(['']))
      .catch((error) =>
        this.flashMessages.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 4000,
        })
      );
  }
}
