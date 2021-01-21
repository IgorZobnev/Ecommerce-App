import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrdersAdminComponent } from './components/orders-admin/orders-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SingUpComponent,
    LogoutComponent,
    CartComponent,
    AdminComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    NotfoundComponent,
    OrdersAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAXhFueuF0_6KOpzDY_GKPGBbXorRPmGN8",
      authDomain: "ecommerceapp-ce72e.firebaseapp.com",
      projectId: "ecommerceapp-ce72e",
      storageBucket: "ecommerceapp-ce72e.appspot.com",
      messagingSenderId: "804974089182",
      appId: "1:804974089182:web:6101d73572783ebbe2834f",
      measurementId: "G-4Y24W5179Z"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
