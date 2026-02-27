export interface ImagenNoticia {
  id: number;
  noticiaId: number;
  urlImagen: string;
  tipo: string;
}

export interface Categoria {
  id: number;
  nombre: string;
}

export interface NoticiaCategoria {
  noticiaId: number;
  categoriaId: number;
}

export interface Noticia {
  id: number;
  guid?: string;
  titulo?: string;
  enlace?: string;
  descripcion?: string;
  fechaPublicacion?: string;
  fuente?: string;
  fechaInsercion?: string;
  imagenNoticias?: ImagenNoticia[];
  noticiaCategorias?: NoticiaCategoria[];
}
