import { Component, OnInit } from '@angular/core';

import { AppConfig, GUIFactory, MacFactory, WindowsFactory } from './shared';
import { OS_TYPES } from './abstract-factory.constants';

@Component({
	selector: 'app-abstract-factory',
	templateUrl: './abstract-factory.component.html',
	styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent implements OnInit {

	public factory: GUIFactory;

	constructor() { }

	ngOnInit() {
		const config: AppConfig = this.getConfig();

		if (config.OS === OS_TYPES.MAC) {
			this.factory = new MacFactory();
		} else if (config.OS === OS_TYPES.WINDOWS) {
			this.factory = new WindowsFactory();
		} else {
			throw Error('Unknown Operation System');
		}
	}

	private getConfig(): AppConfig {
		return {
			OS: OS_TYPES.MAC
		}
	}
}
