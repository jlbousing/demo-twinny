import { Component, Input } from '@angular/core';

@Component({
  selector: 'twinny-button-gradient',
  templateUrl: './twinny-button-gradient.component.html',
  styleUrls: ['./twinny-button-gradient.component.scss']
})
export class TwinnyButtonGradientComponent {

  @Input("text") text: string = '';
}
