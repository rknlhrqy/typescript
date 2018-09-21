"use strict";
let bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
let myself = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking'],
};
myself.bankAccount.deposit(3000);
console.log(myself);
//# sourceMappingURL=exercise.js.map