import {Component, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '@angular/fire/auth';
import {MenuController} from '@ionic/angular';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  iconMoon: boolean = true;

  constructor(public auth: Auth, public router: Router,
              public renderer: Renderer2, public menu: MenuController, public authServ: AuthService) {

  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/');
      }).catch(error => {
        console.log(error);
    });
  }

  getDataUser() {
    console.log(this.auth.currentUser.email);
    return this.auth.currentUser.email;
  };
  makeNewTweet() {
    this.router.navigateByUrl('new-tweet');
  }
openFirst = () => {
    this.menu.enable(true,'first');
    this.menu.open('first');
};
openEnd = () => {
    this.menu.open('end');
};
openCustom = () => {
    this.menu.enable(true,'custom');
    this.menu.open('custom');
};

}
