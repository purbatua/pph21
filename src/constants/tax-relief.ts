import { TaxRelief } from '../pph21'
import { MaritalStatus } from './marital-status'
import { Dependant } from './dependant'

/**
 * Ref: https://www.online-pajak.com/tentang-pph21/status-kewajiban-perpajakan-kenali-perbedaannya-di-sini
 */
export const taxReliefs: TaxRelief[] = [
  {
    maritalStatus: MaritalStatus.Single,
    dependant: Dependant.ZERO,
    amount: 54000000
  },
  {
    maritalStatus: MaritalStatus.Single,
    dependant: Dependant.ONE,
    amount: 58500000
  },
  {
    maritalStatus: MaritalStatus.Single,
    dependant: Dependant.TWO,
    amount: 63000000
  },
  {
    maritalStatus: MaritalStatus.Single,
    dependant: Dependant.THREE,
    amount: 67500000
  },
  {
    maritalStatus: MaritalStatus.Married,
    dependant: Dependant.ZERO,
    amount: 112500000
  },
  {
    maritalStatus: MaritalStatus.Married,
    dependant: Dependant.ONE,
    amount: 117000000
  },
  {
    maritalStatus: MaritalStatus.Married,
    dependant: Dependant.TWO,
    amount: 121500000
  },
  {
    maritalStatus: MaritalStatus.Married,
    dependant: Dependant.THREE,
    amount: 126000000
  },
]