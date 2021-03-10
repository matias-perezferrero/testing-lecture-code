import bankAccount from '../bankAccount';

describe('bankAccount', () => {
    let testBankAccount;
    beforeEach(() => {
        testBankAccount = {...bankAccount}
    })

    test('bankAccount initial balance should be 1000', () => {
        expect(testBankAccount.balance).toEqual(1000)
    })

    test('depositMoney should correctly add to the balance', () => {
        const originalBalance = testBankAccount.balance
        testBankAccount.depositMoney(500)
        expect(testBankAccount.balance).toBe(originalBalance + 500)
    })

    test('withdrawMoney should correctly subtract from the balance', () => {
        const originalBalance = testBankAccount.balance
        testBankAccount.withdrawMoney(500)
        expect(testBankAccount.balance).toBe(originalBalance - 500)
    })

    test('withdrawMoney should not allow withdrawals exceeding the balance', () => {
        testBankAccount.balance = 0
        expect(() => testBankAccount.withdrawMoney(500)).toThrow()
    })
})