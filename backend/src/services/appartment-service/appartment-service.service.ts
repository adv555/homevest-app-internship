import { UserEntity } from './../../data/models/user.entity';
import { AppartmentEntity } from '../../data/models/appartment.entity';
import { IAppartment } from '~/common/interfaces';
import { AppartmentRepository } from '~/data/repositories/appartment-repository';
import { UpdateResult, DeleteResult, getCustomRepository } from "typeorm";

class AppartmentService {

  public getAllAppartments():Promise<AppartmentEntity[]>{
    const appartmentRepository = getCustomRepository(AppartmentRepository);
    return appartmentRepository.getAll();
  }
  public getAppartmentById(id:string):Promise<AppartmentEntity | undefined>{
    const appartmentRepository = getCustomRepository(AppartmentRepository);
    return appartmentRepository.getById(id)
  }
  public createAppartment(appartment:IAppartment):Promise<AppartmentEntity>{
    const appartmentRepository = getCustomRepository(AppartmentRepository);
    return appartmentRepository.createAppartment(appartment);
  }
  public async updateAppartment(id:string, data: IAppartment):Promise<UpdateResult>{
    const appartmentRepository = getCustomRepository(AppartmentRepository);
    return appartmentRepository.updateById(id, data)
  }
  public deleteAppartment(id:string):Promise<DeleteResult>{
    const appartmentRepository = getCustomRepository(AppartmentRepository);
    return appartmentRepository.deleteById(id)
  }
  public getEstate(id: string):Promise<AppartmentEntity[]>{
    const appartmentRepository = getCustomRepository(AppartmentRepository);
    return appartmentRepository.getEstate(id);
  }
}

export { AppartmentService };
