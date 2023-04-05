import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noticia } from 'src/noticia/entities/noticia.entity';
import { DepartamentoController } from './departamento.controller';
import { DepartamentoService } from './departamento.service';
import { Departamento } from './entities/Departamento';

@Module({
  imports: [TypeOrmModule.forFeature([Departamento, Noticia])],
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
})
export class DepartamentoModule {}
