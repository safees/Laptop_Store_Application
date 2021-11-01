import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ILaptopBase } from 'src/app/model/ilaptopbase';


@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent implements OnInit {
  @ViewChild('Form') addLaptopForm:NgForm;
  @ViewChild('formTabs')formTabs: TabsetComponent;

  laptopTypes:Array<string>=['Notebook','Ultrabook','Chromebook', 'Macbook' , 'Hybrid (2 in 1 Laptop)',' Gaming laptops']
  brands:Array<string>=['Acer','Apple iMac', 'Apple iPad' ,'Dell',' Hp',
                        'Lenavo','Microsoft','Other Brand']

  laptopView : ILaptopBase = {
    Id: null,
    Name: null,
    Price: null,
    BuySell:null,
    MYear : null,
    LType :null,
    Brand : null,
    Address :null,
    Generation :null,
    

  };

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log("Form is working,its submitted");
    console.log('BuySell=' + this.addLaptopForm.value.BasicInfo.BuySell);
    console.log(this.addLaptopForm);
  }

  selectTab(tabId: number) {
      this.formTabs.tabs[tabId].active = true;
  }
}
