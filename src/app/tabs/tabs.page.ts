import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  user: string = "";

  constructor(private router: Router) {
    this.user = history.state.user_name;
    console.log('tabs: ',this.user);
  }

  navTabs(address: string){

    this.router.navigate([address], {
      state: {
        user: this.user
      }
    });

  }

}
