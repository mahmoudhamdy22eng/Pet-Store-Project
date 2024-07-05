import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-stores',
  templateUrl: './table-stores.component.html',
  styleUrls: ['./table-stores.component.css']
})
export class TableStoresComponent {


  stores:any=[];
    constructor (private api:ApiService , private route:ActivatedRoute) {
    }

    ngOnInit(): void {
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
