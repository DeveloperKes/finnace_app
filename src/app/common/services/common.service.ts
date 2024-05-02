import { Injectable } from '@angular/core';
import { LangService } from '../language/lang.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends LangService {

  constructor(
    private _http: HttpClient
  ) {
    super(_http, 'init');
  }

}
