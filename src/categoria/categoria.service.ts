import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/Categoria';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  public async getAllCategoria(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  public async getCategoriaById(id: string): Promise<Categoria> {
    const categoria = this.categoriaRepository.findOneBy({ id: id });
    if (!categoria) throw new Error('Categoria no encontrada');
    return categoria;
  }

  public async deleteCategoriaById(id: string): Promise<void> {
    await this.categoriaRepository.delete(id);
  }

  public async postCategoria(
    categoria: Partial<Categoria>,
  ): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  public async putCategoriaById(id: string, categoria: Partial<Categoria>) {
    const myCategory = await this.getCategoriaById(id);
    if (!myCategory) throw new Error('categoria no encontrado');
    myCategory.nombre = categoria.nombre;
    myCategory.abreviatura = categoria.abreviatura;

    return this.categoriaRepository.save(myCategory);
  }
}
