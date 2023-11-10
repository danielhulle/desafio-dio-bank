export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  getBalance(): number {
    return this.balance
  }

  protected setBalance(newBalance: number): void {
    this.balance = newBalance
  }
  

  deposit(value: number): void {
      if (this.validateStatus()) {
        this.balance += value
      }
  }

  withdraw(value: number): void {
      if (this.validateStatus() && this.verifyBalance(value)) {
        this.balance -= value
      }
  }

  protected validateStatus(): boolean {
    if (this.status) {
      return this.status
    }

    throw new Error('Invalid account')
  }

  private verifyBalance(value: number): boolean {
    if (this.balance >= value) {
      return true
    }

    throw new Error('Insufficient balance')
  }
 }
