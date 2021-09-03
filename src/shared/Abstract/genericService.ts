import { Repository, DeepPartial, SaveOptions, getRepository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { SubTask } from "src/sub-tasks/sub-tasks.entity";
@Injectable()
export class GenericService<E> {

    constructor (readonly repository: Repository<E>){}

    async getAll(): Promise <E[]> {
        return await this.repository.find();
    }

    async getById(id: number): Promise<E> {
        const obj = await this.repository.findOne(id);
        if (!obj) throw new NotFoundException ('No existe registro');
        return obj;
    }
      
    async create(obj): Promise<E[]> {
        const newObj = this.repository.create(obj);
        return await this.repository.save(newObj);
    }

    async edit(id, recordEntity: E): Promise<E> {
        const obj = await this.repository.findOne(id);
        if (!obj) throw new NotFoundException ('Task does not exist');

        const editedObj = Object.assign(obj, recordEntity);
        return await this.repository.save(editedObj);
    }

    async delete(id): Promise<void> {
        await this.repository.delete(id);
    }
    
}