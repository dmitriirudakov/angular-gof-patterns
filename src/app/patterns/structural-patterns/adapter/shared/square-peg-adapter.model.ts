import { SquarePeg } from "./square-peg.model";
import { RoundPeg } from "./round-peg.model";

export class SquarePegAdapter extends RoundPeg {

	private peg: SquarePeg;
	
	public get radius(): number {
		// Calculate a half of the diagonal of a square peg 
		// by the Pythagorean theorem.
		return +(Math.sqrt(2 * Math.pow(this.peg.width, 2)) / 2).toFixed(3);
	}

	constructor(peg: SquarePeg) {
		super(null);
		this.peg = peg;
	}
}