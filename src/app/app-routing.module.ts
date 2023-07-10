import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component'
import { LinksComponent } from './Components/links/links.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},  
  {path:"links", component:LinksComponent},
  {path:"", component:HomeComponent},
  {path:"**", component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
