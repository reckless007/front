import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { WeatherPage } from '../pages/weather/weather';
import { RegisterPage } from '../pages/register/register';
import { DisplayPage } from '../pages/display/display';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { WeathProvider } from '../providers/weath/weath';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    WeatherPage,
    RegisterPage,
    DisplayPage,
    AboutPage,
    SettingsPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    WeatherPage,
    RegisterPage,
    DisplayPage,
    AboutPage,
    SettingsPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeathProvider
  ]
})
export class AppModule {}
