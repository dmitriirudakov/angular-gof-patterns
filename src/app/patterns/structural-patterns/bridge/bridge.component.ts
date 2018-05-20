import { Component, OnInit } from '@angular/core';
import { StandartRemote, AdvancedRemote } from './shared/remotes';
import { Tv, Radio } from './shared/devices';

@Component({
	selector: 'app-bridge',
	templateUrl: './bridge.component.html',
	styleUrls: ['./bridge.component.css']
})
export class BridgeComponent implements OnInit {

	public logs: string[] = [];

	constructor() { }

	ngOnInit() {
		const tv = new Tv()
		const standartRemote = new StandartRemote(tv);
		this.log('--------- TV -------');
		this.log(`Is Enabled: ${tv.isEnabled() ? 'On': 'Off' }`);
		this.log(standartRemote.togglePower() || `=> Toggle Power`);
		this.log(`Is Enabled: ${tv.isEnabled() ? 'On': 'Off' }`);
		this.log('');
		this.log(`Current channel: ${tv.getChannel()}`);
		this.log(standartRemote.channelUp() || `=> Channel Up`);
		this.log(`Current channel: ${tv.getChannel()}`);
		// standartRemote.mute(); // Method doesn't exist. Change Standart to Advanced

		this.log('');

		const radio = new Radio();
		const advancedRemote = new AdvancedRemote(radio);

		this.log('------- Radio -------');
		this.log(`Is Enabled: ${radio.isEnabled() ? 'On': 'Off' }`);
		this.log(advancedRemote.togglePower() || `=> Toggle Power`);
		this.log(`Is Enabled: ${radio.isEnabled() ? 'On': 'Off' }`);
		this.log('');
		this.log(`Current volume: ${radio.getVolume()}`);
		this.log(advancedRemote.volumeUp() || `=> Volume Up`);
		this.log(`Current volume: ${radio.getVolume()}`);
		this.log(advancedRemote.mute() || `=> Mute`);
		this.log(`Current volume: ${radio.getVolume()}`);
	}

	public log(value: string): void {
		this.logs.push(value);
	}
}
