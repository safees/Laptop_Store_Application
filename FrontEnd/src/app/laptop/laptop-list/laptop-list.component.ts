import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops: Array<any> = [
    {
      "Id":1,
      "Name":"Hp",
      "Type":"Pavilion",
      "Price" : "85000"
    },

    {
        "Id":2,
        "Name":"Lenavo",
        "Type":"Unione",
        "Price" : "115000"
      },

      {
        "Id":3,
        "Name":"Hp",
        "Type":"Pavilion",
        "Price" : "85000"
      },

      {
        "Id":4,
        "Name":"Hp",
        "Type":"Pavilion",
        "Price" : "85000"
      },

      {
        "Id":5,
        "Name":"Acer",
        "Type":"Cipro",
        "Price" : "95000"
      },

      {
        "Id":6,
        "Name":"Mac",
        "Type":"Air book",
        "Price" : "255000"
      },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
