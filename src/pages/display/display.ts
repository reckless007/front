import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeathProvider } from '../../providers/weath/weath';
/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
  weather:any;
  location :{
    city:string,
    state:string
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private weathProvider:WeathProvider) {
  }
  ionViewWillEnter(){
    this.location={
      city:'Delhi',
      state:'India'
    }
    this.weathProvider.getWeather(this.location.city,this.location.state).subscribe(weathr =>{
      console.log(weathr);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

}
