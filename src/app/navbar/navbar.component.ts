import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: any[] = [

    { label: "HOME", link: 'home' },
    { label: "FEATURE", options: ['FEATURE1', 'FEATURE2', 'FEATURE3'], link: 'feature' },
    { label: "PAGE", options: ['PAGE 1', 'login', 'sign up '], link: 'page' },
    { label: "SHOP", options: ['shop 1', 'shop2', 'shop3 '], link: 'shop' },
    { label: "BLOG", options: ['blog 1', 'blog2', 'blog3 '], link: 'blog' },
    { label: "SHORTCODE", options: ['SHORTCODE 1', 'SHORTCODE', 'SHORTCODE '], link: 'shortcode' },
    { label: "CONTACT US", options: ['SHORTCODE', 'SHORTCODE', 'SHORTCODE'], link: 'contactUs' },
    { label: "LOGIN", link: 'login page' },
    { label: "SIGN UP", link: 'sign-Up' },





  ]



  constructor() { }

  ngOnInit(): void {
  }

}
