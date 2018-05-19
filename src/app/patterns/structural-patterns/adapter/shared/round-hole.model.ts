import { RoundPeg } from "./round-peg.model";

export class RoundHole {
	
	private _radius: number;

	public get radius(): number {
		return this._radius;
	}

	constructor(radius: number) { 
		this._radius = radius;
	}

	public fits(peg: RoundPeg): boolean {
		return this.radius >= peg.radius;
	}
}