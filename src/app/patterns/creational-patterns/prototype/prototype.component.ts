import { Component, OnInit } from '@angular/core';

import { Circle, Rectangle, Shape } from './shared';

@Component({
	selector: 'app-prototype',
	templateUrl: './prototype.component.html',
	styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {

	public shapes: Shape[];
	public shapesCopy: Shape[];

	ngOnInit() {
		this.shapes = [];
		this.shapesCopy = [];

		const circle: Circle = new Circle()
		circle.x = 10;
		circle.y = 20;
		circle.radius = 15;
		this.shapes.push(circle);

		const rectangle: Rectangle = new Rectangle();
		rectangle.width = 10;
		rectangle.height = 20;
		this.shapes.push(rectangle);

		// It doesn't matter what type of shape to clone
		this.shapesCopy = this.shapes.map(shape => shape.clone());

		this.shapesCopy[0].x = 100;
		this.shapesCopy[0].y = 200;

		const anotherRectangle: Rectangle = new Rectangle();
		anotherRectangle.width = 30;
		anotherRectangle.height = 40;
		this.shapesCopy.push(anotherRectangle);
	}
}
