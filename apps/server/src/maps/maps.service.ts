import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Map } from './map.entity';

@Injectable()
export class MapsService {
  constructor(
    @InjectRepository(Map)
    private readonly mapRepository: Repository<Map>,
  ) {}

  async findAll(): Promise<Map[]> {
    return this.mapRepository.find();
  }

  findOne(id: number): Promise<Map | null> {
    return this.mapRepository.findOneBy({ id });
  }
}
