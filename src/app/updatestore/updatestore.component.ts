import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-updatestore',
  templateUrl: './updatestore.component.html',
  styleUrls: ['./updatestore.component.css']
})
export class UpdatestoreComponent {

  form:FormGroup
  name:string="";
  supply:string="";
  address:string="";
  phone:string="";
  stores:any=[];

  message:any ='';
  message2:any ='';
  username:any='';
  idstore :any='';
  id:any='';
  constructor(private formBuilder:FormBuilder, private router:Router,private sanitizer: DomSanitizer, 
                                              private api:ApiService ,private route:ActivatedRoute){
    this.form = this.formBuilder.group({
      file: ['',[Validators.required]],
      fileSource:[''],
      name:['',[Validators.required]],
      phone:['',[Validators.pattern('^01\\d{9,10}$'),Validators.required]],
      address:['',[Validators.required]],
      cbox:[false,[Validators.requiredTrue]],
      supply:['',[Validators.pattern('^[0-9]+$'),Validators.required]] 
    })     
    // ,{ validators: this.passmatch })
  }

  public onFileChange(event:any){
    console.log(event.target.files)
      if (event.target.files.length > 0) {
        const fileee = event.target.files[0];
        this.form.patchValue({
          fileSource: fileee
        });
      }
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
    this.idstore=this.route.snapshot.paramMap.get('id')
    console.log(this.idstore)

    let cond='store_id='+this.idstore;
    this.api.get_stores(cond)
    .subscribe({ next:(data:any)=>{
      console.log(data[0]);
      if(data[0]){
        this.form.patchValue({
          name:data[0].store_name,
          supply:data[0].store_supply,
          address:data[0].store_address,
          phone:data[0].store_phone,
          id:data[0].store_id,
          fileSource:data[0].store_img
        })
      }
    }})
  }


  
  submit(){
    console.log(this.form.value,this.idstore)
      this.message='';
      this.message2='';

  const formData = new FormData();
  formData.append('file',this.form.controls['file'].value);
    formData.append('fileSource',this.form.controls['fileSource'].value);
    formData.append('name',this.form.controls['name'].value);
    formData.append('phone',this.form.controls['phone'].value);
    formData.append('address',this.form.controls['address'].value);
    formData.append('supply',this.form.controls['supply'].value);
    // formData.append('cbox',this.form.controls['cbox'].value);
    
      if(this.idstore){
        this.api.update_store( this.idstore, formData)
        .subscribe({next:(data:any)=>{
          console.log(data['message']);
          if(data['message'] == 'parameter empty'){
            alert('Empty parameter');
          }else if (data['message'] == 'parameter missing'){
            alert('Parameter missing');
          }else if(data['message'] == 'Phone must be 11 digits and start with 01'){
            alert('Phone must be 11 digits and start with 01');
          }else if(data['message'] == 'Phone already exists'){
            alert('Phone already exists');
          }else if (data['message'] == 'Store already exists'){
            alert('Store already exists');
          }else if (data['message'] == 'Store updated successfully'){
            alert('Store updated successfully');
            this.router.navigate(['/dashboard']).then(() => {
              window.location.reload();
                });
          }
        }})
      }else {
        this.api.insert_store(formData)
        .subscribe({next:(data:any)=>{
          console.log(data['message']);
          if(data['message'] == 'parameter empty'){
            alert('Empty parameter');
          }else if (data['message'] == 'parameter missing'){
            alert('Parameter missing');
          }else if(data['message'] == 'Phone must be 11 digits and start with 01'){
            alert('Phone must be 11 digits and start with 01');
          }else if(data['message'] == 'Phone number already exists'){
            alert('Phone number already exists');
          }else if (data['message'] == 'Store name already exists'){
            alert('Store name already exists');
          }else if (data['message'] == "Store inserted successfully"){
            alert('Store added successfully');
            this.router.navigate(['/dashboard']).then(() => {
              window.location.reload();
                });
          }else if(data['message'] == 'Failed to insert store'){
            alert('Store not added');
          }
          
        }})
      }
  }

}
