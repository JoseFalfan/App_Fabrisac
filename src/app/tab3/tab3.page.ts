import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user : string = '';

  constructor() {
    this.user = history.state.user;
  
  }

}
