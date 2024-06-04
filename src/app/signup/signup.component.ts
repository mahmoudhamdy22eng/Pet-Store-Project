import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form:FormGroup
  name:string="";
  email:string="";
  pass:string="";
  confirmp:string="";

  constructor(private formBuilder:FormBuilder, private router:Router){
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      pass:['',[Validators.required]],
      confirmp:['',[Validators.required]],
      cbox:[false,[Validators.requiredTrue]]      
    }
    ,{ validators: this.passmatch })
    
  }
  get f(){
    return this.form.controls
  }

  mailcheck:string="admin@gmail.com";

  passcheck:string="123";



  passmatch (form: AbstractControl): ValidationErrors | null {
    const password = form.get('pass')?.value;
    const confirmp = form.get('confirmp')?.value;
    return password === confirmp ? null : { mismatch: true };
  }


  submit(){
    console.log(this.form.value)
      if(this.form.value.email == this.mailcheck && this.form.value.pass == this.passcheck 
          && this.form.valid){

        alert("signup success")
        this.router.navigate(['/home'])
        .then(() => {
          window.location.reload();
        })
      }
      else if (this.form.value.confirmp == this.form.value.pass){
        alert("Password does not match")
      }
      else{
        alert("Invalid Data")
      }
  }

}
