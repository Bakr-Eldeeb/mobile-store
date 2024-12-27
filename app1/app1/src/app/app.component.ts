import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './shared/data.service';
import { AppleComponent } from './apple/apple.component';
import { SamsumgComponent } from './samsumg/samsumg.component';
import { OppoComponent } from './oppo/oppo.component';
import { CartComponent } from './cart/cart.component';
import { SignComponent } from './sign/sign.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,HomeComponent,AppleComponent,SamsumgComponent,OppoComponent,CartComponent,SignComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent {
//   title = 'app1';
// }
export class AppComponent implements OnInit {
  title = 'app1';
  phones: any[] = [];  

  constructor(private dataService: DataService) {}  

  ngOnInit() {
    this.phones = this.dataService.getPhones();  
    console.log(this.phones); 
    
    console.log(this.phones[0].brand);
    console.log("test");
    for(let i=0 ; i<=10;i++){
      console.log(this.phones[i]);
    } 
  }
  
}