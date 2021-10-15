import { Component, OnInit } from '@angular/core';
import { LaptopService } from 'src/app/services/laptop.service';
import { ILaptop } from '../ILaptop.Interface';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops: Array<ILaptop>;

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
