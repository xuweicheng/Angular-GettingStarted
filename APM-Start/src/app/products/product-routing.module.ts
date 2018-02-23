import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
    ])
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
