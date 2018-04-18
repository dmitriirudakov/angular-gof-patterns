import { Engine } from './engine.interface';

export interface Builder<T> {
	reset(): void;
	setSeats(count: number): void;
	setEngine(engine: Engine): void;
	setTripComputer(value: boolean): void;
	setGPS(value: boolean): void;
	getResult(): T;
}