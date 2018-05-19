import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationalPatternsModule } from './creational-patterns/creational-patterns.module';
import { StructuralPatternsModule } from './structural-patterns/structural-patterns.module';

@NgModule({
	imports: [
		CommonModule,
		CreationalPatternsModule,
		StructuralPatternsModule
	],
	declarations: []
})
export class PatternsModule { }
