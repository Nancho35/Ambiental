import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Semana_2PageModule } from '../pages/semana-2/semana-2.module';
import { Semana3PageModule } from '../pages/semana3/semana3.module';
import { Semana4PageModule } from '../pages/semana4/semana4.module';
import { Semana5PageModule } from '../pages/semana5/semana5.module';
import { Semana6PageModule } from '../pages/semana6/semana6.module';
import { Semana7PageModule } from '../pages/semana7/semana7.module';
import { Semana8PageModule } from '../pages/semana8/semana8.module';
import { Semana9PageModule } from '../pages/semana9/semana9.module';
import { Semana10PageModule } from '../pages/semana10/semana10.module';
import { Semana11PageModule } from '../pages/semana11/semana11.module';
import { Semana12PageModule } from '../pages/semana12/semana12.module';
import { Semana13PageModule } from '../pages/semana13/semana13.module';
import { Semana14PageModule } from '../pages/semana14/semana14.module';
import { Semana15PageModule } from '../pages/semana15/semana15.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Semana_2PageModule,
    Semana3PageModule,
    Semana4PageModule,
    Semana5PageModule,
    Semana6PageModule,
    Semana7PageModule,
    Semana8PageModule,
    Semana9PageModule,
    Semana10PageModule,
    Semana11PageModule,
    Semana12PageModule,
    Semana13PageModule,
    Semana14PageModule,
    Semana15PageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
