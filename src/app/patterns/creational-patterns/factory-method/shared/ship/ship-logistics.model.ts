import { Logistics } from '../logistics.interface';
import { Transport } from '../transport.interface';
import { Ship } from './ship.model';

export class ShipLogistics implements Logistics {
	createTransport(): Transport {
		return new Ship();
	}
}