import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDTO, UpdateCategoriaDTO } from './dto/categoria.dto';
import { Categoria } from './entities/Categoria';

@Controller('categoria')
export class CategoriaController {
  constructor(private categoriaService: CategoriaService) {}

  @Get()
  async getCategorias(): Promise<Categoria[]> {
    return this.categoriaService.getAllCategoria();
  }
  @Get(':id')
  async getOneCategory(@Param('id') id: string): Promise<Categoria> {
    return this.categoriaService.getCategoriaById(id);
  }
  @Post()
  async postCategoria(@Body() request: CreateCategoriaDTO) {
    return this.categoriaService.postCategoria(request);
  }
  @Delete(':id')
  async deleteCar(@Param('id') id: string) {
    return this.categoriaService.deleteCategoriaById(id);
  }
  @Put(':id')
  async updateCar(
    @Param('id') id: string,
    @Body() request: UpdateCategoriaDTO,
  ) {
    return this.categoriaService.putCategoriaById(id, request);
  }
}
