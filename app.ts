import { CompanyAccount } from "./class/CompanyAccount";
import { DespositePlus10 } from "./class/DespositePlus10";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(3354062, "Alvaro", 123456);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);

const companyAccount: CompanyAccount = new CompanyAccount("teste", 3333333)
companyAccount.deposit(20);
companyAccount.withdraw(10);
companyAccount.getLoan(1000);



const depositPlus: DespositePlus10 = new DespositePlus10("nina", 3333333);
depositPlus.deposit(1000);
depositPlus.withdraw(10);



