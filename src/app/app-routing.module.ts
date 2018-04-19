import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
	AbstractFactoryComponent, 
	BuilderComponent, 
	FactoryMethodComponent, 
	PrototypeComponent,
	SingletonComponent
} from './patterns';
 
const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'patterns', children: [
		{ path: 'creational', children: [
			{ path: 'abstract-factory', component: AbstractFactoryComponent },
			{ path: 'builder', component: BuilderComponent },
			{ path: 'factory-method', component: FactoryMethodComponent },
			{ path: 'prototype', component: PrototypeComponent },
			{ path: 'singleton', component: SingletonComponent }
		]}
	] }
];
 
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}