import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss']
})
export class InputWrapperComponent {

  @Input("isWithIcon") isWithIcon: boolean = false;
  @Input("colorIconClass") colorIconClass: string | null = null;
  @Input("iconClass") iconClass: string | null = null;
  @Input("placeholder") placeholder: string | null = null;
  
  constructor() {}

  
}
