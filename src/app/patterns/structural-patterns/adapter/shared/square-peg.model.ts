export class SquarePeg {
	
	private _width: number;

	get width(): number {
		return this._width;
	}
	
	constructor (width) { 
		this._width = width;
	}
}