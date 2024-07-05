import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {

  imgclinic = [{src:'1',price:' 3200',txt:'Royal Canin Hepatic For Dog - Canine (1.5 KG) – Dry food for liver disease'},
  {src:'2',price:' 5860' ,txt:'Royal Canin Maxi Adult (15 KG) - Dry food for large dogs from 26 to 44 KG. From 15 months to 5 years old'},
  {src:'3',price:' 1975',txt:'Royal Canin Medium Adult (4 KG) - Dry food for medium dogs from 11 to 25 KG. From 12 months to 7 years'},
  {src:'4',price:' 2150',txt:'Royal Canin Mini Adult (4 KG) - Dry food for small dogs up to 10 KG - form 10 months to 8 years'}]


  dogs:any=[];
  constructor (private api:ApiService , private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    let typepet = this.route.snapshot.paramMap.get('id');
    console.log(typepet);
    if(typepet != null){
      let cond = 'pet_type_no=2 and pet_id='+typepet;
      this.api.get_pets(cond)
      .subscribe({next:(data:any)=>{
        console.log(data[0]);
        this.dogs=data;
      }})
    }else{
      let cond = 'pet_type_no=2';

      this.api.get_pets(cond)
      .subscribe({next:(data:any)=>{
        console.log(data[0]);
        this.dogs=data;
      }})
    }
  
  }
}
