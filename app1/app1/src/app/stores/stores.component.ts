import { Component,NgModule,OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent implements OnInit{

    stores:any[]=[];
    constructor(private dataService: DataService) {}  

    ngOnInit(){
      this.stores=this.dataService.getStores();

    }
    copyText(value: any): void {
      navigator.clipboard.writeText(value).then(() => {
        console.log(`Copied to clipboard: ${value}`);
        alert('Text copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }

}
