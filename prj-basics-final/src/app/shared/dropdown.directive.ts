import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core'

@Directive ( {
    selector: '[app-dropdown]'
})
export class DropdownDirective  {

    @HostBinding('class.open') isOpen = false;
    constructor(private elementRef: ElementRef) {

    }

    @HostListener('click') onClick () {
        this.isOpen = !this.isOpen
    }

  

}