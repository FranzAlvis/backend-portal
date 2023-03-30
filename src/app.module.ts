import { Module } from '@nestjs/common';
import { dbConfig } from './dbConfig';
import { NoticiaModule } from './noticia/noticia.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [dbConfig, NoticiaModule, DepartamentoModule, CategoriaModule],
})
export class AppModule {}
