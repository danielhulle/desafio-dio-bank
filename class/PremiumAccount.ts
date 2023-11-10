import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit(value: number): void {
    const baseValue = 10
    const currentBalance = this.getBalance()
    this.setBalance(currentBalance + baseValue + value)
  }
}