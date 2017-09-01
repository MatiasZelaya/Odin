import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { navbarComponent } from "./navbar/navbar.component";
import { homeComponent } from "./home/home.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    navbarComponent,
    homeComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
