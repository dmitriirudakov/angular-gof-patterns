const CONNECT_STATUS = {
	CONNECTED: 'CONNECTED',
	NOT_CONNECTED: 'NOT CONNECTED'
}

export class Datebase {
	private static instance: Datebase;
	private status: string;

	private constructor() {
		this.status = CONNECT_STATUS.NOT_CONNECTED;
	}

	public static getInstance(): Datebase {
		if (!this.instance) {
			this.instance = new Datebase();
		}

		return this.instance;
	}

	public connect(): void {
		this.status = CONNECT_STATUS.CONNECTED;
	}

	public disconnect(): void {
		this.status = CONNECT_STATUS.NOT_CONNECTED;
	}

	public getStatus(): string {
		return this.status;
	}
}