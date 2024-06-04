import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor (private route :Router){

  };
  islogined() :boolean{
    return  this.route.url =="/home" || this.route.url =="/store" || this.route.url =="/cats" || this.route.url =="/dogs"
        || this.route.url =="/clinic" || this.route.url =="/wishlist" 
    
  };
}
