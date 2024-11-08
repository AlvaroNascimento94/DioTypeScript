import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount{
	private doc_id: number;

	constructor(doc_id: number, name: string, numberAccount: number){
		super(name, numberAccount);
		this.doc_id = doc_id;
	}
}