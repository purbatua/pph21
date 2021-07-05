import { PPH21, MaritalStatus, Dependant } from '..'

const pph21 = new PPH21()
const input = {
  monthlyIncome: 25000000,
  maritalStatus: MaritalStatus.Single,
  dependant: Dependant.ZERO
}

console.log('Result:', pph21.calculate(input))