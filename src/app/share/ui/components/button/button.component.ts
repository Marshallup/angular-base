import {
  Component,
  Input,
  ElementRef,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { TButtonStyle, ButtonSize } from './button.types';

@Component({
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnChanges {
  @Input() styleType: TButtonStyle = 'default';
  @Input() size: ButtonSize = 'normal';
  @Input() icon = false;

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.elementRef.nativeElement.classList.add('uk-button');
  }

  getBtnStyleClass(styleClass: TButtonStyle) {
    return `uk-button-${styleClass}`;
  }

  getBtnSizeClass(size: ButtonSize) {
    return `uk-button-${size}`;
  }

  toggleClass(prevClass: string, nextClass: string) {
    const { nativeElement } = this.elementRef;

    nativeElement.classList.remove(prevClass);
    nativeElement.classList.add(nextClass);
  }

  onChangeBtnSize(prev: ButtonSize = this.size) {
    this.toggleClass(
      this.getBtnSizeClass(prev),
      this.getBtnSizeClass(this.size)
    );
  }

  onChangeBtnStyle(prev: TButtonStyle = this.styleType) {
    this.toggleClass(
      this.getBtnStyleClass(prev),
      this.getBtnStyleClass(this.styleType)
    );
  }

  onChangeBtnIcon() {
    const classNameToken = 'uk-button-icon';
    const { nativeElement } = this.elementRef;

    if (this.icon) {
      nativeElement.classList.add(classNameToken);
    } else {
      nativeElement.classList.remove(classNameToken);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const styleType = changes['styleType'];
    const size = changes['size'];
    const icon = changes['icon'];

    if (styleType) {
      this.onChangeBtnStyle(styleType.previousValue);
    }

    if (size) {
      this.onChangeBtnSize(size.previousValue);
    }

    if (icon) {
      this.onChangeBtnIcon();
    }
  }
}
