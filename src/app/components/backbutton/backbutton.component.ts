import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.css']
})
export class BackbuttonComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
