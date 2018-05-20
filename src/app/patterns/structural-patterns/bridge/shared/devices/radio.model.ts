import { Device } from '../device.interface';

export class Radio implements Device {

	private enabled: boolean = false;
	private volume: number = 0;
	private channel: number = 0;

	public isEnabled(): boolean { 
		return this.enabled;
	};
	public enable(): void {
		this.enabled = true;
	};
	public disable(): void {
		this.enabled = false;
	};
	public getVolume(): number { 
		return this.volume;
	};
	public setVolume(percent: number): void {
		this.volume = percent;
	};
	public getChannel(): number { 
		return this.channel;
	};
	public setChannel(channel: number): void {
		this.channel = channel;
	};
}