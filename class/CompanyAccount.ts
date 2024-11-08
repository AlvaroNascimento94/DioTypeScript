import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{
	constructor(name: string, numberAccount: number){
		super(name, numberAccount);
	}

	getLoan = (value: number) => {
		if(this.validateStatus()){
			this.setBalance(value)
		}
	}
}
