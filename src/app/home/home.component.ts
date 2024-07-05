import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor (private route :Router){};
  islogined() :boolean{
    return  this.route.url =="/home" || this.route.url =="/store" || this.route.url =="/cats" || this.route.url =="/dogs"
        || this.route.url =="/clinic" || this.route.url =="/wishlist" 
    
  };

  category =[{name:"cats",route:'cats'},{name:"dogs",route:'dogs'}]

  adv = [{fawesome:"fa-solid fa-truck-fast",title:"Quality Delivery",details:"Inside Egypt"},
          {fawesome:"fa-regular fa-credit-card",title:"Safe Payment",details:"100% secure online payment and payment on delivery"},
          {fawesome:"fa-solid fa-rotate-left",title:"14 days Returns",details:"No Questions Asked"},
          {fawesome:"fa-solid fa-rocket",title:"Fast Shipping",details:"Cash on delivery is accepted inside Cairo"},
          {fawesome:"fa-regular fa-face-smile",title:"Happy Customers",details:"Serving Customers for 10 years +"},]

          // ngOnInit(): void {
          //   $('#carouselExampleIndicators').carousel({
          //     interval: 3000,
          //     pause: 'hover',
          //     wrap: true
          //   });
          // }

        }
