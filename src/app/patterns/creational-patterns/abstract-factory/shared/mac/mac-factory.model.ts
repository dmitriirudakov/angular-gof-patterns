import { Button, Checkbox, GUIFactory } from '../';
import { MacButton } from './mac-button.model';
import { MacCheckbox } from './mac-checkbox.model';

export class MacFactory implements GUIFactory {
	createButton(): Button {
		return new MacButton();
	}

	createCheckbox(): Checkbox {
		return new MacCheckbox();
	}
}