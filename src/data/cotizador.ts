import { PRESUPUESTOS } from './site';

export type Opcion = {
  id: string;
  texto: string;
  detalle?: string;
  icono?: string;
  valor?: string;
};

export const NEGOCIOS: (Opcion & { sugiere: string[]; reaccion: string })[] = [
  { id: 'comercio', texto: 'Tienda o comercio', detalle: 'Venta de productos', icono: 'cart', sugiere: ['vender', 'inventario', 'facturar'], reaccion: 'Un comercio con presencia digital vende incluso cuando el local está cerrado.' },
  { id: 'restaurante', texto: 'Restaurante o alimentos', detalle: 'Comida, bebidas, delivery', icono: 'receipt', sugiere: ['pedidos', 'visibilidad', 'facturar'], reaccion: 'En alimentos, recibir pedidos sin llamadas ahorra tiempo y errores.' },
  { id: 'salud', texto: 'Salud', detalle: 'Consultorio, clínica, farmacia', icono: 'lifebuoy', sugiere: ['citas', 'clientes', 'reportes'], reaccion: 'En salud, ordenar citas e historias clínicas cambia el día a día.' },
  { id: 'educacion', texto: 'Educación', detalle: 'Colegio, academia, universidad', icono: 'blocks', sugiere: ['clientes', 'reportes', 'automatizar'], reaccion: 'En educación, automatizar registros libera horas a docentes y coordinación.' },
  { id: 'servicios', texto: 'Servicios profesionales', detalle: 'Abogados, contadores, talleres', icono: 'user', sugiere: ['visibilidad', 'citas', 'clientes'], reaccion: 'Para servicios, la confianza empieza con una buena presencia en línea.' },
  { id: 'gobierno', texto: 'Institución pública', detalle: 'GAD, junta, organización', icono: 'shield', sugiere: ['visibilidad', 'automatizar', 'reportes'], reaccion: 'Para instituciones, la transparencia y los trámites en línea son clave.' },
  { id: 'industria', texto: 'Industria o agro', detalle: 'Producción, logística, campo', icono: 'cpu', sugiere: ['inventario', 'reportes', 'automatizar'], reaccion: 'En producción, tener datos al día evita pérdidas y decisiones a ciegas.' },
  { id: 'otro', texto: 'Otro tipo de negocio', detalle: 'Me lo cuentas al final', icono: 'messages', sugiere: [], reaccion: 'Perfecto, cada negocio es distinto y lo adaptamos al tuyo.' },
];

export const OBJETIVOS: (Opcion & { soluciones: string[]; funciones: string[] })[] = [
  { id: 'visibilidad', texto: 'Darme a conocer en internet', icono: 'globe', soluciones: ['web'], funciones: ['diseno', 'seo', 'contacto'] },
  { id: 'vender', texto: 'Vender en línea', icono: 'cart', soluciones: ['ecommerce'], funciones: ['catalogo', 'carrito', 'pagos'] },
  { id: 'pedidos', texto: 'Recibir pedidos o reservas', icono: 'messages', soluciones: ['web', 'medida'], funciones: ['contacto', 'notificaciones'] },
  { id: 'citas', texto: 'Agendar citas o turnos', icono: 'calendar', soluciones: ['medida', 'movil'], funciones: ['agenda', 'notificaciones'] },
  { id: 'inventario', texto: 'Controlar inventario', icono: 'folder', soluciones: ['medida', 'escritorio'], funciones: ['inventario', 'reportes'] },
  { id: 'facturar', texto: 'Facturar y registrar ventas', icono: 'receipt', soluciones: ['escritorio', 'medida'], funciones: ['facturacion', 'pos'] },
  { id: 'clientes', texto: 'Gestionar clientes o usuarios', icono: 'user', soluciones: ['medida'], funciones: ['crm', 'roles'] },
  { id: 'reportes', texto: 'Ver reportes y estadísticas', icono: 'blocks', soluciones: ['medida'], funciones: ['reportes'] },
  { id: 'automatizar', texto: 'Automatizar tareas manuales', icono: 'cpu', soluciones: ['medida'], funciones: ['integraciones', 'notificaciones'] },
  { id: 'app', texto: 'Tener una app para mis clientes', icono: 'smartphone', soluciones: ['movil'], funciones: ['android', 'ios', 'push'] },
  { id: 'equipos', texto: 'Mejorar equipos, red o seguridad', icono: 'wrench', soluciones: ['soporte'], funciones: ['mantenimiento', 'redes', 'auditoria'] },
];

