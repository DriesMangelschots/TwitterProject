import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    user: any = {}

  constructor(private auth: AngularFireAuth, private router: Router, private autherize: AuthService) {

  }

  ngOnInit() {
  }
    login() {
      this.autherize.login(this.user.email, this.user.password);
    }
  signup() {
    this.router.navigateByUrl('signup');
  }
  password() {
    this.router.navigateByUrl('password-reset');
    console.log('test');
  }

}
