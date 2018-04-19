import { Prototype } from './prototype.interface';

export abstract class Shape implements Prototype<Shape> {
	public x: number;
	public y: number;
	public color: string;

	constructor(source?: Shape) {
		if (source) {
			this.x = source.x;
			this.y = source.y;
			this.color = source.color;
		}
	}

	abstract clone(): Shape;
}