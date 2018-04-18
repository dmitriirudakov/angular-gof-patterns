import { Checkbox, Button } from './';

export interface GUIFactory {
	createButton(): Button;
	createCheckbox(): Checkbox;
}