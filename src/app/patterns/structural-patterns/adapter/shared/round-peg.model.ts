export class RoundPeg {
	
	private _radius: number;

	public get radius(): number {
		return this._radius;
	}

	constructor(radius: number) { 
		this._radius = radius;
	}
}