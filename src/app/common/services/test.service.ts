import { Injectable } from '@angular/core';
import { LangService } from '../language/lang.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService extends LangService {

  constructor(
    private _http: HttpClient
  ) {
    super(_http, 'tags')
  }

}
