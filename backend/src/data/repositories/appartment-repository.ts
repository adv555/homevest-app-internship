import { UserEntity } from './../models/user.entity';
import { AppartmentEntity } from '../models/appartment.entity';
import { IAppartment } from '~/common/interfaces/';
import { DeleteResult, UpdateResult, EntityRepository, Repository} from "typeorm";

@EntityRepository(AppartmentEntity)
export class AppartmentRepository extends Repository<AppartmentEntity> {
  public async getAll(): Promise<AppartmentEntity[]>{
    return await this.find();
  }
  public async getById(id:string): Promise<AppartmentEntity | undefined>{
    return await this.findOne({
      where: {
        id
      }
    });
  }
  public async createAppartment(appartment:IAppartment): Promise<AppartmentEntity>{

    return await this.save(appartment);
  }
  public async updateById(id:string, data:IAppartment): Promise<UpdateResult>{

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
  public async getEstate(id:string): Promise<AppartmentEntity[]>{

    return await this.find({
      where: {
        id
      },
      relations: ["estate"]
    });
  }
}
