import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  icons = [{ images: "users-solid.svg", title: "500+", desc: "Passionate Employee" }, { images: "users-solid.svg", title: "500+", desc: "Passionate Employee" }, { images: "users-solid.svg", title: "500+", desc: "Passionate Employee" }, { images: "users-solid.svg", title: "500+", desc: "Passionate Employee" }]
  pics = [{ images: "men1.jpg" }, { images: "men2.jpg" }, { images: "men3.jpg" }]

  constructor() { }

  ngOnInit(): void {
  }

}
