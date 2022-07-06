import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import { ILogin } from '../datatypes/login';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  email: ILogin;


  constructor(public auth: AuthService, public router: Router) {


  }

  ngOnInit() {
  }

}
