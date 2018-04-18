import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryMethodComponent, AbstractFactoryComponent } from './patterns';
 
const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'factory-method', component: FactoryMethodComponent },
	{ path: 'patterns', children: [
		{ path: 'creational', children: [
			{ path: 'factory-method', component: FactoryMethodComponent },
			{ path: 'abstract-factory', component: AbstractFactoryComponent } 
		]}
	] }
];
 
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}