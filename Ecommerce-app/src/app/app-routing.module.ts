import { NotfoundComponent } from './components/notfound/notfound.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'sign-up', component: SingUpComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
