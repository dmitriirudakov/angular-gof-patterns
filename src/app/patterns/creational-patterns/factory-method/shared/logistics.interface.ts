import { Transport } from './transport.interface';

export interface Logistics {
	createTransport(): Transport;
}