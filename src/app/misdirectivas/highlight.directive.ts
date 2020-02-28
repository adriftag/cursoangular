import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleRef: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlightBack('yellow');
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.highlightBack('');
  }

  private highlightBack(color: string) {
    if (!this.eleRef) return;
    this.eleRef.nativeElement.style.backgroundColor = color;
  }

}
