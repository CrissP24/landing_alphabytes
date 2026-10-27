export const SITE = {
  nombre: 'AlphaBytes',
  titulo: 'AlphaBytes | Desarrollo de Software, Web, Apps y Soporte Técnico',
  descripcion:
    'Desarrollo web, aplicaciones móviles, software a medida, auditoría informática y mantenimiento de computadoras en Jipijapa, Manabí, Ecuador. Cotiza gratis.',
  whatsapp: '593988407467',
  whatsappVisible: '+593 98 840 7467',
  correo: 'pincaycriss29@gmail.com',
  asuntoCorreo: 'Consulta desde la web AlphaBytes',
  ciudad: 'Jipijapa',
  provincia: 'Manabí',
  pais: 'Ecuador',
  horario: '9:00 a.m. – 6:00 p.m.',
  horarioSchema: 'Mo-Su 09:00-18:00',
  github: 'https://github.com/crissp24',
  aniosExperiencia: '',
};

// Deja en '' las redes que no tengas: no se mostrarán.
export const REDES = {
  github: SITE.github,
  facebook: '',
  instagram: '',
  linkedin: '',
  tiktok: '',
};

export const MENSAJES: Record<string, string> = {
  general: 'Hola AlphaBytes 👋, vi su página web y quisiera información sobre sus servicios.',
  web: 'Hola AlphaBytes, me interesa crear una página web / sitio para mi negocio. ¿Podemos conversar?',
  movil: 'Hola AlphaBytes, quiero desarrollar una aplicación móvil (Android / iOS). ¿Me pueden asesorar?',
  escritorio: 'Hola AlphaBytes, necesito un software de escritorio para mi empresa. ¿Podemos agendar una reunión?',
  medida: 'Hola AlphaBytes, necesito un sistema a medida (inventario, facturación, gestión, etc.). Quisiera una cotización.',
  auditoria: 'Hola AlphaBytes, me interesa una auditoría informática para mi empresa o sistema.',
  mantenimiento: 'Hola AlphaBytes, necesito mantenimiento o soporte técnico para mis computadoras.',
  ecommerce: 'Hola AlphaBytes, quiero una tienda en línea para vender mis productos. ¿Qué opciones tienen?',
  redes: 'Hola AlphaBytes, necesito ayuda con la red / infraestructura de mi negocio u hogar.',
  sistemas: 'Hola AlphaBytes, necesito instalar o reparar el sistema operativo de mi equipo.',
  cotizacion: 'Hola AlphaBytes, quisiera una cotización para un proyecto.',
  proyecto: 'Hola AlphaBytes, vi su proyecto [NOMBRE] en su portafolio y quiero algo similar.',
  demos: 'Hola AlphaBytes, me gustaría ver una demo de sus proyectos. ¿Cuándo podemos coordinar?',
  demo: 'Hola AlphaBytes, me gustaría ver una demo del proyecto [NOMBRE]. ¿Cuándo podemos coordinar?',
};

