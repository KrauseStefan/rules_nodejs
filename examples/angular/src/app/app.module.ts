
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {StoreModule} from '@ngrx/store';

import {todoReducer} from '../lib/todos/reducers/reducers';
import {MaterialModule} from '../shared/material/material.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home';
import {ServiceWorkerService} from './service-worker.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, BrowserModule, BrowserAnimationsModule, MaterialModule, HomeModule,
    StoreModule.forRoot({todoReducer}),
    BrowserModule.withServerTransition({ appId: 'angular-bazel-example' }),
    ServiceWorkerModule.register('ngsw-worker.js')
  ],
  providers:[ServiceWorkerService],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
