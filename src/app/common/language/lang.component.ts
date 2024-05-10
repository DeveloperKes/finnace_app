import { Component, Inject, OnInit, inject } from '@angular/core';
import { LangGlobalService, LangService } from './lang.service';

@Component({
  selector: 'app-lang',
  template: '',
  standalone: true
})
export class LangComponent {
  protected translate: any;
  constructor(
    @Inject(LangService) protected langService: LangService,
    fragment?: String,
  ) {
    this.initTranslate(fragment as string);
    inject(LangGlobalService).$changeLang.subscribe((res: any) => {
      this.initTranslate(fragment as string);
    })
  }

  private initTranslate(fragment: string | undefined) {
    this.langService.getTranslate().subscribe((res: any) => fragment ? this.translate = res[fragment] : this.translate = res);
  }

}
