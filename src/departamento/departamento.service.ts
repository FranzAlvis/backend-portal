import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from './entities/Departamento';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>,
  ) {}

  public async getAllDepartamento(): Promise<Departamento[]> {
    return this.departamentoRepository.find();
  }

  public async getDepartamentoById(id: string): Promise<Departamento> {
    const departamento = this.departamentoRepository.findOneBy({ id: id });
    if (!departamento) throw new Error('Departamento no encontrada');
    return departamento;
  }

  public async deleteDepartamentoById(id: string): Promise<void> {
    await this.departamentoRepository.delete(id);
  }

  public async postDepartamento(
    departamento: Partial<Departamento>,
  ): Promise<Departamento> {
    return this.departamentoRepository.save(departamento);
  }

  public async putDepartamentoById(
    id: string,
    departamento: Partial<Departamento>,
  ) {
    const myDepartamento = await this.getDepartamentoById(id);
    if (!myDepartamento) throw new Error('departamento no encontrado');
    myDepartamento.nombre = departamento.nombre;
    myDepartamento.abreviatura = departamento.abreviatura;

    return this.departamentoRepository.save(myDepartamento);
  }
}
