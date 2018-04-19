import { Shape } from './shape.model';

export class Circle extends Shape {

	public radius: number;
	
	constructor (source?: Circle) {
		super(source);

		if (source) {
			this.radius = source.radius;
		}
	}
	
	clone(): Circle {
		return new Circle(this);
	}
}