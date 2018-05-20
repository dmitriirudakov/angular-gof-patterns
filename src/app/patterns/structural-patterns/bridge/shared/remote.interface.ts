import { Device } from './device.interface';

export interface Remote {

	device: Device;
	
	togglePower(): void;
	volumeDown(): void;
	volumeUp(): void;
	channelDown(): void;
	channelUp(): void;
}