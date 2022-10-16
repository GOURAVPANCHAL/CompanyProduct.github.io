import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css']
})
export class OurProjectsComponent implements OnInit {

  images = [{ name: '/assets/1.jpg', disc: 'Glass House' },
  { name: '/assets/2.jpg', disc: 'Bridge' },
  { name: '/assets/3.jpg', disc: 'Museum' },
  { name: '/assets/4.jpg', disc: 'Street' },
  { name: '/assets/5.jpg', disc: 'Building' },
  { name: '/assets/6.jpg', disc: 'Stadium' }]

  constructor() { }

  ngOnInit(): void {
  }

}
