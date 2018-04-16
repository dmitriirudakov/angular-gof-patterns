import { Dialog } from '../dialog.model';
import { Button } from '../button.interface';
import { WebButton } from './web-button.model';

export class WebDialog extends Dialog {
	createButton(): Button {
		return new WebButton();
	}
}