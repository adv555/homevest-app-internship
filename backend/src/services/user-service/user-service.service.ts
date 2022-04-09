import { UserEntity } from '../../data/models/user.entity';
import { IUser } from '~/common/interfaces';
import { UserRepository } from '~/data/repositories/user-repository';
import { UpdateResult, DeleteResult, getCustomRepository } from "typeorm";

class UserService {

  public getAllUsers():Promise<UserEntity[]>{
    const userRepository = getCustomRepository(UserRepository);
    return userRepository.getAll();
  }
  public getUserById(id:string):Promise<UserEntity | undefined>{
    const userRepository = getCustomRepository(UserRepository);
    return userRepository.getById(id)
  }
  public getUserByEmail(email:string):Promise<UserEntity | undefined>{
    const userRepository = getCustomRepository(UserRepository);
    return userRepository.getByEmail(email);
  }
  public createNewUser(user:IUser):Promise<UserEntity>{
    const userRepository = getCustomRepository(UserRepository);

    return userRepository.createUser(user);
  }
  public async updateUser(id:string, data: IUser):Promise<UpdateResult>{
    const userRepository = getCustomRepository(UserRepository);
    return userRepository.updateById(id, data)
  }
  public async resetPassword(id:string, data: IUser):Promise<UpdateResult>{
    const userRepository = getCustomRepository(UserRepository);
    return userRepository.resetPassword(id, data);
  }
  public deleteUser(id:string):Promise<DeleteResult>{
    const userRepository = getCustomRepository(UserRepository);
    return userRepository.deleteById(id)
  }
}

export { UserService };
