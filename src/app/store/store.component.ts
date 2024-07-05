import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {


  stores:any[]=[];
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
          for(let store of data){
            store.newid=btoa(store.store_id)
            store.store_img=this.api.imgstoreURL+store.store_img
          }
          this.stores=data;
        }})
      }else{
        let cond = '';

        this.api.get_stores(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          for(let store of data){
            store.newid=btoa(store.store_id)
            store.store_img=this.api.imgstoreURL+store.store_img
          }
          this.stores=data;
        }})
      }
    
    }
}
