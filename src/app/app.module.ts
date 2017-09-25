import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { navbarComponent } from "./navbar/navbar.component";
import { homeComponent } from "./home/home.component";
import { CollapseModule } from 'ngx-bootstrap';
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CollapseModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    navbarComponent,
    homeComponent,
    SidebarComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
