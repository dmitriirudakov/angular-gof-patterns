import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryMethodModule } from './factory-method/factory-method.module';
import { AbstractFactoryModule } from './abstract-factory/abstract-factory.module';
import { BuilderModule } from './builder/builder.module';
import { PrototypeModule } from './prototype/prototype.module';
import { SingletonModule } from './singleton/singleton.module';

@NgModule({
	imports: [
		CommonModule,
		AbstractFactoryModule,
		BuilderModule,
		FactoryMethodModule,
		PrototypeModule,
		SingletonModule
	],
	declarations: []
})
export class CreationalPatternsModule { }
