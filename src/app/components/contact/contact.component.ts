import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    age:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')

  });
 




}
