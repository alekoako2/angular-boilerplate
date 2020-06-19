import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), BrowserAnimationsModule],
  providers: [
    {
      useClass: HashLocationStrategy,
      provide: LocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
