import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Modules
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';


// Components
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';

// Services
import {RemoteService} from './shared/services/remote.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RemoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
