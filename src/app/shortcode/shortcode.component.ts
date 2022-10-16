import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcode',
  templateUrl: './shortcode.component.html',
  styleUrls: ['./shortcode.component.css']
})
export class ShortcodeComponent implements OnInit {


  buttons = [
    { label: 'Default', bg: 'lightgray', font: '15px' },
    { label: 'Primary', bg: 'blue', font: '15px' },
    { label: 'custom', bg: 'lightgray', font: '15px' },
    { label: 'Sucess', bg: 'green', font: '15px' },
    { label: 'Info', bg: 'skyblue', font: '15px' },
    { label: 'Warning', bg: 'yellow', font: '15px' },
    { label: 'Danger', bg: 'red', font: '15px' },
  ]
  button = [
    { label: 'Site Button', bg: 'lightgray', font: '15px' },
    { label: 'Site Button secondry', bg: 'black', font: '15px' },
  ]

  news = [
    { label: 'Site Button', bg: 'yellow', font: '20px' },
    { label: 'Site Button', bg: 'yellow', font: '30px' },
    { label: 'Site Button', bg: 'yellow', font: '40px' },
    { label: 'Site Button', bg: 'yellow', font: '50px' },
  ]

  colors = [
    { label: 'White', color: 'gray', font: '15px' },
    { label: 'Black', color: 'black', font: '15px' },
    { label: 'Darkgray', color: 'darkgray', font: '15px' },
    { label: 'Pink', color: 'pink', font: '15px' },
    { label: 'Blue', color: 'blue', font: '15px' },
    { label: 'Green', color: 'green', font: '15px' },
    { label: 'Orange', color: 'orange', font: '15px' },
    { label: 'Red', color: 'red', font: '15px' },
    { label: 'Brown', color: 'brown', font: '15px' },
    { label: 'Yellow', color: 'yellow', font: '15px' },
    { label: 'Purple', color: 'purple', font: '15px' },
  ]

  different = [
    { label: 'white', bg: 'white', font: '15px', color: "black" },
    { label: 'Black', bg: 'Black', font: '15px', color: "white" },
    { label: 'Darkgray', bg: 'Darkgray', font: '15px', color: "white" },
    { label: 'Pink', bg: 'Pink', font: '15px', color: "white" },
    { label: 'Blue', bg: 'Blue', font: '15px', color: "white" },
    { label: 'Green', bg: 'Green', font: '15px', color: "white" },
    { label: 'Orange', bg: 'Orange', font: '15px', color: "white" },
    { label: 'Red', bg: 'Red', font: '15px', color: "white" },
    { label: 'Brown', bg: 'Brown', font: '15px', color: "white" },
    { label: 'Yellow', bg: 'Yellow', font: '15px', color: "white" },
    { label: 'Purple', bg: 'white', font: '15px', color: "white" },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
