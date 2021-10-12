import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private http:HttpClient) { }

  getAllLaptops(){
   return this.http.get('data/laptops.json')
  }
}
