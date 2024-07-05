import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup
  name:string="";
  pass:string="";

  message:any ='';
  message2:any ='';
  constructor(private formBuilder:FormBuilder, private router:Router, private api:ApiService){
    this.form = this.formBuilder.group({
      // email:['',[Validators.email,Validators.required]],
      name:['',[Validators.required]],
      pass:['',[Validators.required]]
      // cbox:['',[Validators.required]]      
    })
    
  }



  get f(){
    return this.form.controls
  }


  submit(){
    this.message='';
    this.message2='';
    
    this.api.login(this.form.value)
      .subscribe({next:(data:any)=>{
        console.log(data['message']);
        if(data['message'] ==  'User not found'){
          alert('User not found');
        }else if(data['message'] == 'Incorrect password'){
          alert('Incorrect password');
        }else if(data['message'] == 'Login successful'){
          alert('Login successfully');
          // localStorage.setItem('user-data',JSON.stringify(this.form.value))
          localStorage.setItem('user-data-login',JSON.stringify(data['user-data']));
          this.router.navigate(['/home'])
          .then(()=>{
            window.location.reload();
          }
      )}}
    });
  }
}              
