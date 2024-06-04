import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup

  constructor(private formBuilder:FormBuilder, private router:Router){
    this.form = this.formBuilder.group({
      email:['',[Validators.email,Validators.required]],
      pass:['',[Validators.required]],
      // cbox:['',[Validators.required]]      
    })
    
  }

  mailcheck:string="admin@gmail.com";

  passcheck:string="123";


  get f(){
    return this.form.controls
  }

  // check(){
  //   if(this.form.value.email == this.mailcheck && this.form.value.pass == this.passcheck 
  //     && this.ischecked == true){
  //         alert("login success")
  //         this.router.navigate(['/home'])
  //   }
  //   else if (this.ischecked == false){
  //     alert("check the box")
  //   }
  //   else{
  //     alert("login failed")
  //   }
  // }

  submit(){
    if(this.form.value.email == this.mailcheck && this.form.value.pass == this.passcheck){

      alert("signup success")
      this.router.navigate(['/home'])
      .then(() => {
        window.location.reload();
      })
    }
    else {
      alert("User Not Found")
      this.form.reset()
    }
}
}
