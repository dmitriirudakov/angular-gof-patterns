import { StandartRemote } from './standart-remote.model';

export class AdvancedRemote extends StandartRemote {
	public mute(): void {
		this.device.setVolume(0);
	}
}