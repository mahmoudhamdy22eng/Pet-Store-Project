import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-dogs',
  templateUrl: './table-dogs.component.html',
  styleUrls: ['./table-dogs.component.css']
})
export class TableDogsComponent {

  stores:any=[];
  clinics:any=[];
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

    // clinics
      let idclinic = this.route.snapshot.paramMap.get('id');
      console.log(idclinic);
      if(idclinic != null){
        let cond = 'clinic_id='+idclinic;
        this.api.get_clinics(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.clinics=data;
        }})
      }else{
        let cond = '';

        this.api.get_clinics(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.clinics=data;
        }})
      }

      // stores
        let idstore = this.route.snapshot.paramMap.get('id');
        console.log(idstore);
        if(idstore != null){
          let cond = 'store_id='+idstore;
          this.api.get_stores(cond)
          .subscribe({next:(data:any)=>{
            console.log(data[0]);
            this.stores=data;
          }})
        }else{
          let cond = '';

          this.api.get_stores(cond)
          .subscribe({next:(data:any)=>{
            console.log(data[0]);
            this.stores=data;
          }})
        }
  
  }
}
