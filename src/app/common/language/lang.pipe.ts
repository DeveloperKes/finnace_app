import { Pipe, PipeTransform } from '@angular/core';
import { LangService } from './lang.service';
import { LangComponent } from './lang.component';

export interface argsLang {
  forceLang?: 'es' | 'en' | 'fr',
  localOnly?: boolean,
  jsonLangPage?: string,
}
@Pipe({
  name: 'lang',
  standalone: true
})
export class LangPipe implements PipeTransform {
  constructor(
    private _lang: LangService
  ) {

  }

  transform(value: string, translate: any): any {
    if (translate && translate[value]) return translate[value];
    else return `${value}?`
  }

}
