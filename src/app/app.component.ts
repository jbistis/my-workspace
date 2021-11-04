import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


import { environment as env } from '../environments/environment';

// import {
//   authLogin,
//   authLoginWithEmailAndPassword,
//   authLogout,
//   routeAnimations,
//   LocalStorageService,
//   selectIsAuthenticated,
//   selectSettingsStickyHeader,
//   selectSettingsLanguage,
//   selectEffectiveTheme,
//   selectMenusMenu,
//   AppState
// } from '../core/core.module';
// import {
//   actionSettingsChangeAnimationsPageDisabled,
//   actionSettingsChangeLanguage
// } from '../core/settings/settings.actions';
// import { selectNavigation } from '../core/menus/menus.selectors';

export interface Credentials {
  email: string;
  password: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [routeAnimations],
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  // version = env.versions.app;
  year = new Date().getFullYear();

  serverMessage: string;
  // user: User;

  logo = 'assets/logo.png';
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he', 'ar'];
  // languages = ['en-US', 'es-MS'];

  navigation = [
    { link: 'about', label: 'pd.menu.about' },
    { link: 'feature-list', label: 'pd.menu.features' },
    { link: 'examples', label: 'pd.menu.examples' },
    { link: 'our-services', label: 'pd.menu.ourservices' }
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'pd.menu.settings' }
  ];

  constructor(
    // private store: Store<AppState>,
    // private storageService: LocalStorageService,
    // public afAuth: AngularFireAuth
  ) { }

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name || '');
  }

  ngOnInit(): void {

  }

}