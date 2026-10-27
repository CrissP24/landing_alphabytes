export type Proyecto = {
  id: string;
  nombre: string;
  categoria: Categoria;
  resumen: string;
  descripcion: string;
  paraQuien: string;
  incluye: string[];
  tecnologias: string[];
  demo?: string;
  codigo?: string;
  privado?: boolean;
};

export const CATEGORIAS = ['Gobierno', 'Salud', 'Educación', 'Comercio y turismo', 'Gestión empresarial', 'Datos e IA'] as const;
export type Categoria = (typeof CATEGORIAS)[number];

// Sin `demo` → aparece "Pedir demo" por WhatsApp. `privado: true` → nunca muestra código.
// El orden de esta lista es el orden en la web; los primeros 9 se ven sin pulsar "Ver más".
export const PROYECTOS: Proyecto[] = [];
