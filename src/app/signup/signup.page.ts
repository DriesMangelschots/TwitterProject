import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user:any = {};
  constructor(private auth: AngularFireAuth, public router: Router) {

  }

  ngOnInit() {
  }
  register()  {
    if (this.user.email && this.user.password) {
      this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((r) => {
          console.log('gelukt');
          console.log(r);
          this.router.navigateByUrl('');
        }).catch(error => {
          console.log(error);
      })
    }
  }

}
