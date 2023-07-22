import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-admin-tools';

  constructor(private router: Router) {}

  onFormularClick() {
    this.router.navigateByUrl('formular');
  }

  ngOnInit(): void {
    this.codePen(); //important
  }

  codePen() {
    //the JavaScript CodePen code goes here

  }
}





