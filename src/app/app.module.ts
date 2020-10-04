import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Modules
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
