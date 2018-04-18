import { Builder } from "./builder.interface";
import { SportEngine } from "./sport-engine.model";

export class Director {
	constructSportsCar(builder: Builder<any>) {
		builder.reset();
		builder.setSeats(2);
		builder.setEngine(new SportEngine());
		builder.setTripComputer(true);
		builder.setGPS(true);
	}
}