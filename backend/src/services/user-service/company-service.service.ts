import { CompanyEntity } from '../../data/models/company.entity';
import { ICompany } from '~/common/interfaces';
import { CompanyRepository } from '~/data/repositories/company-repository';
import { UpdateResult, DeleteResult, getCustomRepository } from "typeorm";

class CompanyService {

  public getAllCompanies():Promise<CompanyEntity[]>{
    const companyRepository = getCustomRepository(CompanyRepository);
    return companyRepository.getAll();
  }
  public getCompanyById(id:string):Promise<CompanyEntity | undefined>{
    const companyRepository = getCustomRepository(CompanyRepository);
    return companyRepository.getById(id)
  }
  public createCompany(company:ICompany):Promise<CompanyEntity>{
    const companyRepository = getCustomRepository(CompanyRepository);
    return companyRepository.createCompany(company);
  }
  public async updateCompany(id:string, data: ICompany):Promise<UpdateResult>{
    const companyRepository = getCustomRepository(CompanyRepository);
    return companyRepository.updateById(id, data)
  }
  public deleteCompany(id:string):Promise<DeleteResult>{
    const companyRepository = getCustomRepository(CompanyRepository);
    return companyRepository.deleteById(id)
  }
  public getUser(id: string):Promise<CompanyEntity[]>{
    const companyRepository = getCustomRepository(CompanyRepository);
    return companyRepository.getUser(id);
  }
}

export { CompanyService };
