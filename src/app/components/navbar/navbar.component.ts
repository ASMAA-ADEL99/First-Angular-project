import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
      navVariable:boolean = false;
     @HostListener('document:scroll')
     scrollfunction(){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
          this.navVariable = true;
        }else{
          this.navVariable = false;
        }
     }


}
