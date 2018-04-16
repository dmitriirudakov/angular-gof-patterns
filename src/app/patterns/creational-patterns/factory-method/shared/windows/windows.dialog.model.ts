import { Dialog } from '../dialog.model';
import { Button } from '../button.interface';
import { WindowsButton } from './windows-button.model';

export class WindowsDialog extends Dialog {
	createButton(): Button {
		return new WindowsButton();
	}
}