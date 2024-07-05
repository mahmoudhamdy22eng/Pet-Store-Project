import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-updatepet2',
  templateUrl: './updatepet2.component.html',
  styleUrls: ['./updatepet2.component.css']
})
export class Updatepet2Component {
  clinics:any=[];
  cats:any=[];
  dogs:any=[];
  stores:any=[];
  owners:any=[];
  pets:any=[];
  pettype:any=[];
  
  form:FormGroup
  name:string="";
  type:string="";
  color:string="";
  age:string="";
  selectedStore:any;
  selectedClinic:any;

  message:any ='';
  message2:any ='';
  username:any='';
  idpet :any='';
  id:any='';
  constructor(private formBuilder:FormBuilder, private router:Router, 
                                              private api:ApiService ,private route:ActivatedRoute){
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
      type:['',[Validators.required]],
      color:['',[Validators.required]],
      age:['',[Validators.pattern('^(0|[1-9]|[1-9][0-9]?)$'),Validators.required]],
      store:['',[Validators.required]],
      clinic:['',[Validators.required]],
      cbox:[false,[Validators.requiredTrue]],
    })     
    // ,{ validators: this.passmatch })
  }
  get f(){
    return this.form.controls
  }

//   onPhoneNumberInput(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
//     input.value = value;
//     this.form.controls['phone'].setValue(value); // Update the form control value
// }


  // passmatch (form: AbstractControl): ValidationErrors | null {
  //   const password = form.get('pass')?.value;
  //   const confirmp = form.get('confirmp')?.value;
  //   return password === confirmp ? null : { mismatch: true };
  // }

  ngOnInit():void{
    let userdata=localStorage.getItem('user-Data-login')
    if(userdata){
      this.username=JSON.parse(userdata)
    }
    console.log(this.username)
    this.idpet=this.route.snapshot.paramMap.get('id')
    console.log(this.idpet)
    
    if(this.idpet){
      let cond = 'pet_type_no=2 and pet_id='+this.idpet;
      this.api.get_pets(cond)
      .subscribe({ next:(data:any)=>{
        console.log(data[0]);
        if(data[0]){
          this.form.patchValue({
            name:data[0].pet_name,
            type:data[0].pet_type_no,
            color:data[0].pet_color,
            age:data[0].pet_age,
            clinic:data[0].pet_clinic_no,
            store:data[0].pet_store_no,
            id:data[0].pet_id,
          })
          let cond = '';
          this.api.get_stores(cond).subscribe({
            next: (data: any) => {
              this.stores = data;
              // console.log(this.stores);
            }
          });
          this.api.get_type(cond).subscribe({
            next: (data: any) => {
              this.pettype = data;
              // console.log(this.clinics);
            }
          });
          this.api.get_clinics(cond).subscribe({
            next: (data: any) => {
              this.clinics = data;
              // console.log(this.clinics);
            }
          });
        }
      }})
    }else{
      let cond = '';
      this.api.get_stores(cond).subscribe({
        next: (data: any) => {
          this.stores = data;
          // console.log(this.stores);
        }
      });
      this.api.get_type(cond).subscribe({
        next: (data: any) => {
          this.pettype = data;
          // console.log(this.clinics);
        }
      });
      this.api.get_clinics(cond).subscribe({
        next: (data: any) => {
          this.clinics = data;
          // console.log(this.clinics);
        }
      });
    }
  }


  
  submit(){
    console.log(this.form.value,this.idpet)
      this.message='';
      this.message2='';
      // let pettype = 'pet_type_no=1 and';
      if(this.idpet){
        this.api.update_pet( this.idpet, this.form.value)
        .subscribe({next:(data:any)=>{
          console.log(data['message']);
          if(data['message'] == 'parameter empty'){
            alert('Missing parameter');
          }else if(data['message'] == 'Phone must be 11 digits and start with 01'){
            alert('Phone must be 11 digits and start with 01');
          }else if(data['message'] == 'Phone already exists'){
            alert('Phone already exists');
          }else if (data['message'] == 'pet already exists'){
            alert('Store already exists');
          }else if (data['message'] == "Pet updated successfully"){
            alert("Pet updated successfully");
            this.router.navigate(['/dashboard']).then(() => {
              window.location.reload();
                });
          }
        }})
      }else {
        
        this.api.insert_pet(this.form.value)
        .subscribe({next:(data:any)=>{
          console.log(data['message']);
          if(data['message'] == 'parameter empty'){
            alert('Missing parameter');
          }else if(data['message'] == 'Phone must be 11 digits and start with 01'){
            alert('Phone must be 11 digits and start with 01');
          }else if(data['message'] == 'Phone already exists'){
            alert('Phone already exists');
          }else if (data['message'] == 'pet already exists'){
            alert('Store already exists');
          }else if (data['message'] == 'pet added successfully'){
            alert('Pet added successfully');
            this.router.navigate(['/dashboard']).then(() => {
              window.location.reload();
                });
          }else if(data['message'] == 'Failed to add pet'){
            alert('pet not added');
          }
          
        }})
      }
  }

}
