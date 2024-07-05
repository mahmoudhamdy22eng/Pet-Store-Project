import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-clinics',
  templateUrl: './table-clinics.component.html',
  styleUrls: ['./table-clinics.component.css']
})
export class TableClinicsComponent {


  clinics:any=[];
    constructor (private api:ApiService , private route:ActivatedRoute) {
    }

    ngOnInit(): void {
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
    
    }
}
