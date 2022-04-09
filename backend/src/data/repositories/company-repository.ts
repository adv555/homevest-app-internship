import { CompanyEntity } from '../models/company.entity';
import { ICompany } from '~/common/interfaces/';
import { DeleteResult, UpdateResult, EntityRepository, Repository} from "typeorm";

@EntityRepository(CompanyEntity)
export class CompanyRepository extends Repository<CompanyEntity> {
  public async getAll(): Promise<CompanyEntity[]>{
    return await this.find();
  }
  public async getById(id:string): Promise<CompanyEntity | undefined>{
    return await this.findOne({
      where: {
        id
      }
    });
  }
  public async createCompany(user:ICompany): Promise<CompanyEntity>{

    return await this.save(user);
  }
  public async updateById(id:string, data:ICompany): Promise<UpdateResult>{

    return await this.update(
      id,
      data
    );
  }
  public async deleteById(id:string): Promise<DeleteResult>{
    return await this.delete({ 
        id 
    });
  }
  public async getUser(id:string): Promise<CompanyEntity[]>{

    return await this.find({
      where: {
        id
      },
      relations: ["user"]
    });
  }
}
