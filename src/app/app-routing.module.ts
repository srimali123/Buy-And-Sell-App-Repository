import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';

const routes: Routes = [
  {path: '',redirectTo:'/listings', pathMatch:'full'},
  {path:'listings', component:ListingsPageComponent, pathMatch:'full'},
  {path:'listing/:id',component:ListingDetailPageComponent},
  {path:'contact/:id',component:ContactPageComponent},
  {path:'edit-listing/:id',component:EditListingPageComponent},
  {path: 'my-listing',component:MyListingPageComponent},
  {path:'new-listing',component:NewListingsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
