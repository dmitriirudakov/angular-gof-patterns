export interface Button {
	/**
	 * Render button method
	 */
	render(): void;
	
	/**
	 * 'onClick' event listener 
	 * @param callback function to call
	 */
	onClick(callback: Function): void;
}