export const waLink = (mensaje: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export type Servicio = {
  clave: string;
  icono: string;
  titulo: string;
  resumen: string;
  puntos: string[];
  destacado?: string;
};

export const SERVICIOS_SOFTWARE: Servicio[] = [
  {
    clave: 'web',
    icono: 'globe',
    titulo: 'Desarrollo Web',
    resumen: 'Tu negocio visible en internet las 24 horas, con un sitio rápido que convierte visitas en clientes.',
    puntos: ['Landing pages y sitios corporativos', 'Sistemas web y paneles', 'SEO básico para aparecer en Google', 'Hosting y dominio configurados'],
    destacado: 'Más solicitado',
  },
  {
    clave: 'movil',
    icono: 'smartphone',
    titulo: 'Aplicaciones Móviles',
    resumen: 'Lleva tu servicio al bolsillo de tus clientes con apps nativas, estables y fáciles de usar.',
    puntos: ['Android nativo con Kotlin', 'iOS nativo con Swift', 'Integración con APIs y servicios', 'Publicación en Play Store y App Store'],
  },
  {
    clave: 'escritorio',
    icono: 'monitor',
    titulo: 'Software de Escritorio',
    resumen: 'Programas robustos que funcionan en tus equipos, incluso sin conexión a internet.',
    puntos: ['C#, Java, C++ y Visual Basic', 'Aplicaciones para Windows y Linux', 'Punto de venta e inventario', 'Facturación y reportes'],
  },
  {
    clave: 'medida',
    icono: 'blocks',
    titulo: 'Sistemas a Medida',
    resumen: 'Software hecho para tu forma de trabajar: menos tareas manuales, más control de tu negocio.',
    puntos: ['ERP y CRM', 'Gestión de clientes y reportes', 'Automatización de procesos', 'Diseño de bases de datos'],
  },
  {
    clave: 'ecommerce',
    icono: 'cart',
    titulo: 'Tiendas en Línea',
    resumen: 'Vende tus productos todos los días, sin depender de un local ni de un horario.',
    puntos: ['Catálogo de productos', 'Carrito de compras', 'Pagos en línea', 'Panel de administración'],
  },
  {
    clave: 'general',
    icono: 'messages',
    titulo: 'Consultoría y Soporte Continuo',
    resumen: 'Un aliado técnico que mantiene tus sistemas al día mientras tú te enfocas en vender.',
    puntos: ['Planes de mantenimiento de sistemas', 'Actualizaciones y mejoras', 'Hosting administrado', 'Asesoría tecnológica'],
  },
];

export const SERVICIOS_TI: Servicio[] = [
  {
    clave: 'auditoria',
    icono: 'shield',
    titulo: 'Auditoría Informática',
    resumen: 'Descubre los riesgos de tus sistemas antes de que se conviertan en pérdidas.',
    puntos: ['Auditoría de sistemas y software', 'Seguridad y vulnerabilidades', 'Infraestructura y bases de datos', 'Informe con hallazgos y recomendaciones'],
  },
  {
    clave: 'mantenimiento',
    icono: 'wrench',
    titulo: 'Mantenimiento de PC',
    resumen: 'Equipos rápidos y sin fallas para que tu trabajo no se detenga.',
    puntos: ['Mantenimiento preventivo y correctivo', 'Limpieza física y optimización', 'Eliminación de virus y respaldos', 'Armado y mejora de equipos'],
  },
  {
    clave: 'redes',
    icono: 'network',
    titulo: 'Redes e Infraestructura',
    resumen: 'Conexión estable en todo tu espacio y servidores listos para crecer contigo.',
    puntos: ['Redes cableadas y Wi-Fi', 'Routers, switches y cableado estructurado', 'Servidores Linux', 'Docker y despliegue de aplicaciones'],
  },
  {
    clave: 'sistemas',
    icono: 'cpu',
    titulo: 'Sistemas Operativos',
    resumen: 'Tu equipo funcionando como nuevo, con el sistema correcto y bien configurado.',
    puntos: ['Instalación de Windows y Linux', 'Controladores y actualizaciones', 'Cuentas de usuario', 'Recuperación del sistema'],
  },
];

export const ACCESOS_RAPIDOS = [
  { clave: 'web', texto: 'Quiero una web' },
  { clave: 'movil', texto: 'Quiero una app' },
  { clave: 'mantenimiento', texto: 'Mantenimiento de PC' },
  { clave: 'redes', texto: 'Redes' },
  { clave: 'sistemas', texto: 'Sistemas operativos' },
  { clave: 'auditoria', texto: 'Auditoría' },
  { clave: 'general', texto: 'Otra consulta' },
];

export const PRESUPUESTOS = ['Por definir', 'Menos de $300', '$300 – $800', '$800 – $2.000', 'Más de $2.000'];

export const PROCESO = [
  { titulo: 'Conversamos', texto: 'Escuchamos tu idea y entendemos lo que necesitas. Sin costo.' },
  { titulo: 'Propuesta y cotización', texto: 'Recibes un plan claro con alcance, tiempos y precio.' },
  { titulo: 'Diseño y desarrollo', texto: 'Construimos tu proyecto y te mostramos avances constantes.' },
  { titulo: 'Pruebas y entrega', texto: 'Probamos todo a fondo y lo dejamos funcionando.' },
  { titulo: 'Soporte y mantenimiento', texto: 'Seguimos contigo para ajustes, mejoras y dudas.' },
];

export type Tecnologia = { nombre: string; icono?: string; sigla?: string };

export const TECNOLOGIAS: { categoria: string; items: Tecnologia[] }[] = [
  {
    categoria: 'Frontend',
    items: [
      { nombre: 'HTML', icono: 'siHtml5' },
      { nombre: 'CSS', icono: 'siCss' },
      { nombre: 'JavaScript', icono: 'siJavascript' },
      { nombre: 'React', icono: 'siReact' },
      { nombre: 'Astro', icono: 'siAstro' },
    ],
  },
  {
    categoria: 'Backend',
    items: [
      { nombre: 'Node.js', icono: 'siNodedotjs' },
      { nombre: 'Express', icono: 'siExpress' },
      { nombre: 'PHP', icono: 'siPhp' },
      { nombre: 'Python', icono: 'siPython' },
      { nombre: 'Java', icono: 'siOpenjdk' },
      { nombre: 'C#', sigla: 'C#' },
      { nombre: 'C++', icono: 'siCplusplus' },
      { nombre: 'Visual Basic', sigla: 'VB' },
    ],
  },
  {
    categoria: 'Móvil',
    items: [
      { nombre: 'Kotlin · Android', icono: 'siKotlin' },
      { nombre: 'Swift · iOS', icono: 'siSwift' },
    ],
  },
  {
    categoria: 'Bases de datos',
    items: [
      { nombre: 'PostgreSQL', icono: 'siPostgresql' },
      { nombre: 'MySQL', icono: 'siMysql' },
      { nombre: 'MariaDB', icono: 'siMariadb' },
      { nombre: 'SQL Server', sigla: 'SQL' },
      { nombre: 'MongoDB', icono: 'siMongodb' },
    ],
  },
  {
    categoria: 'Infraestructura y herramientas',
    items: [
      { nombre: 'Docker', icono: 'siDocker' },
      { nombre: 'Linux', icono: 'siLinux' },
      { nombre: 'XAMPP', icono: 'siXampp' },
      { nombre: 'Git', icono: 'siGit' },
      { nombre: 'GitHub', icono: 'siGithub' },
    ],
  },
];

export const TECNOLOGIAS_HERO = ['React', 'Astro', 'Node.js', 'Python', 'Java', 'C#', 'Kotlin', 'Swift', 'PostgreSQL', 'Docker'];

export const VENTAJAS = [
  { icono: 'user', titulo: 'Atención directa y personalizada', texto: 'Hablas con quien desarrolla tu proyecto. Sin intermediarios ni respuestas automáticas.' },
  { icono: 'receipt', titulo: 'Precios justos y cotización clara', texto: 'Sabes desde el inicio qué incluye tu proyecto y cuánto cuesta. Sin sorpresas.' },
  { icono: 'code', titulo: 'Tecnología moderna y código de calidad', texto: 'Software ordenado, seguro y fácil de mantener, pensado para crecer con tu negocio.' },
  { icono: 'lifebuoy', titulo: 'Soporte después de la entrega', texto: 'No desaparecemos al terminar. Te acompañamos con ajustes, dudas y mejoras.' },
];

// Agrega aquí testimonios reales: { nombre: '', cargo: '', texto: '' }
export const TESTIMONIOS: { nombre: string; cargo: string; texto: string }[] = [];

// Las preguntas con respuesta vacía no se muestran.
export const PREGUNTAS = [
  {
    pregunta: '¿Cuánto cuesta una página web?',
    respuesta:
      'Depende del alcance: no cuesta lo mismo una landing page que una tienda en línea o un sistema web. Escríbenos por WhatsApp, cuéntanos tu idea y te enviamos una cotización gratuita y detallada.',
  },
  {
    pregunta: '¿Cuánto tiempo toma un proyecto?',
    respuesta:
      'Una landing page puede estar lista en pocos días; una app o un sistema a medida toma algunas semanas. En la propuesta te damos un cronograma claro y te mostramos avances durante todo el proceso.',
  },
  {
    pregunta: '¿Trabajan con clientes de otras ciudades?',
    respuesta:
      'Sí. Estamos en Jipijapa y atendemos de forma remota en todo Ecuador y otros países. El soporte presencial se coordina por WhatsApp.',
  },
  {
    pregunta: '¿Ofrecen soporte después de la entrega?',
    respuesta:
      'Sí. Te acompañamos con correcciones, dudas y mejoras, y también ofrecemos planes de mantenimiento para que tu sistema siempre esté al día.',
  },
  { pregunta: '¿El mantenimiento de PC es a domicilio?', respuesta: '' },
  { pregunta: '¿Qué formas de pago aceptan?', respuesta: '' },
];
