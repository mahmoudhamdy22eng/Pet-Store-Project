import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form:FormGroup
  name:string="";
  phone:string="";
  email:string="";
  pass:string="";
  confirmp:string="";
  owners:any=[];

  message:any ='';
  message2:any ='';
  username:any='';
  idowner :any='';
  id:any='';
  constructor(private formBuilder:FormBuilder, private router:Router, 
                                              private api:ApiService ,private route:ActivatedRoute){
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
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
          // petNo:data[0].owner_pet_no
        })
      }
    }})
  }


  
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
          }else if (data['message'] == "User updated successfully" && data['message'] == "Owner updated successfully"){
            alert('updated successfully');
            this.router.navigate(['/login']).then(() => {
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
          }else if (data['message'] == 'User and owner added successfully'){
            alert('User added successfully');
            this.router.navigate(['/login']).then(() => {
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


// this.api.insert_owner(this.form.value)
// .subscribe({next:(data:any)=>{
//   console.log(data['message']);
//   if(data['message'] == 'Password must be at least 8 characters and contain at least one number and one uppercase and lowercase letter'){
//     alert('Password must be at least 8 characters and contain at least one number and one uppercase and lowercase letter');
//   }else if(data['message'] == 'Username already exists'){
//     alert('Name already exists');
//   }else if(data['message'] == 'Phone must be 11 digits and start with 01'){
//     alert('Phone must be 11 digits and start with 01');
//   }else if(data['message'] == 'Phone already exists'){
//     alert('Phone already exists');
//   }else if(data['message'] == 'Email not valid'){
//     alert('Please enter valid Email');
//   }else if (data['message'] == 'Email already exists'){
//     alert('Email already exists');
//   }else if (data['message'] == 'User and owner added successfully'){
//     alert('User added successfully');
//     this.router.navigate(['/login']).then(() => {
//       window.location.reload();
//         });
//   }else if(data['message'] == 'Failed to add owner'){
//     alert('Owner not added');
//   }else if(data['message'] == 'Failed to add user'){
//     alert('User not added');
//   }
    
// }})
