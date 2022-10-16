import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  images = [{ image: "nife.jpg", title: "FIRST HEADING", desc: "$20.00" }, { image: "cap.jpg", title: "FIRST HEADING", desc: "$20.00" }, { image: "machine.jpg", title: "FIRST HEADING", desc: "$20.00" }, { image: "brush.jpg", title: "FIRST HEADING", desc: "$20.00" }, { image: "meter.jpg", title: "FIRST HEADING", desc: "$20.00" }, { image: "iron.jpg", title: "FIRST HEADING", desc: "$20.00" }, { image: "plass.jpg", title: "FIRST HEADING", desc: "$20.00" }, { image: "chabi.jpg", title: "FIRST HEADING", desc: "$20.00" }]
  constructor() { }

  ngOnInit(): void {
  }

}
