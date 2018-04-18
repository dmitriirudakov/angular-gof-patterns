import { Transport } from '../transport.interface';

export class Truck implements Transport {
	public deliver(): string {
		return 'I\'m a Truck! I\'ll deliver a product by road!';
	}
}