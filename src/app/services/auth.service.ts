/* eslint-disable @typescript-eslint/member-ordering */
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

  public async user(user: User): Promise<void> {
    if (user) {
      await this.router.navigate(['/tabs']);
    } else {
      await this.router.navigate(['/login']);
    }
  }

  emailLogin(data) {
    return signInWithEmailAndPassword(this.auth, data.email, data.password);
  }


  emailSignup(data) {
    return createUserWithEmailAndPassword(this.auth, data.email, data.password);
  }


  storeData(data) {
    return this.firestore.collection("twitterAccounts").doc(data.uid).set(data);
  }


  retrieveDate(data) {
    return this.firestore.collection("twitterAccounts").doc(data.uid).valueChanges();
  }



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



  signup() {
    this.router.navigateByUrl('signup');
  }


  // dkkfjk
  sendEmailVerification() {
    return this.angularFireAuth.currentUser.then((user) => user.sendEmailVerification().then(() => {
        this.router.navigate(['/email-verify']);
      }));
  }

   // dkefkf

   passwordReset(passwordResetEmail) {
    return this.angularFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('An email has been sent please check your inbox.');
      })
      .catch((error)=> {
        window.alert(error + ' An expected error has occured');
      });
  }
   // Email verified and logged in return true
   get isLoggedIn(): boolean {
     const user = JSON.parse(localStorage.getItem('user')!);
     return user != null && user.emailVerified !== false ? true : false;
   }

}

