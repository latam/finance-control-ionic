import { AlertController } from 'ionic-angular';
import { ServiceVariables } from './../../service-variables';
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { UserCredentials } from '../../data-models/user-credentials';
import { Observable } from 'rxjs/Observable';
import { Error } from '../../data-models/error-response';


import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { mapError } from '../service-error-mapper';

@Injectable()
export class AuthenticationProvider {
  private serviceUrl: string = ServiceVariables.loginUrl;
  public token: string = '';

  constructor(
    public http: Http,
    public alertCtrl: AlertController) {
  }

  public login(credentials: UserCredentials): Observable<string> {
    return this.http.post(this.serviceUrl, credentials)
      .map((response: Response) => {
        this.token = response.text();
        return this.token;
      })
      .catch((error: any) => {
        return Observable.throw(mapError(error));
      });
  }

  private showLoginPrompt() {
    let loginAlert = this.alertCtrl.create({
      title: 'Login',
      message: 'Please enter credentials to continue',
      inputs: [
        {
          type: 'text',
          name: 'email',
          placeholder: 'E-Mail'
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Login',
          handler: credentials => {
            console.log(credentials);
          }
        }
      ]
    });
    loginAlert.present();
  }
}
