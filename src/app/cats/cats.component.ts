import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {

  imgclinic = [{src:'1',price:' 95',txt:'PURINA FELIX As Good as it Looks with Trout and Green Bean Wet Cat Food Pouch 85g'},
  {src:'2',price:' 60',txt:'Purina Friskies Beef Chunks in Gravy Wet Cat Food Pouch 85g'},
  {src:'3',price:' 1875',txt:'Royal Canin Persian Adult (2 KG) - Over 12 months'},
  {src:'4',price:' 450',txt:'VanCat Cat Litter - Lavender 10kg'}]
};

// constructor(private route :Router, private wishlistService:WishlistService){
  
// }

// addToWishlist(item: any) {
//   this.wishlist.push(item);
// }

// getWishlist() {
//   return this.wishlist;
// }




function addToWishlist(item: any, any: any) {
  throw new Error('Function not implemented.');
}

function getWishlist() {
  throw new Error('Function not implemented.');
}

