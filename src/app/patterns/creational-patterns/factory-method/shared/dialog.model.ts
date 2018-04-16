import { Button } from './button.interface';

export abstract class Dialog {
	renderWindow(): void {
		const okButton: Button = this.createButton()
		okButton.onClick(this.closeDialog)
		okButton.render()
	}

	abstract createButton(): Button;

	closeDialog(): void {
	}
}