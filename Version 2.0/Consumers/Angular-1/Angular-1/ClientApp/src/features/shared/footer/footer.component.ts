import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  @Input() fetchMessage: string;
  @Input() url: string;

}
