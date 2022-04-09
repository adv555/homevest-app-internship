import { EstateRepository } from '~/data/repositories/estate-repository';
import { IEstate } from '~/common/interfaces';
import { EstateEntity } from '~/data/models/estate.entity';
import { UpdateResult, DeleteResult, getCustomRepository } from "typeorm";

class EstateService {

  public getAllEstates(): Promise<EstateEntity[]> {
    const estateRepository = getCustomRepository(EstateRepository);
    return estateRepository.getAll();
  }
  public getEstateById(id: string): Promise<EstateEntity | undefined> {
    const estateRepository = getCustomRepository(EstateRepository);
    return estateRepository.getById(id)
  }
  public createNewEstate(estate: IEstate): Promise<EstateEntity> {
    const estateRepository = getCustomRepository(EstateRepository);
    return estateRepository.createEstate(estate);
  }
  public async updateEstate(id: string, data: IEstate): Promise<UpdateResult> {
    const estateRepository = getCustomRepository(EstateRepository);
    return estateRepository.updateById(id, data)
  }
  public deleteEstate(id: string): Promise<DeleteResult> {
    const estateRepository = getCustomRepository(EstateRepository);
    return estateRepository.deleteById(id)
  }
}

export { EstateService };
