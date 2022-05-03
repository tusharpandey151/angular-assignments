import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpInterceptorService } from './interceptor.service';
import { LoggingInterceptorService } from './logging-interceptor.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ // Order Matters Here - as the interceptor at first will be executed first. So logging would probably come after we have added the auth header
  {
    provide: HTTP_INTERCEPTORS,
    useClass : HttpInterceptorService,
    multi:true
  },
  {
      provide: HTTP_INTERCEPTORS,
      useClass : LoggingInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
