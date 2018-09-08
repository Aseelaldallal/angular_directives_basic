import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]' // select by attribute
})


// Like components, directive has ngOnInit lifecyle hook. Doesn't have all the other hooks though.
export class BasicHighlightDirective implements OnInit {

    // Element directive sits on
    constructor(private elementRef: ElementRef) {
        elementRef.nativeElement
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}