import { DisableControlModule } from './shared/directives/disable-control.directive.ts/disable-control.module';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, YesNoButtonGroupModule, ReactiveFormsModule, FormsModule, DisableControlModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
