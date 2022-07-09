import {Component, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import firebase from 'firebase/compat';
import {Auth} from '@angular/fire/auth';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private renderer: Renderer2, private router: Router,
              private auth: Auth) { }

  ngOnInit() {}

 darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;


  iconMoon: boolean = true;
  modeText: string = 'Lichte mode';



  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/');
    }).catch(error => {
      console.log(error);
    })
  }

  toggleDarkMode = () => {
    this.changeNameMode();
    if (this.darkMode) {
      this.renderer.addClass(document.body,'dark');
      console.log('enable darkmode');
    } else {
      this.renderer.removeClass(document.body,'dark');
      console.log('enable lightmode');
    }
  }
  toggleIcon = ():void => {
    this.darkMode = !this.darkMode;
    this.toggleDarkMode();
    this.iconMoon = !this.iconMoon;


  }
  changeNameMode= () => {
        if (this.darkMode) {
          this.modeText = 'Donkere mode';
        } else {
          this.modeText = 'Lichte mode';
        }
  }
}
