import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public rout: Router
  ) {}

  router(url) {
    this.rout.navigateByUrl(url)
  }

}
