import { Component } from "@angular/core";

@Component({
    selector: 'app-laptop-card',
    // template: `<h2>i am laptop card</h2>`,
    templateUrl: 'laptop-card.component.html',
    //styles: ['h2{font-weight:normal;}']
    styleUrls:['laptop-card.component.css']
}
)
export class LaptopCardComponent{
    Laptop: any = {
        "Id":1,
        "Name":"Hp",
        "Type":"Pavilion",
        "Price" : "85000"
    }
}