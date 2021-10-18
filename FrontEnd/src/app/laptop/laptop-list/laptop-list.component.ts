import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopService } from 'src/app/services/laptop.service';
import { ILaptop } from '../ILaptop.Interface';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  BuySell = 1;
  laptops: Array<ILaptop>;

  constructor(private route:ActivatedRoute , private laptopService:LaptopService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.BuySell = 2;
    }
    this.laptopService.getAllLaptops(this.BuySell).subscribe(
      data => {
            this.laptops = data;
            console.log(data);
           
      }, error =>{
        console.log(error);
        
      }
    );

  }

}
