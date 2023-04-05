import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/categoria/entities/Categoria';
import { Departamento } from 'src/departamento/entities/Departamento';
import { Noticia } from './entities/noticia.entity';
import { NoticiaController } from './noticia.controller';
import { NoticiaService } from './noticia.service';

@Module({
  imports: [TypeOrmModule.forFeature([Noticia, Departamento, Categoria])],
  controllers: [NoticiaController],
  providers: [NoticiaService],
})
export class NoticiaModule {}
