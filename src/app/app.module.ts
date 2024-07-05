import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ClinicComponent } from './clinic/clinic.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableStoresComponent } from './table-stores/table-stores.component';
import { TableClinicsComponent } from './table-clinics/table-clinics.component';
import { TableCatsComponent } from './table-cats/table-cats.component';
import { TableDogsComponent } from './table-dogs/table-dogs.component';
import { UpdateownerComponent } from './updateowner/updateowner.component';
import { UpdatestoreComponent } from './updatestore/updatestore.component';
import { UpdateclinicComponent } from './updateclinic/updateclinic.component';
import { UpdatepetComponent } from './updatepet/updatepet.component';
import { Updatepet2Component } from './updatepet2/updatepet2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CatsComponent,
    DogsComponent,
    WishlistComponent,
    ClinicComponent,
    StoreComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    DashboardComponent,
    TableStoresComponent,
    TableClinicsComponent,
    TableCatsComponent,
    TableDogsComponent,
    UpdateownerComponent,
    UpdatestoreComponent,
    UpdateclinicComponent,
    UpdatepetComponent,
    Updatepet2Component
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




