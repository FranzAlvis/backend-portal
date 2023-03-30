import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categorias' })
export class Categoria {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ default: '' })
  nombre: string;

  @Column({ default: '' })
  abreviatura: string;
}
