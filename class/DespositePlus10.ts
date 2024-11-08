import { DioAccount } from "./DioAccount";

export class DespositePlus10 extends DioAccount {
    constructor(name: string, numberAccount: number) {
        super(name, numberAccount);
    }
    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.setBalance(value + 10);
            console.log(`${this.getName()} depositou ${value} e agora tem ${this.getBalance()}`);
        }
    };
}