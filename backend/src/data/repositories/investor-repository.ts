import { InvestorEntity } from '../models/investor.entity';
import { IInvestor } from '~/common/interfaces/';
import { DeleteResult, UpdateResult, EntityRepository, Repository } from "typeorm";

@EntityRepository(InvestorEntity)
export class InvestorRepository extends Repository<InvestorEntity> {
  public async getAll(): Promise<InvestorEntity[]> {
    return await this.find();
  }
  public async getById(id: string): Promise<InvestorEntity | undefined> {
    return await this.findOne({
      where: {
        id
      }
    });
  }
  public async createInvestor(user: IInvestor): Promise<InvestorEntity> {

    return await this.save(user);
  }
  public async updateById(id: string, data: IInvestor): Promise<UpdateResult> {

    return await this.update(
      id,
      data
    );
  }
  public async deleteById(id: string): Promise<DeleteResult> {
    return await this.delete({
      id
    });
  }
  public async getUser(id: string): Promise<InvestorEntity[]> {

    return await this.find({
      where: {
        id
      },
      relations: ["user"]
    });
  }
}
