import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formgroup:FormGroup;
  pass:AbstractControl;
  mail:AbstractControl;
  
  public email1 :any;
  public pass1 :any;


  constructor(public navCtrl: NavController, public formbuilder :FormBuilder, public navParams: NavParams,private http: Http) {
    this.formgroup=this.formbuilder.group({
      pass:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]*')])],
      mail:['',Validators.compose([Validators.required,Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])],

    });
    this.pass=this.formgroup.controls['pass'];
    this.mail=this.formgroup.controls['mail'];
  }
verify(){
  let Data = {
    pass1:this.pass1,
    email1:this.email1,
   }
   this.http.post('http://localhost:3000/add', Data).subscribe(response => {
    console.log('POST Response:', response);

});
this.navCtrl.push(HomePage);

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
