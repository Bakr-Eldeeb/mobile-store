import {  Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OppoComponent } from './oppo/oppo.component';
import { SamsumgComponent } from './samsumg/samsumg.component';
import { AppleComponent } from './apple/apple.component';
import { CartComponent } from './cart/cart.component';
import { SignComponent } from './sign/sign.component';
import { StoresComponent } from './stores/stores.component';

export const routes: Routes=[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'oppo', component: OppoComponent},
    {path:'samsumg', component:SamsumgComponent},
    {path:'apple', component:AppleComponent},
    {path:'cart', component:CartComponent},
   {path:'sign', component:SignComponent},
   {path:'stores', component:StoresComponent},
   {path:'stores/apple', component:AppleComponent},
   
   {path:'**',component:HomeComponent}
];
