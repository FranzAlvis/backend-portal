import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'departamentos' })
export class Departamento {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ default: '' })
  nombre: string;

  @Column({ default: '' })
  abreviatura: string;
}
