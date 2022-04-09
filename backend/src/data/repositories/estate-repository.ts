import { EstateEntity } from '../models/estate.entity';
import { IEstate} from '~/common/interfaces/';
import { DeleteResult, UpdateResult, EntityRepository, Repository} from "typeorm";

@EntityRepository(EstateEntity)
export class EstateRepository extends Repository<EstateEntity> {
  public async getAll(): Promise<EstateEntity[]>{
    return await this.find();
  }
  public async getById(id:string): Promise<EstateEntity | undefined>{
    return await this.findOne({
      where: {
        id
      }
    });
  }
  public async createEstate(estate:IEstate): Promise<EstateEntity>{

    return await this.save(estate);
  }
  public async updateById(id:string, data:IEstate): Promise<UpdateResult>{

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
  public async getEstate(id:string): Promise<EstateEntity[]>{

    return await this.find({
      where: {
        id
      },
      relations: ["company, apartment"]
    });
  }
}
