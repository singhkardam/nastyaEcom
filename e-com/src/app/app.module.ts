import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductListComponent } from './components/user/product-container/product-list/product-list.component';
import { ShopingCartComponent } from './components/user/shoping-cart/shoping-cart.component';
import { CartComponent } from './components/user/shoping-cart/cart/cart.component';
import { CartItemComponent } from './components/user/shoping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/user/shoping-cart/product-list/product-item/product-item.component';
import { RegistrationComponent } from './components/user/account/registration/registration.component';
import { LoginComponent } from './components/user/account/login/login.component';
import { AdminDashboardComponent } from './components/admin/account/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin/account/admin-login/admin-login.component';

import { CategoryComponent } from './components/admin/account/admin-dashboard/category/category.component';
import { ProductComponent } from './components/admin/account/admin-dashboard/product/product.component';
import { ShowUsersComponent } from './components/admin/account/admin-dashboard/show-users/show-users.component';
import { ShowProductsComponent } from './components/admin/account/admin-dashboard/show-products/show-products.component';
import { ShowOrderComponent } from './components/admin/account/admin-dashboard/show-order/show-order.component';
import { DashboardComponent } from './components/user/account/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material';
import { ProductContainerComponent } from './components/user/product-container/product-container.component';
import { ProductCategoryComponent } from './components/user/product-container/product-category/product-category.component';
import { IndexComponent } from './components/shared/index/index.component';
import { MatIconModule } from '@angular/material/icon';
import { PoductDetailsComponent } from './components/user/product-container/product-list/poduct-details/poduct-details.component';
import { WishListContainerComponent } from './components/user/wish-list-container/wish-list-container.component';
import { WishListItemsComponent } from './components/user/wish-list-container/wish-list-items/wish-list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ProductListComponent,
    ShopingCartComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    RegistrationComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    CategoryComponent,
    ProductComponent,
    ShowUsersComponent,
    ShowProductsComponent,
    ShowOrderComponent,
    DashboardComponent,
    ProductContainerComponent,
    ProductCategoryComponent,
    IndexComponent,
    PoductDetailsComponent,
    WishListContainerComponent,
    WishListItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
