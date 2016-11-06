import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { NewComponent } from './new/new.component';

import { UsersService } from './services/users.service'

import { routing } from './app.routing'


let Config = new OpaqueToken('app.config');

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    NewComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://localhost:3000' },
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
