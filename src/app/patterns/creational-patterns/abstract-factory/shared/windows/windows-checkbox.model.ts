import { Checkbox } from '../checkbox.interface';

export class WindowsCheckbox implements Checkbox {
	paint(): string {
		return 'WindowsCheckbox';
	}
}