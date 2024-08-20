import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>
  ){}

  create(user: User) {
    return this.UserRepository.create(user);
  }

  findAll() {
    return this.UserRepository.find();
  }

  findOne(id: number) {
    return this.UserRepository.findOne({where: {id}});
  }

  update(id: number, user: User) {
    return this.UserRepository.update(id, user);
  }

  remove(id: number) {
    return this.UserRepository.delete(id);
  }
}
