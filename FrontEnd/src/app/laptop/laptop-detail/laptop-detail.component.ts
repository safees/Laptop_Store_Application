import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-detail.component.html',
  styleUrls: ['./laptop-detail.component.css']
})
export class LaptopDetailComponent implements OnInit {
public laptopId: number;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // this.laptopId = Number(this.route.snapshot.params['id']);

    this.laptopId = +this.route.snapshot.params['id'];

    this.route.params.subscribe((params) =>{
      this.laptopId = +params['id'];
    })
  }

  onSelectNext(){
    this.laptopId += 1 ;
    this.router.navigate(['laptop-detail',this.laptopId])
  }

}
