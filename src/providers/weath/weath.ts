import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeathProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeathProvider {
  apiKey='d825d778be76d0bff46eed8fda182058';
url;
  constructor(public http: Http) {
    console.log('Hello WeathProvider Provider');
    this.url = 'https://api.openweathermap.org/data/2.5/weather?q=&appid='+this.apiKey;
  }
  getWeather(city,state){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${this.apiKey}`)
    .map(res => res.json());
  }

}
