import { PRESUPUESTOS } from './site';

export type Opcion = {
  id: string;
  texto: string;
  detalle?: string;
  icono?: string;
};

export const NEGOCIOS: (Opcion & { sugiere: string[] })[] = [
  { id: 'comercio', texto: 'Tienda o comercio', detalle: 'Venta de productos', icono: 'cart', sugiere: ['vender', 'inventario', 'facturar'] },
  { id: 'restaurante', texto: 'Restaurante o alimentos', detalle: 'Comida, bebidas, delivery', icono: 'receipt', sugiere: ['pedidos', 'visibilidad', 'facturar'] },
  { id: 'salud', texto: 'Salud', detalle: 'Consultorio, clínica, farmacia', icono: 'lifebuoy', sugiere: ['citas', 'clientes', 'reportes'] },
  { id: 'educacion', texto: 'Educación', detalle: 'Colegio, academia, universidad', icono: 'blocks', sugiere: ['clientes', 'reportes', 'automatizar'] },
  { id: 'servicios', texto: 'Servicios profesionales', detalle: 'Abogados, contadores, talleres', icono: 'user', sugiere: ['visibilidad', 'citas', 'clientes'] },
  { id: 'gobierno', texto: 'Institución pública', detalle: 'GAD, junta, organización', icono: 'shield', sugiere: ['visibilidad', 'automatizar', 'reportes'] },
  { id: 'industria', texto: 'Industria o agro', detalle: 'Producción, logística, campo', icono: 'cpu', sugiere: ['inventario', 'reportes', 'automatizar'] },
  { id: 'otro', texto: 'Otro tipo de negocio', detalle: 'Cuéntanos en el último paso', icono: 'messages', sugiere: [] },
];

export const OBJETIVOS: (Opcion & { soluciones: string[]; funciones: string[] })[] = [
  { id: 'visibilidad', texto: 'Darme a conocer en internet', soluciones: ['web'], funciones: ['diseno', 'seo', 'contacto'] },
  { id: 'vender', texto: 'Vender en línea', soluciones: ['ecommerce'], funciones: ['catalogo', 'carrito', 'pagos'] },
  { id: 'pedidos', texto: 'Recibir pedidos o reservas', soluciones: ['web', 'medida'], funciones: ['contacto', 'notificaciones'] },
  { id: 'citas', texto: 'Agendar citas o turnos', soluciones: ['medida', 'movil'], funciones: ['agenda', 'notificaciones'] },
  { id: 'inventario', texto: 'Controlar inventario', soluciones: ['medida', 'escritorio'], funciones: ['inventario', 'reportes'] },
  { id: 'facturar', texto: 'Facturar y registrar ventas', soluciones: ['escritorio', 'medida'], funciones: ['facturacion', 'pos'] },
  { id: 'clientes', texto: 'Gestionar clientes o usuarios', soluciones: ['medida'], funciones: ['crm', 'roles'] },
  { id: 'reportes', texto: 'Ver reportes y estadísticas', soluciones: ['medida'], funciones: ['reportes'] },
  { id: 'automatizar', texto: 'Automatizar tareas manuales', soluciones: ['medida'], funciones: ['integraciones', 'notificaciones'] },
  { id: 'app', texto: 'Tener una app para mis clientes', soluciones: ['movil'], funciones: ['android', 'ios', 'push'] },
  { id: 'equipos', texto: 'Mejorar equipos, red o seguridad', soluciones: ['soporte'], funciones: ['mantenimiento', 'redes', 'auditoria'] },
];

export const SOLUCIONES: (Opcion & { funciones: Opcion[] })[] = [
  {
    id: 'web',
    texto: 'Página web',
    detalle: 'Presencia profesional, información y contacto',
    icono: 'globe',
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
    detalle: 'App para Android y/o iOS',
    icono: 'smartphone',
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
  { id: 'solo', texto: 'Solo yo' },
  { id: 'pequeno', texto: 'De 2 a 5 personas' },
  { id: 'mediano', texto: 'De 6 a 20 personas' },
  { id: 'grande', texto: 'Más de 20 personas' },
  { id: 'publico', texto: 'Mis clientes (público en general)' },
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
  { id: 'urgente', texto: 'Lo antes posible', detalle: 'Menos de 1 mes' },
  { id: 'medio', texto: 'En 1 a 3 meses' },
  { id: 'largo', texto: 'En más de 3 meses' },
  { id: 'flexible', texto: 'Sin prisa', detalle: 'Prefiero hacerlo bien' },
];

export const PRESUPUESTOS_COTIZADOR: Opcion[] = [
  ...PRESUPUESTOS.filter((p) => p !== 'Por definir').map((p) => ({ id: p, texto: p })),
  { id: 'asesoria', texto: 'No sé, necesito asesoría' },
];

export type Paso = {
  id: string;
  titulo: string;
  ayuda: string;
  tipo: 'unica' | 'multiple' | 'funciones' | 'contacto' | 'revision';
  opciones?: Opcion[];
  requerido?: boolean;
  etiqueta: string;
};

export const PASOS: Paso[] = [
  { id: 'negocio', etiqueta: 'negocio', titulo: '¿Qué tipo de negocio u organización tienes?', ayuda: 'Así entendemos tu contexto y te sugerimos lo que suele funcionar mejor.', tipo: 'unica', opciones: NEGOCIOS, requerido: true },
  { id: 'objetivos', etiqueta: 'objetivos', titulo: '¿Qué quieres lograr con la tecnología?', ayuda: 'Elige todo lo que aplique. Marcamos con «Sugerido» lo más común en tu tipo de negocio.', tipo: 'multiple', opciones: OBJETIVOS, requerido: true },
  { id: 'soluciones', etiqueta: 'solucion', titulo: '¿Qué tipo de solución te imaginas?', ayuda: 'Te recomendamos opciones según tus objetivos. Puedes elegir más de una.', tipo: 'multiple', opciones: SOLUCIONES, requerido: true },
  { id: 'funciones', etiqueta: 'funciones', titulo: '¿Qué funciones debería tener?', ayuda: 'Si no estás seguro, usa las sugeridas. Lo afinamos juntos después.', tipo: 'funciones' },
  { id: 'usuarios', etiqueta: 'usuarios', titulo: '¿Quiénes lo van a usar?', ayuda: 'Nos ayuda a dimensionar el sistema y los permisos.', tipo: 'unica', opciones: USUARIOS },
  { id: 'existente', etiqueta: 'existente', titulo: '¿Con qué cuentas actualmente?', ayuda: 'Aprovechamos lo que ya tienes para ahorrar tiempo y dinero.', tipo: 'multiple', opciones: EXISTENTE },
  { id: 'plazo', etiqueta: 'plazo', titulo: '¿Para cuándo lo necesitas?', ayuda: 'Una fecha aproximada es suficiente.', tipo: 'unica', opciones: PLAZOS },
  { id: 'presupuesto', etiqueta: 'presupuesto', titulo: '¿Tienes un presupuesto aproximado?', ayuda: 'Es opcional. Sirve para proponerte la mejor solución dentro de tu alcance.', tipo: 'unica', opciones: PRESUPUESTOS_COTIZADOR },
  { id: 'contacto', etiqueta: 'contacto', titulo: 'Por último, cuéntanos de ti', ayuda: 'Solo tu nombre es obligatorio.', tipo: 'contacto' },
  { id: 'revision', etiqueta: 'revision', titulo: 'Revisa tu solicitud', ayuda: 'Este es el mensaje que nos llegará por WhatsApp. Puedes volver a cualquier paso para cambiarlo.', tipo: 'revision' },
];
