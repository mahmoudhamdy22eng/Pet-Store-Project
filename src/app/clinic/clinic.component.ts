import { Component } from '@angular/core';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent {

  imgclinic=[{src:'1',price:' 1625',txt:'Royal Canin Feline Urinary S/O (1.5kg) - Dry food for Lower Urinary tract disease'},
              {src:'2',price:' 215',txt:'Royal Canin Feline Renal with chicken (85 gm\pouch) - Wet food for Renal and chronic kidney diseases – 12 pouches per box'},
              {src:'3',price:' 215',txt:'Royal Canin Feline Sensitivity Control – chicken & rice (100 gm\ Pouch)- Wet food for adverse Food Reactions with dermatologic – 12 pouches per box.'},
              {src:'4',price:' 3200',txt:'Royal Canin Hepatic For Dog - Canine (1.5 KG) – Dry food for liver disease'}]
  
}

