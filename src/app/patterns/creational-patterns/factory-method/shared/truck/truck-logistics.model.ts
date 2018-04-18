import { Logistics } from '../logistics.interface';
import { Transport } from '../transport.interface';
import { Truck } from './truck.model';

export class TruckLogistics implements Logistics {
	createTransport(): Transport {
		return new Truck();
	}
}