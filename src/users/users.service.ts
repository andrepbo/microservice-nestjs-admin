import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

    async all(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(data): Promise<User> {
        return this.userRepository.save(data);
    }

    async get(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id } });
    }

    async update(id: number, data): Promise<any> {
        return this.userRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.userRepository.delete(id);
    }
}
