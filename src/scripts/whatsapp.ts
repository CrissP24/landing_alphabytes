import { MENSAJES, waLink } from '../data/site';

export function abrirWhatsApp(mensaje: string) {
  window.open(waLink(mensaje), '_blank', 'noopener');
}

export function mensajeDe(clave: string, nombreProyecto?: string) {
  const texto = MENSAJES[clave] ?? MENSAJES.general;
  return nombreProyecto ? texto.replace('[NOMBRE]', nombreProyecto) : texto;
}

document.addEventListener('click', (e) => {
  const enlace = (e.target as HTMLElement).closest<HTMLElement>('[data-wa]');
  if (!enlace) return;
  e.preventDefault();
  abrirWhatsApp(mensajeDe(enlace.dataset.wa!, enlace.dataset.proyecto));
});
