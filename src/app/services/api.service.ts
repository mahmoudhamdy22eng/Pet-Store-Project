import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL:any="http://localhost";

  imgstoreURL ="http://localhost/php/api/petstore/stores";
  imgclinicURL ="http://localhost/php/api/petstore/clinics";
  imgpetURL ="http://localhost/php/api/petstore/pets";
  imgownerURL ="http://localhost/php/api/petstore/owner";

  constructor(private  http:HttpClient) { 
  }
  IsLoggedIn(){
    return !!localStorage.getItem('user-data-login');
  }

  roleAs:any;
  getRole(){
    var user_data:any = localStorage.getItem('user-data-login');
    user_data = JSON.parse(user_data)
    this.roleAs = user_data['user_type'];
    console.log(this.roleAs)
    return this.roleAs;
  }
  get_pets(cond:any){
  return  this.http.get<[]>(this.baseURL+"/php/api/petstore/pets/GETpet.php?cond="+cond);
  }
  get_type(cond:any){
    return  this.http.get<[]>(this.baseURL+"/php/api/petstore/pets/GETtype.php?cond="+cond);
    }
  get_petcats(cond:any){
    return  this.http.get<[]>(this.baseURL+"/php/api/petstore/pets/GETpet.php?cond="+cond);
    }
  update_pet(cond:any, data:any){
    // const body =JSON.stringify(data);
    // console.log(body,cond);
    return this.http.post(this.baseURL+"/php/api/petstore/pets/UPDATEpet.php?cond="+cond,data);
  }
  insert_pet(data:any){
    const body =JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseURL+"/php/api/petstore/pets/INSERTpet.php",body);
  }
  delete_pet(cond:number, data:any){
    const body =JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseURL+"/php/api/petstore/pets/DELETEpet.php?cond="+cond,body);
  }

  get_clinics(cond:any){
    return  this.http.get<[]>(this.baseURL+"/php/api/petstore/clinics/GETclinic.php?cond="+cond);
    }
    get_Allclinics(){
      return  this.http.get<[]>(this.baseURL+"/php/api/petstore/clinics/GETclinic.php");
      }
    update_clinic(cond:any, data:any){
      const body =JSON.stringify(data);
      console.log(body,cond);
      return this.http.post(this.baseURL+"/php/api/petstore/clinics/UPDATEclinic.php?cond="+cond,body);
    }
    insert_clinic(data:any){
      const body =JSON.stringify(data);
      console.log(body);
      return this.http.post(this.baseURL+"/php/api/petstore/clinics/INSERTclinic.php",body);
    }
    delete_clinic(cond:number, data:any){
      const body =JSON.stringify(data);
      console.log(body);
      return this.http.post(this.baseURL+"/php/api/petstore/clinics/DELETEclinic.php?cond="+cond,body);
    }

    get_stores(cond:any){
      return  this.http.get<[]>(this.baseURL+"/php/api/petstore/stores/GETstore.php?cond="+cond);
      }
      get_Allstores(){
        return  this.http.get<[]>(this.baseURL+"/php/api/petstore/stores/GETstore.php");
        }
      update_store(cond:any, data:any){
        // const body =JSON.stringify(data);
        // console.log(body,cond);
        return this.http.post(this.baseURL+"/php/api/petstore/stores/UPDATEstore.php?cond="+cond,data);
      }
      insert_store(data:any){
        const body =JSON.stringify(data);
        console.log(body);
        return this.http.post(this.baseURL+"/php/api/petstore/stores/INSERTstore.php",body);
      }
    delete_store(cond:number, data:any){
        const body =JSON.stringify(data);
        console.log(body);
        return this.http.post(this.baseURL+"/php/api/petstore/stores/DELETEstore.php?cond="+cond,body);
      }

    login(data:any){
      const body =JSON.stringify(data);
      console.log(body);
      return this.http.post(this.baseURL+"/php/api/petstore/owner/login.php",body);
    }

    get_owners(cond:any){
      return  this.http.get<[]>(this.baseURL+"/php/api/petstore/owner/GETowner.php?cond="+cond);
      }
    insert_owner(data:any){
      const body =JSON.stringify(data);
      console.log(body);
      return this.http.post(this.baseURL+"/php/api/petstore/owner/INSERTowner.php",body);
    }
    update_owner(cond:any, data:any){
      const body =JSON.stringify(data);
      console.log(body,cond);
      return this.http.post(this.baseURL+"/php/api/petstore/owner/UPDATEowner.php?cond="+cond,body);
    }
    delete_owner(cond:number, data:any){
      const body =JSON.stringify(data);
      console.log(body);
      return this.http.post(this.baseURL+"/php/api/petstore/owner/DELETEowner.php?cond="+cond,body);
    }
}
