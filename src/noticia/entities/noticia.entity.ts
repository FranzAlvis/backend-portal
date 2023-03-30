import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'noticias' })
export class Noticia {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ default: '' })
  titulo: string;

  @Column({ default: '' })
  descripcion: string;

  @Column({ default: '' })
  fechaCreacion: string;

  @Column({ default: '' })
  categoria: string;

  @Column({ default: '' })
  departamento: string;

  @Column({ default: '' })
  autor: string;

  @Column({ default: '' })
  imagen: string;

  @Column({ default: false })
  banner: boolean;
}
