import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(1000)
peopleAccount.getBalance()
peopleAccount.getName()
peopleAccount.withdraw(100)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 2)
companyAccount.getLoan(1000)

const premiumAccount: PremiumAccount = new PremiumAccount('Daniel', 3)
premiumAccount.deposit(100)