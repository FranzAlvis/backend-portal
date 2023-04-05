export class CreateNoticiaDTO {
  titulo: string;
  descripcion: string;
  fechaCreacion: Date;
  idCategoria: string;
  idDepartamento: string;
  autor: string;
  imagen: string;
  banner: boolean;
}
export class UpdateNoticiaDTO {
  titulo?: string;
  descripcion?: string;
  fechaCreacion?: Date;
  idCategoria?: string;
  idDepartamento?: string;
  autor?: string;
  imagen?: string;
  banner?: boolean;
}
