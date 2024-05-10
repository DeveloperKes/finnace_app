import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Subject, map, of } from 'rxjs';

export type LanguageAvailables = 'es' | 'en';
export type LanguageRegions = 'CO' | 'US';


@Injectable({
  providedIn: 'root',
})
export class LangGlobalService{
  $changeLang = new Subject<any>();
  constructor(){

  }
  setLang(lang: LanguageAvailables, region: LanguageRegions) {
    localStorage.setItem('lang', lang);
    localStorage.setItem('region', region);
    this.$changeLang.next({ lang: localStorage.getItem('lang'), region: localStorage.getItem('region') });
  }
}


@Injectable({
  providedIn: 'root',
})
export class LangService {

  constructor(protected _httpClient: HttpClient, protected section: String) {
  }

  private findLanguageData(lang: LanguageAvailables = localStorage.getItem('lang') as LanguageAvailables, region: LanguageRegions = localStorage.getItem('region') as LanguageRegions) {
    return this._httpClient.get(`assets/lang/${lang}-${region}.json`, { responseType: 'json' }).pipe(
      map((res: any) => {
        sessionStorage.setItem(`lang-${lang}-${region}`, JSON.stringify(res))
        return res[this.section as string];
      })
    );
  }
  getTranslate(lang: LanguageAvailables = localStorage.getItem('lang') as LanguageAvailables, region: LanguageRegions = localStorage.getItem('region') as LanguageRegions) {
    if (!sessionStorage.getItem(`lang-${lang}-${region}`)) return this.findLanguageData(lang, region)
    else return of(JSON.parse(sessionStorage.getItem(`lang-${lang}-${region}`)!)[this.section as string]);
  }

}
