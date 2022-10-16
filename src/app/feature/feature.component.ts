import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  heading = "Our Awesome Services"
  content = "Lorem Ipsum is simply dummy text of the printing and typesetting Factory has  been the Factory's standard dummy  text ever since the been when an unknown printer."

  lists = [
    {
      name: 'ABOUT US',
      title: 'Factory Lorem Ipsum is simply dummy text of the printing and typesetting Factory has been the standard dummy text ever since the when printer.Lorem Ipsum is simply dummy text of the printing and typesetting Factory has been the standard dummy text ever since the when printer'
    },
    { name: 'OUR SERVICES', title: 'Power and Energy ,Petroleum and Gas, Petroleum Engineering, Chemical Engineering, Commercial Power, Factory Processing' },
    { name: 'RECENT POST', images: ['pick.jpg', 'pick0.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg'] }, { name: 'CONTACT US', title: 'ADDRESS demo address #8901 Marmora Road Chi Minh City, Vietnam' }]


  cols = [{
    data: [{ title: 'Agricultural Processing', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh euismod [...]' },
    { title: 'Chemical Research', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh euismod [...]' },
    { title: 'Material Engineering', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh euismod [...]' },

    ]
  }, {
    image: 'service-image.png'
  }, {
    data: [
      { title: 'Petroleum Engineering', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh euismod [...]' },
      { title: 'Petroleum and Gas', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh euismod [...]' },

      { title: 'Power and Energy', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh euismod [...]' },
    ]
  },
    // { title: 'Material Engineering', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh euismod [...]' },
    // { title: 'Petroleum Engineering', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh euismod [...]' },
    // { title: 'Petroleum and Gas', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh euismod [...]' },
    // { title: 'Power and Energy', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh euismod [...]' }


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
