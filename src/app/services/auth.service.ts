import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Router} from '@angular/router';
import {Auth, User} from '@angular/fire/auth';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from '@angular/fire/auth';
import {LoadingController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private firestore: AngularFirestore,
              private router: Router, private loadingCtrl: LoadingController,
              private angularFireAuth: AngularFireAuth
  ) {
    this.auth.onAuthStateChanged(user => {
      console.log('werkt', user);
      this.user(user);
    });
  }

  private async user(user: User): Promise<void> {
    if (user) {
      await this.router.navigate(['/tabs']);
    } else {
      await this.router.navigate(['/login']);
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  emailLogin(data) {
    return signInWithEmailAndPassword(this.auth, data.email, data.password);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  emailSignup(data) {
    return createUserWithEmailAndPassword(this.auth, data.email, data.password);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  storeData(data) {
    return this.firestore.collection("twitterAccounts").doc(data.uid).set(data);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  retrieveDate(data) {
    return this.firestore.collection("twitterAccounts").doc(data.uid).valueChanges();
  }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  login(email: string, password: string) {
    if (email && password) {

      signInWithEmailAndPassword(this.auth, email, password).then((res) => {
        console.log(res);
        console.log('gelukt');
      }).catch(error => {
        console.log(error);
        alert('email of wachtwoord is niet correct ingevuld');
      });
    }
  }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  signup() {
    this.router.navigateByUrl('signup');
  }



}

