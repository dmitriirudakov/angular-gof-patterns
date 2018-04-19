import { Component, OnInit } from '@angular/core';
import { Datebase } from './shared/datebase.model';

@Component({
	selector: 'app-singleton',
	templateUrl: './singleton.component.html',
	styleUrls: ['./singleton.component.css']
})
export class SingletonComponent implements OnInit {

	public logs: string[] = [];

	ngOnInit() {
		const datebaseOne: Datebase = Datebase.getInstance();
		const datebaseTwo: Datebase = Datebase.getInstance();
		
		this.log(1, `Status: ${datebaseOne.getStatus()}`);
		this.log(2, `Status: ${datebaseTwo.getStatus()}`);

		datebaseOne.connect();
		this.log(1, `Connect to DB`);

		this.log(1, `Status: ${datebaseOne.getStatus()}`);
		this.log(2, `Status: ${datebaseTwo.getStatus()}`);

		datebaseTwo.disconnect();
		this.log(2, `Disconnect from DB`);

		this.log(1, `Status: ${datebaseOne.getStatus()}`);
		this.log(2, `Status: ${datebaseTwo.getStatus()}`);
	}

	private log(instance: number, value: string): void {
		this.logs.push(`${instance} - ${value}`);
	}
}
