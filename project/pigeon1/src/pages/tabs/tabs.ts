import { Component } from '@angular/core';
import { WjMyPage } from '../wj-my/wj-my';
import { SyrSqPage } from '../syr-sq/syr-sq';
import { NamePage } from '../name/name';
import { SyrHome2Page } from '../syr-home2/syr-home2';
import { SyrHome1Page } from '../syr-home1/syr-home1';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SyrHome1Page;
  tab2Root = SyrSqPage;
  tab3Root = NamePage;
  tab4Root = WjMyPage;
  constructor() {

  }
}
