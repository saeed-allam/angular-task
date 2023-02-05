import { AfterViewInit, Component } from '@angular/core';
import KTMenu from '../../js/components/menu';
import KTScrolltop from '../../js/components/scrolltop';
import KTDrawer from '../../js/components/drawer';
import KTDialer from '../../js/components/dialer';
import KTUtil from '../../js/components/util';
import KTToggle from '../../js/components/toggle';
import KTScroll from '../../js/components/scroll';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
})
export class FullLayoutComponent implements AfterViewInit {
  jsLoaded = false;
  constructor() { }

  ngAfterViewInit() {
    if (!this.jsLoaded) {
      this.jsLoaded = true;
      KTUtil.init();
      KTDialer.init();
      KTDrawer.init();
      KTMenu.init();
      KTScroll.init();
      KTScrolltop.init();
      KTToggle.init();
    }
  }
}
