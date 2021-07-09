import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomepageComponent},
  { path: 'products/list/:all', component: ProductListComponent},
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'contactus' , component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
