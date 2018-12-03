import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { WjMyPage } from '../wj-my/wj-my';
import { SyrSqPage } from '../syr-sq/syr-sq';
import { NamePage } from '../name/name';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SyrSqPage;
  tab3Root = NamePage;
  tab4Root = WjMyPage;
  constructor() {

  }
}
