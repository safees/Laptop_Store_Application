import { Component, Input } from "@angular/core";
import { ILaptopBase } from "src/app/model/ilaptopbase";


@Component({
    selector: 'app-laptop-card',
    // template: `<h2>i am laptop card</h2>`,
    templateUrl: 'laptop-card.component.html',
    //styles: ['h2{font-weight:normal;}']
    styleUrls:['laptop-card.component.css']
}
)
export class LaptopCardComponent{
    @Input() laptop : ILaptopBase;
    @Input() hideIcons : boolean;
   
}