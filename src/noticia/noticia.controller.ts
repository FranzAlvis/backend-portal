import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateNoticiaDTO, UpdateNoticiaDTO } from './dto/noticia.dto';
import { Noticia } from './entities/noticia.entity';
import { NoticiaService } from './noticia.service';

@Controller('noticia')
export class NoticiaController {
  constructor(private noticiaService: NoticiaService) {}

  @Get()
  async getNoticias(): Promise<Noticia[]> {
    return this.noticiaService.getAllNoticia();
  }
  @Get(':id')
  async getOneNoticia(@Param('id') id: string): Promise<Noticia> {
    return this.noticiaService.getNoticiaById(id);
  }
  @Post()
  async postNoticia(@Body() request: CreateNoticiaDTO) {
    return this.noticiaService.postNoticia(request);
  }
  @Delete(':id')
  async deleteCar(@Param('id') id: string) {
    return this.noticiaService.deleteNoticiaById(id);
  }
  @Put(':id')
  async updateCar(@Param('id') id: string, @Body() request: UpdateNoticiaDTO) {
    return this.noticiaService.putNoticiaById(id, request);
  }
}
