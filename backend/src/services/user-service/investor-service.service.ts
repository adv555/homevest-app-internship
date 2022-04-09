import { InvestorEntity } from '../../data/models/investor.entity';
import { IInvestor } from '~/common/interfaces';
import { InvestorRepository } from '~/data/repositories/investor-repository';
import { UpdateResult, DeleteResult, getCustomRepository } from "typeorm";

class InvestorService {

  public getAllInvestors(): Promise<InvestorEntity[]> {
    const investorRepository = getCustomRepository(InvestorRepository);
    return investorRepository.getAll();
  }
  public getInvestorById(id: string): Promise<InvestorEntity | undefined> {
    const investorRepository = getCustomRepository(InvestorRepository);
    return investorRepository.getById(id)
  }
  public createNewInvestor(investor: IInvestor): Promise<InvestorEntity> {
    const investorRepository = getCustomRepository(InvestorRepository);
    return investorRepository.createInvestor(investor);
  }
  public async updateInvestor(id: string, data: IInvestor): Promise<UpdateResult> {
    const investorRepository = getCustomRepository(InvestorRepository);
    return investorRepository.updateById(id, data)
  }
  public deleteInvestor(id: string): Promise<DeleteResult> {
    const investorRepository = getCustomRepository(InvestorRepository);
    return investorRepository.deleteById(id)
  }
  public getUser(id: string): Promise<InvestorEntity[]> {
    const investorRepository = getCustomRepository(InvestorRepository);
    return investorRepository.getUser(id);
  }
}

export { InvestorService };
