import { Button } from '../button.interface';

export class WindowsButton implements Button {
	paint(): string {
		return 'WindowsButton';
	}
}