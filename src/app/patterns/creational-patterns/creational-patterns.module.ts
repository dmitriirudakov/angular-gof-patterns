import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryMethodModule } from './factory-method/factory-method.module';
import { AbstractFactoryModule } from './abstract-factory/abstract-factory.module';
import { BuilderModule } from './builder/builder.module';

@NgModule({
	imports: [
		CommonModule,
		AbstractFactoryModule,
		BuilderModule,
		FactoryMethodModule
	],
	declarations: []
})
export class CreationalPatternsModule { }
