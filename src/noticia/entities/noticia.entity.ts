import { Categoria } from 'src/categoria/entities/Categoria';
import { Departamento } from 'src/departamento/entities/Departamento';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'noticias' })
export class Noticia {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ default: '' })
  titulo: string;

  @Column({ default: '' })
  descripcion: string;

  @CreateDateColumn()
  fechaCreacion: Date;

  @Column({ name: 'id_categoria' })
  idCategoria: string;

  @Column({ name: 'id_departamento' })
  idDepartamento: string;

  @Column({ default: '' })
  autor: string;

  @Column({ default: '' })
  imagen: string;

  @Column({ default: false })
  banner: boolean;

  @JoinColumn()
  @ManyToOne(() => Departamento, (departamento) => departamento.noticia)
  departamento: Departamento;

  @JoinColumn()
  @ManyToOne(() => Categoria, (categoria) => categoria.noticia)
  categoria: Categoria;
}
