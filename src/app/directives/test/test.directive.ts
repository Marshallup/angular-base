import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {

  @Input('zoomSize') size

  constructor(private el: ElementRef) {
    this.size = 16
  }

  @HostListener('mouseenter') onMouseIn() {
    this.setFontSize(this.size)
  }

  @HostListener('mouseleave') onMouseOut() {
    this.setFontSize(16)
  }

  setFontSize(value: number) {
    this.el.nativeElement.style.fontSize = `${value}px`
  }

}
