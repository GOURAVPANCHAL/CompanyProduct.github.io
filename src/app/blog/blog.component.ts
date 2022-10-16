import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  rows = [
    { image: "new1.jpg", },
    { title: "Title of first blog post", heading: "By demongo / 0", body: "Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },

    { image: "new2.jpg" },
    { title: "Title of first blog post", heading: "By demongo / 0", body: "Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },

    { image: "img3.jpg" },
    { title: "Title of first blog post", heading: "By demongo / 0", body: "Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },

    { image: "new4.jpg" },
    { title: "Title of first blog post", heading: "By demongo / 0", body: "Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },

  ]



  constructor() { }

  ngOnInit(): void {
  }

}
