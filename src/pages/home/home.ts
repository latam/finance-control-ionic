import { UserCredentials } from './../../data-models/user-credentials';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthenticationProvider) {

  }

  ionViewDidLoad() {
    this.auth.login(new UserCredentials('TestUser@gmail.com', '12345')).subscribe(
      token => console.log(token),
      error => console.log(error));
  }

}