export const SOLUCIONES: (Opcion & { funciones: Opcion[]; stack: string[] })[] = [
  {
    id: 'web',
    texto: 'Página web',
    detalle: 'Presencia profesional, información y contacto',
    icono: 'globe',
    stack: ['Astro', 'React'],
    funciones: [
      { id: 'diseno', texto: 'Diseño a medida de tu marca' },
      { id: 'contacto', texto: 'Formulario y botón de WhatsApp' },
      { id: 'seo', texto: 'Posicionamiento en Google (SEO)' },
      { id: 'blog', texto: 'Blog o noticias' },
      { id: 'galeria', texto: 'Galería o portafolio' },
      { id: 'dominio', texto: 'Dominio y hosting' },
    ],
  },
  {
    id: 'ecommerce',
    texto: 'Tienda en línea',
    detalle: 'Catálogo, carrito y pagos',
    icono: 'cart',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    funciones: [
      { id: 'catalogo', texto: 'Catálogo de productos' },
      { id: 'carrito', texto: 'Carrito de compras' },
      { id: 'pagos', texto: 'Pagos en línea' },
      { id: 'envios', texto: 'Envíos o retiro en local' },
      { id: 'cupones', texto: 'Cupones y promociones' },
      { id: 'panel', texto: 'Panel para administrar pedidos' },
    ],
  },
  {
    id: 'medida',
    texto: 'Sistema a medida',
    detalle: 'Software web para gestionar tu negocio',
    icono: 'blocks',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    funciones: [
      { id: 'roles', texto: 'Usuarios con roles y permisos' },
      { id: 'inventario', texto: 'Inventario' },
      { id: 'facturacion', texto: 'Facturación' },
      { id: 'crm', texto: 'Gestión de clientes (CRM)' },
      { id: 'agenda', texto: 'Agenda de citas' },
      { id: 'reportes', texto: 'Reportes y dashboards' },
      { id: 'notificaciones', texto: 'Notificaciones por correo o WhatsApp' },
      { id: 'integraciones', texto: 'Integración con otros sistemas' },
    ],
  },
  {
    id: 'movil',
    texto: 'Aplicación móvil',
    detalle: 'App para Android y/o iPhone',
    icono: 'smartphone',
    stack: ['Kotlin', 'Swift'],
    funciones: [
      { id: 'android', texto: 'Android' },
      { id: 'ios', texto: 'iPhone (iOS)' },
      { id: 'push', texto: 'Notificaciones push' },
      { id: 'login', texto: 'Registro e inicio de sesión' },
      { id: 'mapa', texto: 'Mapa o geolocalización' },
      { id: 'offline', texto: 'Funciona sin internet' },
    ],
  },
  {
    id: 'escritorio',
    texto: 'Software de escritorio',
    detalle: 'Programa para Windows o Linux',
    icono: 'monitor',
    stack: ['C#', 'Java', 'SQL Server'],
    funciones: [
      { id: 'pos', texto: 'Punto de venta' },
      { id: 'tickets', texto: 'Impresión de tickets o facturas' },
      { id: 'red', texto: 'Varias computadoras en red' },
      { id: 'sin-internet', texto: 'Trabajo sin internet' },
      { id: 'respaldos', texto: 'Respaldos automáticos' },
    ],
  },
  {
    id: 'soporte',
    texto: 'Soporte e infraestructura',
    detalle: 'Equipos, redes, sistemas y seguridad',
    icono: 'wrench',
    stack: ['Linux', 'Docker', 'Redes'],
    funciones: [
      { id: 'mantenimiento', texto: 'Mantenimiento de computadoras' },
      { id: 'redes', texto: 'Redes y Wi-Fi' },
      { id: 'sistemas-op', texto: 'Instalación de Windows o Linux' },
      { id: 'servidores', texto: 'Servidores' },
      { id: 'auditoria', texto: 'Auditoría de seguridad' },
    ],
  },
];

export const USUARIOS: Opcion[] = [
  { id: 'solo', valor: '1', texto: 'Solo yo' },
  { id: 'pequeno', valor: '2–5', texto: 'Un equipo pequeño' },
  { id: 'mediano', valor: '6–20', texto: 'Un equipo mediano' },
  { id: 'grande', valor: '20+', texto: 'Una organización grande' },
  { id: 'publico', valor: '∞', texto: 'Mis clientes, público en general' },
];

