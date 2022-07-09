import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private afs: AngularFirestore, private router: Router ){
  }


  goToEditPage() {
    this.router.navigate(['/profile-edit']);
  }
}
