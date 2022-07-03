import { Component } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private auth: AngularFireAuth, private router: Router) {}

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('login');
      console.log("gelukt");
    }).catch(error => {
      console.log(error);
    })
  }

}
