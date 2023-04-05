import { Noticia } from 'src/noticia/entities/noticia.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'categorias' })
export class Categoria {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ default: '' })
  nombre: string;

  @Column({ default: '' })
  abreviatura: string;

  @JoinColumn()
  @OneToMany(() => Noticia, (noticia) => noticia.idCategoria)
  noticia: Noticia[];
}
