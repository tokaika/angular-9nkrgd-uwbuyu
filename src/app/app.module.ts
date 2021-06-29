import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, ChartModule],
  declarations: [AppComponent],
  providers: [
    // { provide: HIGHCHARTS_MODULES, useFactory: () => [boostH] } // プロバイダーにファクトリとして追加
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
