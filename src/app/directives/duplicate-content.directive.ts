import { Directive, Input, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
  selector: '[appDuplicateContent]'
})
export class DuplicateContentDirective {

  @Input() set appDuplicateContent(condition: boolean) {
    if (!condition && !this.contentWasDuplicated) {
      this.vc.createEmbeddedView(this.tpl)
    }

    if (condition && !this.contentWasDuplicated) {
      this.vc.createEmbeddedView(this.tpl)
      this.contentWasDuplicated = true
    }

    if (!condition && this.contentWasDuplicated) {
      this.vc.detach(1)
      this.contentWasDuplicated = false
    }
    // this.vc.detach()
    
    // if (condition && !this.contentWasDuplicated) {
    //   this.vc.createEmbeddedView(this.tpl)
    // }
    // console.log(condition, this.contentWasDuplicated)
    // if (condition && !this.contentWasDuplicated) {
    //   // @ts-ignore
    //   // this.vc.insert(this.tpl)
    //   this.contentWasDuplicated = true
    //   this.vc.createEmbeddedView(this.tpl)
    //   this.vc.createEmbeddedView(this.tpl)
    // }
  }

  private contentWasDuplicated: boolean = false

  constructor(
    private tpl: TemplateRef<any>,
    // private vr: ViewRef,
    private vc: ViewContainerRef
  ) {}

}
