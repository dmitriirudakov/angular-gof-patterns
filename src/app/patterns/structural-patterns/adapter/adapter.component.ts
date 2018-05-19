import { Component, OnInit } from '@angular/core';
import { RoundHole, RoundPeg, SquarePeg, SquarePegAdapter } from './shared';

@Component({
	selector: 'app-adapter',
	templateUrl: './adapter.component.html',
	styleUrls: ['./adapter.component.css']
})
export class AdapterComponent implements OnInit {

	public logs: string[] = [];

	constructor() { }

	ngOnInit() {
		const hole = new RoundHole(5);
		const small_rpeg = new RoundPeg(5);
		const large_rpeg = new RoundPeg(10);
		this.logFits(hole, small_rpeg); // TRUE
		this.logFits(hole, large_rpeg); // FALSE

		const small_sqpeg = new SquarePeg(5);
		const large_sqpeg = new SquarePeg(10);
		// hole.fits(small_sqpeg); // Сompilation error, incompatible types
		// hole.fits(large_sqpeg); // Сompilation error, incompatible types

		const small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg);
		const large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg);
		this.logFits(hole, small_sqpeg_adapter, true, small_sqpeg.width); // TRUE
		this.logFits(hole, large_sqpeg_adapter, true, large_sqpeg.width); // FALSE
	}

	private logFits(hole: RoundHole, peg: RoundPeg, isSquare: boolean = false, width?: number): void {
		// isSquare and width params are used for logging purpose only
		if (!isSquare) {
			this.log(
				`Hole with radius ${hole.radius}
				fits a peg with radius ${peg.radius} : 
				${hole.fits(peg) ? 'TRUE' : 'FALSE'}`);
		} else {
			this.log(
				`Hole with radius ${hole.radius}
				fits a square with width ${width} (radius ${peg.radius}) : 
				${hole.fits(peg) ? 'TRUE' : 'FALSE'}`);
		}
	}

	private log(log: string): void {
		this.logs.push(log)
	}
}
