import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { ILaptop } from '../laptop/ILaptop.Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private http:HttpClient) { }

  getAllLaptops():Observable<ILaptop[]> {
   return this.http.get('data/laptops.json').pipe(
     map(data => {
       const laptopsArray : Array<ILaptop> = [];
        for(const id in data){
          if(data.hasOwnProperty(id)){
          laptopsArray.push(data[id]);
        }
        }
        return laptopsArray;
     })
   );
  }
}
