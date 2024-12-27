import { Component,NgModule,OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-apple',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './apple.component.html',
  styleUrl: './apple.component.css'
})
export class AppleComponent implements OnInit{

  phones: any[] = [];  

   ngOnInit() {
    this.phones = this.dataService.getApple();  
    console.log(this.phones); 
   
  }
    constructor(private dataService: DataService) {}  

  cartproducts:any=JSON.parse(localStorage.getItem('cartItems')||'[]')

 
  handleAddToCart(id: any):void{
   this.cartproducts.push(this.phones[id-1])

   localStorage.setItem('cartItems',JSON.stringify(this.cartproducts))

  }
}
