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

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'home', component:HomeComponent},
  {path:'store', component:StoreComponent},
  {path:'cats', component:CatsComponent},
  {path:'clinic', component:ClinicComponent},
  {path:'dogs', component:DogsComponent},
  {path:'cart', component:FooterComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},



  
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
