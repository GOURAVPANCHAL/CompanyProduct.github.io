import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

  @Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  bioSection = new FormGroup({
    firstname: new FormControl,
    lastname: new FormControl,
    country: new FormControl,
    subject: new FormControl
  })

  callingFunction(){
    console.log(this.bioSection.value);
    
  }

  heading = "Contact Form"

  constructor() { }

  ngOnInit(): void {
  }

  
}
