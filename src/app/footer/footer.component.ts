import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  constructor (public route :Router){

  };
  islogined() :boolean{
    return  this.route.url =="/home" || this.route.url =="/store" || this.route.url =="/cats" 
          || this.route.url =="/dogs" || this.route.url =="/clinic" 
          || this.route.url =="/wishlist" || this.route.url =="/cart" || this.route.url =="/dashboard"
    
  };

}
