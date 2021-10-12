import { Component, OnInit } from '@angular/core';
import { LaptopService } from 'src/app/services/laptop.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops: any;

  constructor(private laptopService:LaptopService) { }

  ngOnInit(): void {

    this.laptopService.getAllLaptops().subscribe(
      data => {
            this.laptops = data;
            console.log(data);
      }, error =>{
        console.log(error);
        
      }
    );

  }

}
