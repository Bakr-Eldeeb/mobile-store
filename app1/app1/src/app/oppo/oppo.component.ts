import { Component,NgModule,OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-oppo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './oppo.component.html',
  styleUrl: './oppo.component.css'
})
export class OppoComponent implements OnInit{

phones: any[] = [];  
appleItems: any[] = [];
cartproducts:any=JSON.parse(localStorage.getItem('cartItems')||'[]')
constructor(private dataService: DataService) {}  

ngOnInit() {
  this.phones = this.dataService.getOppo();  
  console.log(this.phones); 
  this.appleItems = this.phones
  for(let i=0 ; i<=10;i++){
    console.log(this.phones[i]);
    console.log(this.appleItems[i]);
  } 
}
handleAddToCart(id: any):void{
  this.cartproducts.push(this.appleItems[id-1])

  localStorage.setItem('cartItems',JSON.stringify(this.cartproducts))

 }

}
