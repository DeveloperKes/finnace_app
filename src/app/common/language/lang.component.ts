import { Component, Inject, OnInit, inject } from '@angular/core';
import { LangService } from './lang.service';

@Component({
  selector: 'app-lang',
  template: '',
  standalone: true
})
export class LangComponent {
  public translate: any;
  constructor(
    @Inject(LangService) protected langService: LangService,
    fragment?: String,
  ) {
    this.initTranslate(fragment as string);
    langService.$changeLang.subscribe((res: any) => {
      this.langService.getTranslate().subscribe((res: any) => fragment ? this.translate = res[fragment as string] : this.translate = res);
    })
  }

  private initTranslate(fragment: string | undefined) {
    this.langService.getTranslate().subscribe((res: any) => fragment ? this.translate = res[fragment] : this.translate = res);
  }

}
