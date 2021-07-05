import { MaritalStatus, Dependant, taxReliefs, taxSchemes } from './constants'

type TaxScheme = {
  min: number
  max: number
  rate: number
}

type TaxRelief = {
  maritalStatus: MaritalStatus
  dependant: Dependant
  amount: number
}

type PPH21Input = {
  monthlyIncome: number
  maritalStatus: number
  dependant: number
}

interface IOptions {
  taxReliefs: TaxRelief[]
  taxSchemes: TaxScheme[]
}

class PPH21 {
  private taxReliefs: TaxRelief[] = []
  private taxSchemes: TaxScheme[] = []

  constructor(options?: IOptions) {
    this.taxReliefs = options?.taxReliefs || taxReliefs
    this.taxSchemes = options?.taxSchemes || taxSchemes
  }

  public calculate(input: PPH21Input) {
    const { monthlyIncome, maritalStatus, dependant } = input
    const annualTaxable = (12 * monthlyIncome) - this.getTaxRelief(maritalStatus, dependant)

    return this.getTaxScheme(annualTaxable)
  }

  private getTaxScheme(annualTaxable: number): number {
    let result = 0
    for (let i = 0; i < this.taxSchemes.length; i++) {
      if (annualTaxable <= 0) {
        break
      }

      const { min, max, rate } = this.taxSchemes[i] 
      if (annualTaxable > min || annualTaxable <= max) {
        const taxable = annualTaxable >= max && max !== Infinity ? max : annualTaxable
        const tax = taxable * (rate/100)
        annualTaxable -= taxable
        result += tax
      }
    }

    return result
  }

  private getTaxRelief(ms: MaritalStatus, d: Dependant): number {
    for(const { maritalStatus, dependant, amount } of this.taxReliefs) {
      if(maritalStatus === ms && dependant === d) {
        return amount
      }
    }

    return 0
  }
}

export { IOptions }
export type { TaxScheme, TaxRelief, PPH21Input }
export default PPH21