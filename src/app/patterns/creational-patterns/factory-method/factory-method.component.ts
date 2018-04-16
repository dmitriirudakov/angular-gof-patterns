import { Component, OnInit } from '@angular/core';

import { AppConfig, Dialog, WebDialog, WindowsDialog } from './shared';
import { DIALOG_TYPES } from './factory-method.constants';

@Component({
	selector: 'app-factory-method',
	templateUrl: './factory-method.component.html',
	styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent implements OnInit {

	private dialog: Dialog;

	ngOnInit() {
		const config: AppConfig = this.getConfig();

		if (config.OS === DIALOG_TYPES.WINDOWS) {
			this.dialog = new WindowsDialog();
		} else if (config.OS === DIALOG_TYPES.WEB) {
			this.dialog = new WebDialog();
		}
	}

	private getConfig(): AppConfig {
		return {
			OS: DIALOG_TYPES.WINDOWS
		}
	}
}
