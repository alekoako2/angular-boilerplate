import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      useClass: HashLocationStrategy,
      provide: LocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