export const EXISTENTE: Opcion[] = [
  { id: 'logo', texto: 'Logo o identidad de marca' },
  { id: 'dominio', texto: 'Dominio (.com, .ec…)' },
  { id: 'web-actual', texto: 'Una página web actual' },
  { id: 'sistema-actual', texto: 'Un sistema que quiero mejorar' },
  { id: 'excel', texto: 'Llevo todo en Excel o papel' },
  { id: 'redes', texto: 'Redes sociales activas' },
  { id: 'nada', texto: 'Empiezo desde cero' },
];

export const PLAZOS: Opcion[] = [
  { id: 'urgente', valor: '< 1 mes', texto: 'Lo antes posible' },
  { id: 'medio', valor: '1–3 meses', texto: 'En los próximos meses' },
  { id: 'largo', valor: '3+ meses', texto: 'Lo estoy planificando' },
  { id: 'flexible', valor: 'flexible', texto: 'Sin prisa, quiero hacerlo bien' },
];

export const PRESUPUESTOS_COTIZADOR: Opcion[] = PRESUPUESTOS.filter((p) => p !== 'Por definir').map((p) => ({
  id: p,
  texto: p,
}));

export type Paso = {
  id: string;
  tipo: 'nombre' | 'unica' | 'multiple' | 'soluciones' | 'funciones' | 'presupuesto' | 'extras';
  titulo: string;
  ayuda: string;
  panel: string;
  opciones?: Opcion[];
  requerido?: boolean;
  omitible?: boolean;
};

// {nombre} se reemplaza por el nombre del cliente.
export const PASOS: Paso[] = [
  { id: 'nombre', tipo: 'nombre', titulo: 'Para empezar, ¿cómo te llamas?', ayuda: 'Así sabremos cómo dirigirnos a ti.', panel: 'Conozcámonos', requerido: true },
  { id: 'negocio', tipo: 'unica', titulo: '{nombre}, ¿qué tipo de negocio tienes?', ayuda: 'Elige el que más se parezca al tuyo.', panel: 'Tu negocio', opciones: NEGOCIOS, requerido: true },
  { id: 'objetivos', tipo: 'multiple', titulo: '¿Qué te gustaría lograr?', ayuda: 'Puedes elegir varios. Marcamos lo más común en tu rubro.', panel: 'Tus objetivos', opciones: OBJETIVOS, requerido: true },
  { id: 'soluciones', tipo: 'soluciones', titulo: 'Esto es lo que te recomendamos', ayuda: 'Puedes aceptar la recomendación o elegir otra combinación.', panel: 'La solución', opciones: SOLUCIONES, requerido: true },
  { id: 'funciones', tipo: 'funciones', titulo: '¿Qué funciones no pueden faltar?', ayuda: 'Ya marcamos las que suelen necesitarse. Ajusta lo que quieras.', panel: 'Funciones', omitible: true },
  { id: 'usuarios', tipo: 'unica', titulo: '¿Quiénes lo van a usar?', ayuda: 'Nos ayuda a dimensionar el sistema y los permisos.', panel: 'Usuarios', opciones: USUARIOS, omitible: true },
  { id: 'existente', tipo: 'multiple', titulo: '¿Con qué cuentas actualmente?', ayuda: 'Aprovechamos lo que ya tienes para ahorrar tiempo y dinero.', panel: 'Punto de partida', opciones: EXISTENTE, omitible: true },
  { id: 'plazo', tipo: 'unica', titulo: '¿Para cuándo lo necesitas?', ayuda: 'Una idea aproximada es suficiente.', panel: 'Tiempos', opciones: PLAZOS, omitible: true },
  { id: 'presupuesto', tipo: 'presupuesto', titulo: '¿Cuánto te gustaría invertir?', ayuda: 'Es una referencia para proponerte la mejor opción dentro de tu alcance.', panel: 'Inversión', opciones: PRESUPUESTOS_COTIZADOR, omitible: true },
  { id: 'extras', tipo: 'extras', titulo: '¿Algo más que debamos saber?', ayuda: 'Todo es opcional, pero nos ayuda a afinar la proforma.', panel: 'Detalles', omitible: true },
];
