type bankAccountType = {money: number, deposit: (value: number) => void}; 
let bankAccount: bankAccountType = {
  money: 2000,
  deposit: function(value) {
    this.money += value;
  }
};

type userType = {name: string, bankAccount: bankAccountType, hobbies: string[]};
let myself: userType = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking'],
}; 

myself.bankAccount.deposit(3000);
console.log(myself);
