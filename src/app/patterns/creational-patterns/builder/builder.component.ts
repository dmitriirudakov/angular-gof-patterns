import { Component, OnInit } from '@angular/core';
import { Director } from './shared/director.model';
import { CarBuilder } from './shared/car/car-builder.model';
import { Car } from './shared/car/car.model';
import { Manual } from './shared/manual/manual.model';
import { ManualBuilder } from './shared/manual/manual-builder.model';

@Component({
	selector: 'app-builder',
	templateUrl: './builder.component.html',
	styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

	public car: Car;
	public manual: Manual;

	constructor() { }

	ngOnInit() {
		const director: Director = new Director()

		const carBuilder: CarBuilder  = new CarBuilder()
		director.constructSportsCar(carBuilder)
		this.car  = carBuilder.getResult();

		const manualBuilder: ManualBuilder = new ManualBuilder()
		director.constructSportsCar(manualBuilder)
		this.manual = manualBuilder.getResult();
	}
}
