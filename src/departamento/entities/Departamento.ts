import { Noticia } from 'src/noticia/entities/noticia.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'departamentos' })
export class Departamento {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ default: '' })
  nombre: string;

  @Column({ default: '' })
  abreviatura: string;

  @JoinColumn()
  @OneToMany(() => Noticia, (noticia) => noticia.idDepartamento)
  noticia: Noticia[];
}
