import { Shape } from './shape.model';

export class Rectangle extends Shape {

	public width: number;
	public height: number;
	
	constructor (source?: Rectangle) {
		super(source)

		if (source) {
			this.width = source.width;
			this.height = source.height;
		}
	}
	
	clone(): Rectangle {
		return new Rectangle(this);
	}
}