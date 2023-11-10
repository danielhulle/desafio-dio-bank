export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
      if (this.validateStatus()) {
        this.balance = this.balance + value
      }
  }

  withdraw = (value: number): void => {
      if (this.validateStatus() && this.verifyBalance(value)) {
        this.balance = this.balance - value
      }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
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
