import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  para = "Copyright © 2020 RdxTheme"

  lists = [
    {
      name: 'ABOUT US',
      title: 'Factory Lorem Ipsum is simply dummy text of the printing and typesetting Factory has been the standard dummy text ever since the when printer.Lorem Ipsum is simply dummy text of the printing and typesetting Factory has been the standard dummy text ever since the when printer'
    },
    { name: 'OUR SERVICES', title: 'Power and Energy ,Petroleum and Gas, Petroleum Engineering, Chemical Engineering, Commercial Power, Factory Processing' },
    { name: 'RECENT POST', images: ['pick.jpg', 'pick0.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg'] }, { name: 'CONTACT US', title: 'ADDRESS demo address #8901 Marmora Road Chi Minh City, Vietnam' }]

  constructor() { }

  ngOnInit(): void {
  }

}
