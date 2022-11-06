import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';
import { ObserverComponent } from './components/observer/observer.component';

const routes: Routes = [
  {path:'', component:DataBindingComponent},
  {path:'directivas', component:DirectivasComponent},
  {path:'observer', component:ObserverComponent},
  {path:'lazyloading', component:LazyLoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
