import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryMethodModule } from './factory-method/factory-method.module';
import { AbstractFactoryModule } from './abstract-factory/abstract-factory.module';
import { BuilderModule } from './builder/builder.module';
import { PrototypeModule } from './prototype/prototype.module';

@NgModule({
	imports: [
		CommonModule,
		AbstractFactoryModule,
		BuilderModule,
		FactoryMethodModule,
		PrototypeModule
	],
	declarations: []
})
export class CreationalPatternsModule { }
