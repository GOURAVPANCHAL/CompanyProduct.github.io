import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-company',
  templateUrl: './our-company.component.html',
  styleUrls: ['./our-company.component.css']
})
export class OurCompanyComponent implements OnInit {

  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt deleniti, vero adipisci maxime unde fuga eum  asperiores quidem, nostrum omnis quos cumque delectus excepturi ipsum iste distinctio dignissimos sed eligendi, dolor impedit officiis amet velit ea! Saepe reprehenderit similique doloribus."
  words = [
    { name: 'Professional Team', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.' }, { name: 'Smart Services', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.' }, { name: 'Smart Work', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.' }, { name: 'Great Support', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.' }, { name: 'Smart Work', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.' }, { name: 'Great Support', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.' }]

  constructor() { }

  ngOnInit(): void {
  }



}
