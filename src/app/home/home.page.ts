import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton, IonButton, IonRippleEffect } from '@ionic/angular/standalone';
import { LangPipe } from '../common/language/lang.pipe';
import { LangComponent } from '../common/language/lang.component';
import { LangService } from '../common/language/lang.service';
import { CommonService } from '../common/services/common.service';
import { TestService } from '../common/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonRippleEffect, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, LangPipe, IonButton],

})
export class HomePage extends LangComponent {
  constructor(
    private _lang: TestService,
  ) {
    super(_lang);
  }

  toggleLang() {
    if (this._lang.lang == 'es') this._lang.setLang('en', 'US');
    else if (this._lang.lang == 'en') this._lang.setLang('es', 'CO');
  }
}
