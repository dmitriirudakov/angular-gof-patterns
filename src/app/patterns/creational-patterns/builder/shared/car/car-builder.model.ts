import { Engine } from '../engine.interface';
import { Builder } from '../builder.interface';
import { Car } from './car.model';

export class CarBuilder implements Builder<Car> {
	private car: Car;

	reset(): void {
		this.car = new Car();
	}

	setSeats(count: number): void {
		if (!this.car) {
			return;
		}
		this.car.seats = count;
	}
	setEngine(engine: Engine): void {
		if (!this.car) {
			return;
		}
		this.car.engine = engine;
	}
	setTripComputer(value: boolean): void {
		if (!this.car) {
			return;
		}
		this.car.hasTripComputer = value;
	}
	setGPS(value: boolean): void {
		if (!this.car) {
			return;
		}
		this.car.hasGPS = value;
	}

	getResult(): Car {
		return this.car;
	}
}