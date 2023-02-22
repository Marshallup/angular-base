import { Component, Input, ElementRef, SimpleChanges } from '@angular/core';
import { TButtonStyle } from './button.types'

@Component({
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() styleType: TButtonStyle = 'default';

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.elementRef.nativeElement.classList.add('uk-button')

    this.onChangeBtnStyle()
  }

  getBtnStyleClass(styleClass: TButtonStyle) {
    return `uk-button-${styleClass}`
  }

  onChangeBtnStyle(prevStyle: TButtonStyle = 'default') {
    const { nativeElement } = this.elementRef

    nativeElement.classList.remove(this.getBtnStyleClass(prevStyle))
    nativeElement.classList.add(this.getBtnStyleClass(this.styleType))
  }

  ngOnChanges(changes: SimpleChanges) {
    const styleType = changes['styleType']

    if (styleType) {
      this.onChangeBtnStyle(styleType.previousValue)
    }
  }
}
