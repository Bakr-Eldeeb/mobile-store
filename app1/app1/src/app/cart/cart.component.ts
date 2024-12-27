import { Component,NgModule,OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems : any;
  ngOnInit(): void {
  
    this.cartItems=JSON.parse(localStorage.getItem('cartItems')||'[]');
    console.log(this.cartItems);
  
  }
  
  clear(){
    localStorage.removeItem('cartItems')
    window.location.reload();
  }

  deleteItems(ind: number): void {
    this.cartItems.splice(ind, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  Tprice:any;
  checkout(){
    for(let i=0;i>=this.cartItems.length;i++){
      this.Tprice+= this.cartItems[i].price;
      console.log(this.Tprice);
    }
   
  }
}
