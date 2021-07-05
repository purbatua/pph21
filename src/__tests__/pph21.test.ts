import { PPH21, MaritalStatus, Dependant } from '../index'

const pph21 = new PPH21()

describe('Calculate PPH21', () => {
  test('Person with monthly salary 25.000.000, single without dependant', async () => {
    const input = {
      monthlyIncome: 25000000,
      maritalStatus: MaritalStatus.Single,
      dependant: Dependant.ZERO
    }
  
    const tax = pph21.calculate(input)
  
    expect(tax).toBe(31900000)
  })
  
  test('Person with monthly salary 60.000.000, married and has 2 dependants', async () => {
    const input = {
      monthlyIncome: 60000000,
      maritalStatus: MaritalStatus.Married,
      dependant: Dependant.TWO
    }
  
    const tax = pph21.calculate(input)
  
    expect(tax).toBe(114625000)
  })
})