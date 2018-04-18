import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryMethodModule } from './factory-method/factory-method.module';
import { AbstractFactoryModule } from './abstract-factory/abstract-factory.module';

@NgModule({
	imports: [
		CommonModule,
		AbstractFactoryModule,
		FactoryMethodModule
	],
	declarations: []
})
export class CreationalPatternsModule { }
