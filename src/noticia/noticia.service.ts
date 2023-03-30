import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noticia } from './entities/noticia.entity';

@Injectable()
export class NoticiaService {
  constructor(
    @InjectRepository(Noticia)
    private noticiaRepository: Repository<Noticia>,
  ) {}

  public async getAllNoticia(): Promise<Noticia[]> {
    return this.noticiaRepository.find();
  }

  public async getNoticiaById(id: string): Promise<Noticia> {
    const noticia = this.noticiaRepository.findOneBy({ id: id });
    if (!noticia) throw new Error('noticia no encontrada');
    return noticia;
  }

  public async deleteNoticiaById(id: string): Promise<void> {
    await this.noticiaRepository.delete(id);
  }

  public async postNoticia(noticia: Partial<Noticia>): Promise<Noticia> {
    return this.noticiaRepository.save(noticia);
  }

  public async putNoticiaById(id: string, noticia: Partial<Noticia>) {
    const miNoticia = await this.getNoticiaById(id);
    if (!miNoticia) throw new Error('noticia no encontrado');
    miNoticia.titulo = noticia.titulo;
    miNoticia.descripcion = noticia.descripcion;
    miNoticia.fechaCreacion = noticia.fechaCreacion;
    miNoticia.categoria = noticia.categoria;
    miNoticia.departamento = noticia.departamento;
    miNoticia.autor = noticia.autor;
    miNoticia.imagen = noticia.imagen;
    miNoticia.banner = noticia.banner;

    return this.noticiaRepository.save(miNoticia);
  }
}
