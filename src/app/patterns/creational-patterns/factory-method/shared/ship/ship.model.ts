import { Transport } from '../transport.interface';

export class Ship implements Transport {
	public deliver(): string {
		return 'I\'m a Ship! I\'ll deliver a product by sea!';
	}
}