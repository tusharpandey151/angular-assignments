import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{

  @Input('appBetterHightlight') backGroundColor:String;

  @HostBinding('style.backgroundColor') color:String;

  constructor(private renderer:Renderer2, private elementRef:ElementRef) {
    this.backGroundColor = 'green';
    this.color = this.backGroundColor;
   }

   ngOnInit(): void {
     // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue', RendererStyleFlags2.Important);
      
   }

   @HostListener('mouseenter') mouseEnter() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
   // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
   this.color = this.backGroundColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
    //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.color = 'transparent';
  }

}
