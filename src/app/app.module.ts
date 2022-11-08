import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ObserverComponent } from './components/observer/observer.component';
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivasComponent,
    ObserverComponent,
    LazyLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
