import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noticia } from 'src/noticia/entities/noticia.entity';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import { Categoria } from './entities/Categoria';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria, Noticia])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
