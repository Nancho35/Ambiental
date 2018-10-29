import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Semana_2Page } from '../pages/semana-2/semana-2';
import { Semana3Page } from '../pages/semana3/semana3';
import { Semana4Page } from '../pages/semana4/semana4';
import { Semana5Page } from '../pages/semana5/semana5';
import { Semana6Page } from '../pages/semana6/semana6';
import { Semana7Page } from '../pages/semana7/semana7';
import { Semana8Page } from '../pages/semana8/semana8';
import { Semana9Page } from '../pages/semana9/semana9';
import { Semana10Page } from '../pages/semana10/semana10';
import { Semana11Page } from '../pages/semana11/semana11';
import { Semana12Page } from '../pages/semana12/semana12';
import { Semana13Page } from '../pages/semana13/semana13';
import { Semana14Page } from '../pages/semana14/semana14';
import { Semana15Page } from '../pages/semana15/semana15';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Introducción', component: ListPage },
      { title: 'Semana 2', component: Semana_2Page },
      { title: 'Semana 3', component: Semana3Page },
      { title: 'Semana 4', component: Semana4Page },
      { title: 'Semana 5', component: Semana5Page },
      { title: 'Semana 6', component: Semana6Page },
      { title: 'Semana 7', component: Semana7Page },
      { title: 'Semana 8', component: Semana8Page },
      { title: 'Semana 9', component: Semana9Page },
      { title: 'Semana 10', component: Semana10Page },
      { title: 'Semana 11', component: Semana11Page },
      { title: 'Semana 12', component: Semana12Page },
      { title: 'Semana 13', component: Semana13Page },
      { title: 'Semana 14', component: Semana14Page },
      { title: 'Semana 15', component: Semana15Page },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
