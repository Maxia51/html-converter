import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConverterComponent } from './component/converter/converter.component';
import { SupportedCharactersComponent } from './component/supported-characters/supported-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    SupportedCharactersComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
