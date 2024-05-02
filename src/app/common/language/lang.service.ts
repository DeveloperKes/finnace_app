import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Subject, map, of } from 'rxjs';

export type LanguageAvailables = 'es' | 'en';
export type LanguageRegions = 'CO' | 'US';
@Injectable({
  providedIn: 'root',
})
export class LangService {
  lang: LanguageAvailables = 'es';
  region: LanguageRegions = 'CO';
  $changeLang = new Subject<any>();
  constructor(protected _httpClient: HttpClient, protected section: String) {
  }
  setLang(lang: LanguageAvailables, region: LanguageRegions) {
    this.lang = lang;
    this.region = region;
    this.$changeLang.next({ lang, region });
  }

  private findLanguageData(lang: LanguageAvailables = this.lang, region: LanguageRegions = this.region) {
    return this._httpClient.get(`assets/lang/${lang}-${region}.json`, { responseType: 'json' }).pipe(
      map((res: any) => {
        sessionStorage.setItem(`lang-${lang}-${region}`, JSON.stringify(res))
        return res[this.section as string];
      })
    );
  }
  getTranslate(lang: LanguageAvailables = this.lang, region: LanguageRegions = this.region) {
    if (!sessionStorage.getItem(`lang-${lang}-${region}`)) return this.findLanguageData(lang, region)
    else return of(JSON.parse(sessionStorage.getItem(`lang-${lang}-${region}`)!)[this.section as string]);
  }

}
