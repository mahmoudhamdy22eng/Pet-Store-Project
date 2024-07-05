import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-updateclinic',
  templateUrl: './updateclinic.component.html',
  styleUrls: ['./updateclinic.component.css']
})
export class UpdateclinicComponent {

  form:FormGroup
  name:string="";
  doctor:string="";
  address:string="";
  phone:string="";
  clinics:any=[];

  message:any ='';
  message2:any ='';
  username:any='';
  idclinic :any='';
  id:any='';
  constructor(private formBuilder:FormBuilder, private router:Router, 
                                              private api:ApiService ,private route:ActivatedRoute){
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
      phone:['',[Validators.pattern('^01\\d{9,10}$'),Validators.required]],
      address:['',[Validators.required]],
      doctor:['',[Validators.required]],
      cbox:[false,[Validators.requiredTrue]]      
    }
    ,{ validators: this.passmatch })
    
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


  passmatch (form: AbstractControl): ValidationErrors | null {
    const password = form.get('pass')?.value;
    const confirmp = form.get('confirmp')?.value;
    return password === confirmp ? null : { mismatch: true };
  }

  ngOnInit():void{
    let userdata=localStorage.getItem('user-Data-login')
    if(userdata){
      this.username=JSON.parse(userdata)
    }
    console.log(this.username)
    this.idclinic=this.route.snapshot.paramMap.get('id')
    console.log(this.idclinic)

    let cond='clinic_id='+this.idclinic;
    this.api.get_clinics(cond)
    .subscribe({ next:(data:any)=>{
      console.log(data[0]);
      if(data[0]){
        this.form.patchValue({
          name:data[0].clinic_name,
          doctor:data[0].clinic_doctor_name,
          address:data[0].clinic_address,
          phone:data[0].clinic_phone,
          id:data[0].clinic_id,
        })
      }
    }})
  }


  
  submit(){
    console.log(this.form.value,this.idclinic)
      this.message='';
      this.message2='';
      
      if(this.idclinic){
        this.api.update_clinic( this.idclinic, this.form.value)
        .subscribe({next:(data:any)=>{
          console.log(data['message']);
          if(data['message'] == 'parameter empty'){
            alert('Missing parameter');
          }else if(data['message'] == 'Phone must be 11 digits and start with 01'){
            alert('Phone must be 11 digits and start with 01');
          }else if(data['message'] == 'Phone already exists'){
            alert('Phone already exists');
          }else if (data['message'] == 'Clinic already exists'){
            alert('Clinic already exists');
          }else if (data['message'] == 'Clinic updated successfully'){
            alert('Clinic updated successfully');
            this.router.navigate(['/dashboard']).then(() => {
              window.location.reload();
                });
          }
        }})
      }else {
        this.api.insert_clinic(this.form.value)
        .subscribe({next:(data:any)=>{
          console.log(data['message']);
          if(data['message'] == 'Parameters cannot be empty.'){
            alert('Parameters cannot be empty.');
          }else if(data['message'] == 'Required parameters are missing.'){
            alert('Required parameters are missing.');
          }else if(data['message'] == 'Phone must be 11 digits and start with 01.'){
            alert('Phone must be 11 digits and start with 01.');
          }else if(data['message'] == 'Phone number already exists.'){
            alert('Phone number already exists.');
          }else if (data['message'] == 'Clinic name already exists.'){
            alert('Clinic name already exists.');
          }else if (data['message'] == "Clinic inserted successfully."){
            alert("Clinic inserted successfully.");
            this.router.navigate(['/dashboard']).then(() => {
              window.location.reload();
                });
          }else if(data['message'] == 'Failed to insert clinic.'){
            alert('Failed to insert clinic.');
          }
          
        }})
      }
  }

}
