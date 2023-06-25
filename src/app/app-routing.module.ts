import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WeatherComponent } from './weather/weather.component';




const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'weather',component:WeatherComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
