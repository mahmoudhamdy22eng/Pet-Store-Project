import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (public route :Router){

  };
  islogined() :boolean{
    return  this.route.url =="/home" || this.route.url =="/store" || this.route.url =="/cats" 
          || this.route.url =="/dogs" || this.route.url =="/clinic" 
          || this.route.url =="/wishlist" || this.route.url =="/cart"
    
  };

  nvlist =[{path:'cats', hover:'nvlink2'},{path:'dogs', hover:'nvlink3'},
            {path:'clinic', hover:'nvlink4'}]


}

