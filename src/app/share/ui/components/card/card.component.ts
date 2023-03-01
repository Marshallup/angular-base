import { Component, Input } from '@angular/core';
import { UIKitSizes, UiKitStyles } from 'src/app/share/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() size: UIKitSizes = 'default';
  @Input() styleType: UiKitStyles = 'default';

  get sizeClass() {
    return this.size !== 'default' ? `uk-card-${this.size}` : '';
  }
}
