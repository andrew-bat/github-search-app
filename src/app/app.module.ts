import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Modules
import {AppRoutingModule} from './app-routing.module';



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
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RemoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
