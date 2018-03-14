import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clothes', component: ProductListComponent },
    { path: 'accesories', component: ProductListComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      )
    ],
    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }
