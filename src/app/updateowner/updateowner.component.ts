import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

interface Pet {
  pet_id: number;
  pet_name: string;
  pet_type_no: number;
}

@Component({
  selector: 'app-updateowner',
  templateUrl: './updateowner.component.html',
  styleUrls: ['./updateowner.component.css']
})


export class UpdateownerComponent {

  



  form:FormGroup
  name:string="";
  type:string="";
  petid:string="";
  phone:string="";
  email:string="";
  pass:string="";
  confirmp:string="";
  owners:any=[];
  pettype:any=[];
  pets:Pet[] =[];

  // filteredPets: Pet[] = [];

  // filterPets() {
  //   const selectedType = this.f['type'].value;
  //   console.log(selectedType);
  //   if (selectedType) {
  //     this.filteredPets = this.pets.filter(pets => pets.pet_type_no === selectedType);
  //     console.log(this.filteredPets);
  //     this.f['petid'].setValue(this.filteredPets); // Reset petid selection
  //   } else {
  //     this.filteredPets = [];
  //   }
  // }

  message:any ='';
  message2:any ='';
  username:any='';
  idowner :any='';
  id:any='';
  petno:any='';

  constructor(private formBuilder:FormBuilder, private router:Router, 
                                              private api:ApiService ,private route:ActivatedRoute){
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
      type:['',[Validators.required]],
      petid:['',[Validators.required]],
      phone:['',[Validators.pattern('^01\\d{9,10}$'),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      // pass must be at least 8 characters and contain at least one number and one uppercase and lowercase letter
      pass:['',[Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$")]],
      confirmp:['',[Validators.required]],
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
    this.idowner=this.route.snapshot.paramMap.get('id')
    console.log(this.idowner)

    // var petno='';
    if(this.idowner){
      let cond='owner_id='+this.idowner;
      this.api.get_owners(cond)
      .subscribe({ next:(data:any)=>{
      console.log(data[0]);
      
      if(data[0]){
        this.form.patchValue({
          name:data[0].owner_name,
          email:data[0].owner_email,
          phone:data[0].owner_phone,
          id:data[0].owner_id,
          petid:data[0].owner_pet_no,
          type:data[0].o_pet_type_no
        });
        let cond='';
        this.api.get_pets(cond).subscribe({
          next: (data: any) => {
            this.pets = data;
            // console.log(this.clinics);
          }
        });
        this.api.get_type(cond).subscribe({
          next: (data: any) => {
            this.pettype = data;
            // console.log(this.clinics);
          }
        });
      }
    }});
    
  }else{
    let cond='';
    this.api.get_pets(cond).subscribe({
      next: (data: any) => {
        this.pets = data;
        // console.log(this.clinics);
      }
    });
    this.api.get_type(cond).subscribe({
      next: (data: any) => {
        this.pettype = data;
        // console.log(this.clinics);
      }
    });
  }}


  
  submit(){
    console.log(this.form.value,this.idowner)
      this.message='';
      this.message2='';
      
      if(this.idowner){
        this.api.update_owner( this.idowner, this.form.value)
        .subscribe({next:(data:any)=>{
          console.log(data['message']);
          if(data['message'] == 'Password must be at least 8 characters and contain at least one number and one uppercase and lowercase letter'){
            alert('Password must be at least 8 characters and contain at least one number and one uppercase and lowercase letter');
          }else if(data['message'] == 'Username already exists'){
            alert('Name already exists');
          }else if(data['message'] == 'Phone must be 11 digits and start with 01'){
            alert('Phone must be 11 digits and start with 01');
          }else if(data['message'] == 'Phone already exists'){
            alert('Phone already exists');
          }else if(data['message'] == 'Email not valid'){
            alert('Please enter valid Email');
          }else if (data['message'] == 'Email already exists'){
            alert('Email already exists');
          }else if (data['message'] == "Owner updated successfully"){
            alert('updated successfully');
            this.router.navigate(['/dashboard']).then(() => {
              window.location.reload();
                });
          }
        }})
      }else {
        this.api.insert_owner(this.form.value)
        .subscribe({next:(data:any)=>{
          console.log(data['message']);
          if(data['message'] == 'Password must be at least 8 characters and contain at least one number and one uppercase and lowercase letter'){
            alert('Password must be at least 8 characters and contain at least one number and one uppercase and lowercase letter');
          }else if(data['message'] == 'Username already exists'){
            alert('Name already exists');
          }else if(data['message'] == 'Phone must be 11 digits and start with 01'){
            alert('Phone must be 11 digits and start with 01');
          }else if(data['message'] == 'Phone already exists'){
            alert('Phone already exists');
          }else if(data['message'] == 'Email not valid'){
            alert('Please enter valid Email');
          }else if (data['message'] == 'Email already exists'){
            alert('Email already exists');
          }else if (data['message'] == "Owner inserted successfully"){
            alert('User added successfully');
            this.router.navigate(['/dashboard']).then(() => {
              window.location.reload();
                });
          }else if(data['message'] == 'Failed to add owner'){
            alert('Owner not added');
          }else if(data['message'] == 'Failed to add user'){
            alert('User not added');
          }
          
        }})
      }
  }

  
}
