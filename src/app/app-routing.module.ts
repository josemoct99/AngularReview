import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ObserverComponent } from './components/observer/observer.component';

const routes: Routes = [
  {path:'', component:DataBindingComponent},
  {path:'directivas', component:DirectivasComponent},
  {path:'observer', component:ObserverComponent},
  {path:'lazyloading', loadChildren: ()=> import('./components/lazy-loading/lazy-loading-routing.module').then(m=>m.LazyLoadingRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
