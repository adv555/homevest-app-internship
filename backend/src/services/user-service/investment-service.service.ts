import { getRepository } from "typeorm";
import { EstateEntity } from "~/data/models/estate.entity";
import { InvestmentEntity } from "~/data/models/investmant.entity";
import { InvestorEntity } from "~/data/models/investor.entity";

interface IInvestment {
  estateId: string;
  userId: string;
  fullName: string;
  companyName: string;
  country: string;
  city: string;
  street: string;
  zipcode: string;
  nameOfBank: string;
  nameOfCard: string;
  cardNumber: string;
  expirationYear: number;
  paymentAmount: number;
}

const maskCardNumber = (cardNumber: string) => {
  return cardNumber
    .split(' ')
    .map((item, index) => {
      if (index === 1 || index === 2) {
        return 'xxxx';
      }

      return item;
    })
    .join(' ');
}

export class InvestmentService {
  public async makeInvestment(investmentData: IInvestment): Promise<InvestmentEntity> {
    const investmentRepository = getRepository(InvestmentEntity);
    const investorRepository = getRepository(InvestorEntity);
    const estateRepository = getRepository(EstateEntity);

    const investor = await investorRepository.findOneOrFail({
      where: {
        userId: investmentData.userId,
      }
    });
    const estate = await estateRepository.findOneOrFail(investmentData.estateId);

    return investmentRepository.save({
      ...investmentRepository.create(investmentData),
      cardNumberMask: maskCardNumber(investmentData.cardNumber),
      investorId: investor.id,
      estateId: estate.id,
    });
  }
}
