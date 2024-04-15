import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostBinding('class.new-nav') newNav: boolean = true;
  @HostListener('window:scroll') onScroll(){
    if(window.scrollY >=40){
      this.newNav = true;
    }else{
      this.newNav = false;
    }
  }

}
