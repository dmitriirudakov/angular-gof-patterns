import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdapterModule } from './adapter/adapter.module';
import { BridgeModule } from './bridge/bridge.module';

@NgModule({
	imports: [
		CommonModule,
		AdapterModule,
		BridgeModule
	],
	declarations: []
})
export class StructuralPatternsModule { }
