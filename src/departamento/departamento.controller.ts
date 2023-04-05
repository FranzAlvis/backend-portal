import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import {
  CreateDepartamentoDTO,
  UpdateDepartamentoDTO,
} from './dto/departamento.dto';
import { Departamento } from './entities/Departamento';

@Controller('departamentos')
export class DepartamentoController {
  constructor(private departamentoService: DepartamentoService) {}

  @Get()
  async getDepartamentos(): Promise<Departamento[]> {
    return this.departamentoService.getAllDepartamento();
  }
  @Get(':id')
  async getOneDepartamento(@Param('id') id: string): Promise<Departamento> {
    return this.departamentoService.getDepartamentoById(id);
  }
  @Post()
  async postDepartamento(@Body() request: CreateDepartamentoDTO) {
    return this.departamentoService.postDepartamento(request);
  }
  @Delete(':id')
  async deleteDepartamento(@Param('id') id: string) {
    return this.departamentoService.deleteDepartamentoById(id);
  }
  @Put(':id')
  async updateDepartamento(
    @Param('id') id: string,
    @Body() request: UpdateDepartamentoDTO,
  ) {
    return this.departamentoService.putDepartamentoById(id, request);
  }
}
