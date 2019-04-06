import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisplayPage } from '../display/display';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';


/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  tab1Root:any;
  tab2Root:any;
  tab3Root:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.tab1Root = DisplayPage;
  this.tab2Root = AboutPage;
  this.tab3Root = SettingsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

}
