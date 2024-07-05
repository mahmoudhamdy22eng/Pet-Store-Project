import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { ClinicComponent } from './clinic/clinic.component';
import { DogsComponent } from './dogs/dogs.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableDogsComponent } from './table-dogs/table-dogs.component';
import { TableCatsComponent } from './table-cats/table-cats.component';
import { TableStoresComponent } from './table-stores/table-stores.component';
import { TableClinicsComponent } from './table-clinics/table-clinics.component';
import { UpdateownerComponent } from './updateowner/updateowner.component';
import { UpdatepetComponent } from './updatepet/updatepet.component';
import { UpdateclinicComponent } from './updateclinic/updateclinic.component';
import { UpdatestoreComponent } from './updatestore/updatestore.component';
import { Updatepet2Component } from './updatepet2/updatepet2.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'home', component:HomeComponent},
  
  {path:'store', component:StoreComponent},
  {path:'store/:id', component:StoreComponent},

  {path:'cats', component:CatsComponent},
  {path:'cats/:id', component:CatsComponent},

  {path:'clinic', component:ClinicComponent},
  {path:'clinic/:id', component:ClinicComponent},

  {path:'dogs', component:DogsComponent},
  {path:'dogs/:id', component:DogsComponent},

  {path:'cart', component:FooterComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'login', component:LoginComponent},

  {path:'signup', component:SignupComponent},
  // {path:'signup/:id', component:SignupComponent, canActivate:[AuthGuard], data:{role:[1]}},
  {path:'updateowner', component:UpdateownerComponent, canActivate:[AuthGuard], data:{role:[1]}},
  {path:'updateowner/:id', component:UpdateownerComponent, canActivate:[AuthGuard], data:{role:[1]}},

  {path:'updatepet', component:UpdatepetComponent, canActivate:[AuthGuard], data:{role:[1]}},
  {path:'updatepet/:id', component:UpdatepetComponent, canActivate:[AuthGuard], data:{role:[1]}},

  {path:'updatepet2', component:Updatepet2Component, canActivate:[AuthGuard], data:{role:[1]}},
  {path:'updatepet2/:id', component:Updatepet2Component, canActivate:[AuthGuard], data:{role:[1]}},

  {path:'updatestore', component:UpdatestoreComponent, canActivate:[AuthGuard], data:{role:[1]}},
  {path:'updatestore/:id', component:UpdatestoreComponent, canActivate:[AuthGuard], data:{role:[1]}},

  {path:'updateclinic', component:UpdateclinicComponent, canActivate:[AuthGuard], data:{role:[1]}},
  {path:'updateclinic/:id', component:UpdateclinicComponent, canActivate:[AuthGuard], data:{role:[1]}},
  
  {path:'', redirectTo:'/home', pathMatch:'full'},

  // {path:'dashboard', component:DashboardComponent},
  // {path:'dashboard/:id', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard], data:{role:[1]}},
  {path:'dashboard/:id', component:DashboardComponent, canActivate:[AuthGuard], data:{role:[1]}},

  {path:'table-dogs', component:TableDogsComponent},
  {path:'table-dogs/:id', component:TableDogsComponent},
  {path:'table-cats', component:TableCatsComponent},
  {path:'table-cats/:id', component:TableCatsComponent},
  {path:'table-stores', component:TableStoresComponent},
  {path:'table-stores/:id', component:TableStoresComponent},
  {path:'table-clinics', component:TableClinicsComponent},
  {path:'table-clinics/:id', component:TableClinicsComponent},



  
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
