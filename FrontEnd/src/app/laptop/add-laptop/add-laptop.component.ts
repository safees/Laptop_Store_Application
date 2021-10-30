import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ILaptop } from '../ILaptop.Interface';

@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent implements OnInit {
  @ViewChild('Form') addLaptopForm:NgForm;
  @ViewChild('formTabs')formTabs: TabsetComponent;

  laptopTypes:Array<string>=['Notebook','Ultrabook','Chromebook', 'Macbook' , 'Hybrid (2 in 1 Laptop)',' Gaming laptops']
  brands:Array<string>=['Acer','Apple iMac', 'Apple iPad' ,'Dell',' Hp','Intel',
                        'Lenavo','Microsoft','Other Brand']

  laptopView:ILaptop = {
    Id: null,
    Name: null,
    Price: null,
    BuySell:null,
    Type : null
  };

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log("Form is working,its submitted");
    console.log(this.addLaptopForm);
  }

  selectTab(tabId: number) {
      this.formTabs.tabs[tabId].active = true;
  }
}
