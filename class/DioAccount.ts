export abstract class DioAccount {
	private name: string;
	private numberAccount: number;
	private balance: number = 0
	private status: boolean = true;

	constructor(name: string, numberAccount: number) {
		this.name = name;
		this.numberAccount = numberAccount;

	}

	getName = (): string => {
		return this.name;
	}

	setName = (name: string): void => {
		this.name = name;
	}

	getBalance = (): number => {
		return this.balance;
	}

	setBalance = (value: number): void => {
		this.balance = this.getBalance() + value;
	}

	withdraw = (value: number): void => {
		if (this.validateStatus()) {
			if (this.balance > value) {
				this.balance -= value;
				console.log(`${this.name} retirou ${value} e agora tem ${this.balance}`);
			}
		}
		throw new Error("Saldo insuficente")
	}

	deposit = (value: number): void => {
		if (this.validateStatus()) {
			this.balance += value;
			console.log(`${this.name} depositou ${value} e agora tem ${this.balance}`);
		}
	}

	protected validateStatus = (): boolean => {
		if (this.status) {
			return this.status
		}
		throw new Error("conta invalida")
	}
}