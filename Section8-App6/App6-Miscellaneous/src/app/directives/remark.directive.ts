import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRemark]'
})
export class RemarkDirective {

  @Input('appRemark') newColor: string;

  constructor(private elementRef: ElementRef) {
    console.log('Directive Ready!');
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseEnter1() {
    this.remark(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave1() {
    this.remark(null);
  }

  private remark(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
