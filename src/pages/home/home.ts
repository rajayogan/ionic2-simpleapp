import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  carddata: any;
  constructor(public navCtrl: NavController, private http: Http) {
    
  }
  
  ionViewDidLoad() {
    this.http.get('https://public-api.wordpress.com/rest/v1.1/freshly-pressed/').map(data => data.json().posts).subscribe(data => {
      this.carddata = data;
      
    })
  }
  
  doRefresh(refresher) {
   this.http.get('https://public-api.wordpress.com/rest/v1.1/freshly-pressed/').map(data => data.json().posts).subscribe(data => {
      this.carddata = data;
      refresher.complete();
    })
  }

}
