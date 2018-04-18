import { Button, Checkbox, GUIFactory } from '../';
import { WindowsButton } from './windows-button.model';
import { WindowsCheckbox } from './windows-checkbox.model';

export class WindowsFactory implements GUIFactory {
	createButton(): Button {
		return new WindowsButton();
	}

	createCheckbox(): Checkbox {
		return new WindowsCheckbox();
	}
}