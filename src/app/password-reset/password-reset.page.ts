import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import { ILogin } from '../datatypes/login';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  email: ILogin;


  constructor(private auth: AngularFireAuth, private router: Router) {


  }

  ngOnInit() {
  }

}
