import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class') class: string;
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    @HostListener('click') click(eventData: Event) {
        if (this.class === 'bg-danger') {
            this.class = '';
        } else {
            this.class = 'bg-danger';
        }
    }
}
