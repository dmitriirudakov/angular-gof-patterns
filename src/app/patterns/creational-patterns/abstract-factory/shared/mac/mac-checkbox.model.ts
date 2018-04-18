import { Checkbox } from '../checkbox.interface';

export class MacCheckbox implements Checkbox {
	paint(): string {
		return 'MacCheckbox';
	}
}