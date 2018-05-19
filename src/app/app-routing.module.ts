import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
	AbstractFactoryComponent, 
	BuilderComponent, 
	FactoryMethodComponent, 
	PrototypeComponent,
	SingletonComponent,
	AdapterComponent
} from './patterns';
import { AppComponent } from './app.component';
 
const routes: Routes = [
	{ path: '', pathMatch: 'full', component: AppComponent },
	{ path: 'patterns', children: [
		{ path: 'creational', children: [
			{ path: 'abstract-factory', component: AbstractFactoryComponent },
			{ path: 'builder', component: BuilderComponent },
			{ path: 'factory-method', component: FactoryMethodComponent },
			{ path: 'prototype', component: PrototypeComponent },
			{ path: 'singleton', component: SingletonComponent }
		]}, 
		{ path: 'structural', children: [
			{ path: 'adapter', component: AdapterComponent },
		]}
	], 
	},

	{ path: '**', redirectTo: '/' }
];
 
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}