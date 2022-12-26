import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  isDropDownOpen: boolean = false;

  constructor() {}

  openDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }
}
