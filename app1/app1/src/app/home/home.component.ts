import { Component,NgModule,OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  phones: any[] = [];  

   ngOnInit() {
    this.phones = this.dataService.getPhones();  
    console.log(this.phones); 
   
  }
    constructor(private dataService: DataService) {}  

  cartproducts:any=JSON.parse(localStorage.getItem('cartItems')||'[]')

 
  handleAddToCart(id: any):void{
   this.cartproducts.push(this.phones[id-1])

   localStorage.setItem('cartItems',JSON.stringify(this.cartproducts))

  }
  
 
 
}

