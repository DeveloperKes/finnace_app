import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton, IonButton, IonRippleEffect } from '@ionic/angular/standalone';
import { LangPipe } from '../common/language/lang.pipe';
import { LangComponent } from '../common/language/lang.component';
import { CommonService } from '../common/services/common.service';
import { HeaderComponent } from '../components/core/header/header.component';
import { LangGlobalService, LangService } from '../common/language/lang.service';
import { TestService } from '../common/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonRippleEffect, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle,
    IonContent, IonMenu, IonMenuButton, LangPipe, IonButton, HeaderComponent
  ],

})
export class HomePage extends LangComponent {
  constructor(
    private _lang: CommonService,
    private _langGlobal: LangGlobalService
  ) {
    super(_lang);
  }

  toggleLang() {
    if (localStorage.getItem('lang') == 'es')
      this._langGlobal.setLang('en', 'US');
    else if (localStorage.getItem('lang') == 'en')
      this._langGlobal.setLang('es', 'CO');
  }
}
