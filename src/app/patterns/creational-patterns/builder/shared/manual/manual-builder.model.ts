import { Engine } from '../engine.interface';
import { Builder } from '../builder.interface';
import { Manual } from './manual.model';

export class ManualBuilder implements Builder<Manual> {
	private manual: Manual;

	reset(): void {
		this.manual = new Manual();
	}

	setSeats(count: number): void {
		if (!this.manual) {
			return;
		}
		this.manual.seats = `Car has ${count} seats`;
	}
	setEngine(engine: Engine): void {
		if (!this.manual) {
			return;
		}
		this.manual.engine = `Car has engine: '${engine.type}'`;
	}
	setTripComputer(value: boolean): void {
		if (!this.manual) {
			return;
		}
		this.manual.tripComputer = `Car has trip computer: ${value ? 'Yes': 'No' }`;
	}
	setGPS(value: boolean): void {
		if (!this.manual) {
			return;
		}
		this.manual.GPS = `Car has GPS: ${value ? 'Yes': 'No' }`;
	}

	getResult(): Manual {
		return this.manual;
	}
}