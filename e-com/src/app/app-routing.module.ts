import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingCartComponent } from './components/user/shoping-cart/shoping-cart.component';
import { RegistrationComponent } from './components/user/account/registration/registration.component';
import { LoginComponent } from './components/user/account/login/login.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AdminDashboardComponent } from './components/admin/account/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin/account/admin-login/admin-login.component';
import { CategoryComponent } from './components/admin/account/admin-dashboard/category/category.component';
import { ProductComponent } from './components/admin/account/admin-dashboard/product/product.component';
import { ShowProductsComponent } from './components/admin/account/admin-dashboard/show-products/show-products.component';
import { ShowOrderComponent } from './components/admin/account/admin-dashboard/show-order/show-order.component';
import { ShowUsersComponent } from './components/admin/account/admin-dashboard/show-users/show-users.component';
import { DashboardComponent } from './components/user/account/dashboard/dashboard.component';
import { ProductContainerComponent } from './components/user/product-container/product-container.component';
import { IndexComponent } from './components/shared/index/index.component';
import { PoductDetailsComponent } from './components/user/product-container/product-list/poduct-details/poduct-details.component';
import { WishListContainerComponent } from './components/user/wish-list-container/wish-list-container.component';
const routes: Routes = [
  { path:'', component:IndexComponent },
  { path:'product', component:ProductContainerComponent },
  { path:'product-details/:id', component:PoductDetailsComponent },
  { path:'account/login', component:LoginComponent },
  { path:'account/registration', component:RegistrationComponent },
  { path:'account/dashboard', canActivate: [AuthGuard], component:DashboardComponent,
    children:[
      { path:'wish-list', component: WishListContainerComponent }
    ]
  },
  { 
    path:'admin/dashboard', 
    //canActivate: [AuthGuard], 
    component: AdminDashboardComponent, 
    children:[
      { path:'add-category', component:CategoryComponent },
      { path:'add-products', component:ProductComponent },
      { path:'show-products', component:ShowProductsComponent },
      { path: 'show-orders', component:ShowOrderComponent},
      { path: 'show-users', component:ShowUsersComponent},
    ]
  },
  { path:'admin/login', component:AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
