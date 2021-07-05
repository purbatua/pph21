import { TaxScheme } from '../pph21'

export const taxSchemes: TaxScheme[] = [
  {
    min: 0,
    max: 50000000,
    rate: 5
  },
  {
    min: 50000000,
    max: 250000000,
    rate: 15
  },
  {
    min: 250000000,
    max: 500000000,
    rate: 25
  },
  {
    min: 500000000,
    max: Infinity,
    rate: 30
  }
]