import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input('appUnless') set unless(condition:boolean) {
    if(!condition) {
      this.viewRef.createEmbeddedView(this.temelateRef);
    }
    else {
      this.viewRef.clear();
    }
  }
  constructor(private temelateRef:TemplateRef<any>, private viewRef:ViewContainerRef) { }

}
