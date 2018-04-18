import { Component, OnInit } from '@angular/core';

import { AppConfig, Logistics, TruckLogistics, ShipLogistics } from './shared';
import { LOGISTICS_TYPES } from './factory-method.constants';

@Component({
	selector: 'app-factory-method',
	templateUrl: './factory-method.component.html',
	styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent implements OnInit {

	public logistics: Logistics;

	ngOnInit() {
		const config: AppConfig = this.getConfig();

		if (config.LOGISTICS_TYPE === LOGISTICS_TYPES.TRUCK) {
			this.logistics = new TruckLogistics();
		} else if (config.LOGISTICS_TYPE === LOGISTICS_TYPES.SHIP) {
			this.logistics = new ShipLogistics();
		}
	}

	private getConfig(): AppConfig {
		return {
			LOGISTICS_TYPE: LOGISTICS_TYPES.SHIP
		}
	}
}
