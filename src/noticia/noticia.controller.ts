import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateNoticiaDTO, UpdateNoticiaDTO } from './dto/noticia.dto';
import { Noticia } from './entities/noticia.entity';
import { NoticiaService } from './noticia.service';

@Controller('noticias')
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
    const idCategoria = request.idCategoria;
    const idDepartamento = request.idDepartamento;
    return this.noticiaService.postNoticia(
      idCategoria,
      idDepartamento,
      request,
    );
  }

  @Post('/archivo')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, callback) => {
          callback(
            null,
            '/home/fear/Escritorio/Agetic/backend/portal-noticias-backend/archivos',
          );
        },
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, file.originalname);
        },
      }),
    }),
  )
  subirArchivo(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.noticiaService.guardarArchivo(file.path);
  }

  @Get('/recuperar/archivo')
  recuperarArchivo(@Query() query) {
    return this.noticiaService.lecturaArchivo(query.ruta);
  }

  @Delete(':id')
  async deleteNoticia(@Param('id') id: string) {
    return this.noticiaService.deleteNoticiaById(id);
  }
  @Put(':id')
  async updateNoticia(
    @Param('id') id: string,
    @Body() request: UpdateNoticiaDTO,
  ) {
    return this.noticiaService.putNoticiaById(id, request);
  }
}
