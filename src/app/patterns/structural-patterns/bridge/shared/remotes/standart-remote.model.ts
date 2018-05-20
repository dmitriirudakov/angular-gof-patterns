import { Device } from '../device.interface';
import { Remote } from '../remote.interface';

export class StandartRemote implements Remote {

	public device: Device;
	
	constructor (device: Device) {
		this.device = device;
	}

	public togglePower(): void {
		if (this.device.isEnabled()) {
			this.device.disable();
		} else {
			this.device.enable();
		}
	}

	public volumeDown(): void {
		this.device.setVolume(this.device.getVolume() - 10);
	}

	public volumeUp(): void {
		this.device.setVolume(this.device.getVolume() + 10);
	}

	public channelDown(): void {
		this.device.setChannel(this.device.getChannel() - 1);
	}
	public channelUp(): void {
		this.device.setChannel(this.device.getChannel() + 1);
	}
}