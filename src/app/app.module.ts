import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserService } from './user.service';
import { AuthAdminGuardService } from './auth-admin.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CatergoryService } from './catergory.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    LoginComponent,
    CartComponent,
    OrderSuccessComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    HomeComponent,
    CheckoutComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cart', component: CartComponent },
      
      { path: 'products', component: ProductsComponent, canActivate:[AuthGuardService]},
      { path: 'checkout', component: CheckoutComponent, canActivate:[AuthGuardService]},
      { path: 'ordersuccess', component: OrderSuccessComponent, canActivate:[AuthGuardService] },
      
      { path: 'admin/products', component: AdminProductsComponent, canActivate:[AuthGuardService,AuthAdminGuardService] },
      { path: 'admin/products/new', component: ProductFormComponent, canActivate:[AuthGuardService,AuthAdminGuardService] },    
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate:[AuthGuardService,AuthAdminGuardService] },
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AuthAdminGuardService,
    CatergoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
