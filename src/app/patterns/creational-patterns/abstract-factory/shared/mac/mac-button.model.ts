import { Button } from '../button.interface';

export class MacButton implements Button {
	paint(): string {
		return 'MacButton';
	}
}