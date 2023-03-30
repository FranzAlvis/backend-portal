export class CreateNoticiaDTO {
  titulo: string;
  descripcion: string;
  fechaCreacion: string;
  categoria: string;
  departamento: string;
  autor: string;
  imagen: string;
  banner: boolean;
}
export class UpdateNoticiaDTO {
  titulo?: string;
  descripcion?: string;
  fechaCreacion?: string;
  categoria?: string;
  departamento?: string;
  autor?: string;
  imagen?: string;
  banner?: boolean;
}
