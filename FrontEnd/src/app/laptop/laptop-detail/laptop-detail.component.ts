import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-detail.component.html',
  styleUrls: ['./laptop-detail.component.css']
})
export class LaptopDetailComponent implements OnInit {
public laptopId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.laptopId = this.route.snapshot.params['id'];
  }

}
