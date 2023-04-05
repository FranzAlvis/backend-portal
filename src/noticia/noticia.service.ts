import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { Categoria } from 'src/categoria/entities/Categoria';
import { Departamento } from 'src/departamento/entities/Departamento';
import { Repository } from 'typeorm';
import { Noticia } from './entities/noticia.entity';

@Injectable()
export class NoticiaService {
  constructor(
    @InjectRepository(Noticia)
    private noticiaRepository: Repository<Noticia>,
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>,
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  public async getAllNoticia(): Promise<Noticia[]> {
    return this.noticiaRepository.find({
      relations: ['categoria', 'departamento'],
    });
  }

  public async getNoticiaById(id: string): Promise<Noticia> {
    const noticia = this.noticiaRepository.findOneBy({ id: id });
    if (!noticia) throw new Error('noticia no encontrada');
    return noticia;
  }

  public async deleteNoticiaById(id: string): Promise<void> {
    await this.noticiaRepository.delete(id);
  }

  public async postNoticia(
    idCategoria: string,
    idDepartamento: string,
    noticiaAt: Partial<Noticia>,
  ): Promise<Noticia> {
    const categoria = await this.categoriaRepository.findOneBy({
      id: idCategoria,
    });
    const departamento = await this.departamentoRepository.findOneBy({
      id: idDepartamento,
    });
    if (!categoria) throw new NotFoundException('Categoria no encontrada');
    if (!departamento)
      throw new NotFoundException('Departamento no encontrado');
    const noticia = this.noticiaRepository.create(noticiaAt);
    noticia.categoria = categoria;
    noticia.departamento = departamento;

    return this.noticiaRepository.save(noticia);
  }

  // public async postNoticia(noticia: Partial<Noticia>): Promise<Noticia> {
  //   return this.noticiaRepository.save(noticia);
  // }

  public async putNoticiaById(id: string, noticia: Partial<Noticia>) {
    const miNoticia = await this.getNoticiaById(id);
    if (!miNoticia) throw new Error('noticia no encontrado');
    miNoticia.titulo = noticia.titulo;
    miNoticia.descripcion = noticia.descripcion;
    miNoticia.fechaCreacion = noticia.fechaCreacion;
    miNoticia.idCategoria = noticia.idCategoria;
    miNoticia.idDepartamento = noticia.idDepartamento;
    miNoticia.autor = noticia.autor;
    miNoticia.imagen = noticia.imagen;
    miNoticia.banner = noticia.banner;

    return this.noticiaRepository.save(miNoticia);
  }

  public guardarArchivo(ruta: string) {
    console.log(`Guardando archivo en ${ruta}`);
    //TODO guardar archivo en la ruta en la base de datos
  }

  lecturaArchivo(ruta: string) {
    return readFileSync(ruta);
  }
}
