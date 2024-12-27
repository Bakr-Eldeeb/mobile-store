import { Component,NgModule,OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-samsumg',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './samsumg.component.html',
  styleUrl: './samsumg.component.css'
})
export class SamsumgComponent implements OnInit{

phones: any[] = [];  
appleItems: any[] = [];
constructor(private dataService: DataService) {}  

ngOnInit() {
  this.phones = this.dataService.getSamsung();  
  console.log(this.phones); 
  this.appleItems = this.phones
  for(let i=0 ; i<=10;i++){
    console.log(this.phones[i]);
    console.log(this.appleItems[i]);
  } 
}
cartproducts:any=JSON.parse(localStorage.getItem('cartItems')||'[]')

 
handleAddToCart(id: any):void{
 this.cartproducts.push(this.appleItems[id-1])

 localStorage.setItem('cartItems',JSON.stringify(this.cartproducts))

}

}
