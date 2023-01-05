import { Component } from '@angular/core';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {

  isHidden: boolean = true;

  constructor() {

  }

  setIsHidden() {
    this.isHidden = !this.isHidden;
  }
}
