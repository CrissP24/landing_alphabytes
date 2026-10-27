const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const asset = (ruta: string) => `${base}/${ruta.replace(/^\//, '')}`;
