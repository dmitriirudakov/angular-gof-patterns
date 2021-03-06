import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PatternsModule } from './patterns/patterns.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PatternsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
