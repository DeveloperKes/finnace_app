import { Component, OnInit } from '@angular/core';
import { LangComponent } from 'src/app/common/language/lang.component';
import { LangPipe } from 'src/app/common/language/lang.pipe';
import { TestService } from 'src/app/common/services/test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [LangPipe]
})
export class HeaderComponent extends LangComponent {

  constructor(
    private _test: TestService,
  ) {
    super(_test);
  }

}
