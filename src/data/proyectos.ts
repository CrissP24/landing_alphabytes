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
export const PROYECTOS: Proyecto[] = [
  {
    id: 'pajan',
    nombre: 'Sistema de Gestión Municipal · GAD Paján',
    categoria: 'Gobierno',
    resumen: 'Portal web y panel administrativo para un municipio, con noticias, transparencia y rendición de cuentas.',
    descripcion:
      'Sitio institucional con su propio panel de administración. Cada departamento del municipio publica y gestiona su información sin depender de un programador.',
    paraQuien: 'Municipios y GAD que necesitan cumplir con la LOTAIP y comunicarse mejor con la ciudadanía.',
    incluye: [
      'Roles por departamento: TIC, Comunicación, Participación Ciudadana y Transparencia',
      'Noticias, comunicados y eventos administrables',
      'Rendición de cuentas por fases y años',
      'Documentos LOTAIP organizados por literales',
      'Registro de presidentes barriales',
      'Gestor de archivos, logs de auditoría y panel de accesibilidad',
    ],
    tecnologias: ['React', 'Express', 'PostgreSQL', 'Sequelize', 'JWT', 'Bootstrap'],
    demo: 'https://pajan-web-oeeb.vercel.app',
    codigo: 'https://github.com/crissp24/pajan_web',
  },
  {
    id: 'membrillal',
    nombre: 'Portal GAD Parroquial de Membrillal',
    categoria: 'Gobierno',
    resumen: 'Portal ciudadano con trámites en línea, seguimiento de solicitudes, noticias y transparencia.',
    descripcion:
      'Plataforma para una parroquia rural: los ciudadanos solicitan certificados y permisos desde casa y siguen su estado, y el personal lo gestiona todo desde un panel.',
    paraQuien: 'Juntas parroquiales y gobiernos locales que quieren digitalizar trámites y evitar filas.',
    incluye: [
      'Catálogo de trámites con costo y tiempo estimado',
      'Solicitud y seguimiento de trámites en línea',
      'Noticias, eventos y sección de turismo',
      'Documentos de transparencia',
      'Panel administrativo con usuarios, permisos y reportes',
    ],
    tecnologias: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    demo: 'https://gadmembrillal.vercel.app',
    codigo: 'https://github.com/crissp24/membrillal-admin-portal-26',
  },
  {
    id: 'candyhoppe',
    nombre: 'Candy Hoppe · Gestión de Consultorio Médico',
    categoria: 'Salud',
    resumen: 'Pacientes, citas, historias clínicas con CIE-10 y certificados médicos en PDF, todo en un solo sistema.',
    descripcion:
      'Sistema para consultorios con tres perfiles: administrador, doctor y paciente. El doctor atiende y registra; el paciente agenda citas y descarga sus certificados.',
    paraQuien: 'Consultorios y clínicas pequeñas que todavía llevan historias clínicas en papel o en Excel.',
    incluye: [
      'Registro de pacientes con antecedentes, alergias y enfermedades crónicas',
      'Agenda de citas por doctor con estados (pendiente, confirmada, completada)',
      'Historia clínica con signos vitales y diagnósticos CIE-10',
      'Certificados médicos en PDF: reposo, incapacidad y constancia',
      'Notificaciones y panel de estadísticas',
    ],
    tecnologias: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    demo: 'https://candyhoppe.vercel.app',
    codigo: 'https://github.com/crissp24/clinica-joya',
  },
  {
    id: 'jipijapa-activa',
    nombre: 'Jipijapa Ciudad Activa',
    categoria: 'Gobierno',
    resumen: 'App de participación ciudadana: reporta incidentes en el mapa y sigue los eventos de tu ciudad. Web y Android.',
    descripcion:
      'Los ciudadanos reportan problemas de su barrio con ubicación en el mapa y los departamentos municipales los atienden. También se publica en Android como APK.',
    paraQuien: 'Municipios que quieren recibir reportes ordenados y mostrar a la ciudadanía qué se está atendiendo.',
    incluye: [
      'Reporte de incidentes con ubicación en mapa',
      'Eventos y actividades comunitarias',
      'Roles: ciudadano, administrador y personal de departamento',
      'Dashboard con estadísticas en tiempo real',
      'Versión Android generada con Capacitor',
    ],
    tecnologias: ['React', 'TypeScript', 'Supabase', 'Mapbox', 'Capacitor', 'Tailwind CSS'],
    demo: 'https://participacion-ciudadana-mauve.vercel.app',
    codigo: 'https://github.com/crissp24/jipijapa-ciudad-activa',
  },
  {
    id: 'salango',
    nombre: 'Salango Travel Mate',
    categoria: 'Comercio y turismo',
    resumen: 'Reservas de paquetes turísticos con disponibilidad en tiempo real y panel para la asociación de turismo.',
    descripcion:
      'Web de turismo para Salango, Ecuador. El visitante elige un paquete, revisa las fechas libres y reserva; el administrador controla cupos, categorías, reservas e ingresos.',
    paraQuien: 'Operadores y asociaciones de turismo que hoy reciben reservas por mensajes y las anotan a mano.',
    incluye: [
      'Catálogo de paquetes por categoría',
      'Verificación de fechas y capacidad antes de reservar',
      'Perfil del cliente con historial de reservas',
      'CRUD de paquetes, categorías, usuarios y reservas',
      'Estadísticas de reservas, usuarios e ingresos',
    ],
    tecnologias: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    demo: 'https://salango-app.vercel.app',
    codigo: 'https://github.com/crissp24/salango-travel-mate',
  },
  {
    id: 'terranalytics',
    nombre: 'TerrAnalytics · Encuestas de Campo',
    categoria: 'Datos e IA',
    resumen: 'App para levantar encuestas en territorio por sectores y encuestadores, con datos centralizados en la nube.',
    descripcion:
      'Herramienta para estudios de campo: el cuestionario, los sectores y los encuestadores ya vienen cargados; cada respuesta se guarda en la base de datos al momento y el supervisor monitorea el avance.',
    paraQuien: 'Consultoras, GAD y equipos de investigación que hacen encuestas con varios encuestadores a la vez.',
    incluye: [
      'Cuestionario con filtros y preguntas configurables',
      'Asignación de sectores y tareas por encuestador',
      'Roles de administrador y de supervisión',
      'Respuestas almacenadas en PostgreSQL en tiempo real',
    ],
    tecnologias: ['React', 'Vite', 'Supabase', 'PostgreSQL'],
    demo: 'https://encuestas-montecristi.vercel.app',
    codigo: 'https://github.com/crissp24/encuestas_montecristi',
  },
  {
    id: 'siniestros',
    nombre: 'Siniestros EC · Dashboard de Datos',
    categoria: 'Datos e IA',
    resumen: 'Tablero interactivo con los siniestros de tránsito de Ecuador por mes, causa, provincia y víctimas.',
    descripcion:
      'Dashboard que convierte los datos abiertos del INEC y la ANT en gráficos fáciles de leer, con comparación entre años y serie histórica.',
    paraQuien: 'Instituciones, investigadores y medios que necesitan presentar datos de forma clara.',
    incluye: [
      'Resumen general con indicadores clave',
      'Análisis por mes, clase de vehículo, causa y víctimas',
      'Comparativo entre años y serie histórica',
      'Distribución por provincia',
    ],
    tecnologias: ['React', 'Vite', 'JavaScript'],
    demo: 'https://mineria-three.vercel.app',
    codigo: 'https://github.com/crissp24/mineria',
  },
  {
    id: 'pasantias',
    nombre: 'Sistema de Gestión de Pasantías',
    categoria: 'Educación',
    resumen: 'Controla prácticas estudiantiles: horas, actividades, informes y certificados PDF automáticos.',
    descripcion:
      'Aplicación para instituciones educativas que coordinan pasantías: cada estudiante registra sus actividades, el docente revisa los informes y el sistema emite el certificado al completar las horas.',
    paraQuien: 'Universidades, institutos y colegios técnicos con programas de prácticas o vinculación.',
    incluye: [
      'Roles: administrador, docente, estudiante y empresa',
      'Registro de actividades con suma automática de horas',
      'Informes con versiones y retroalimentación',
      'Certificados PDF generados automáticamente',
      'Respaldo y restauración de datos, y reportes en CSV y PDF',
    ],
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS', 'jsPDF'],
    demo: 'https://pasantias-rouge.vercel.app',
    codigo: 'https://github.com/crissp24/pasantias',
  },
  {
    id: 'catalina',
    nombre: 'Creciendo con Catalina · Catálogo y Ventas',
    categoria: 'Comercio y turismo',
    resumen: 'Catálogo en línea de útiles escolares con paneles para administrador y vendedor, y pedidos por WhatsApp.',
    descripcion:
      'Tienda tipo catálogo: el cliente filtra por categoría y marca y consulta por WhatsApp. El administrador gestiona productos, marcas y usuarios, y el vendedor sus ventas.',
    paraQuien: 'Negocios que quieren mostrar su inventario en internet y vender por WhatsApp.',
    incluye: [
      'Catálogo público con filtros por categoría y marca',
      'Roles: administrador, vendedor y comprador',
      'Gestión de productos, categorías, marcas y usuarios',
      'Botón de contacto directo por WhatsApp',
    ],
    tecnologias: ['React', 'TypeScript', 'SQLite', 'Tailwind CSS', 'Framer Motion'],
    demo: 'https://papeleria-three.vercel.app',
    codigo: 'https://github.com/crissp24/papeleria',
  },
  {
    id: 'mysimo',
    nombre: 'MySimo · Directorio Médico y Citas',
    categoria: 'Salud',
    resumen: 'Encuentra médicos por especialidad y ciudad, revisa su perfil y reserva tu cita en línea.',
    descripcion:
      'Plataforma de salud con frontend y API propia. Los pacientes buscan especialistas y agendan citas; los médicos tienen su perfil y su agenda.',
    paraQuien: 'Redes de médicos, clínicas y emprendimientos de salud digital.',
    incluye: [
      'Búsqueda por especialidad y ciudad',
      'Perfil del médico con experiencia y disponibilidad',
      'Reserva de citas en línea',
      'API REST con autenticación JWT',
    ],
    tecnologias: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    demo: 'https://mysimofrontend.vercel.app',
    codigo: 'https://github.com/crissp24/mysimofrontend',
  },
  {
    id: 'el-anegado',
    nombre: 'Centro Médico El Anegado',
    categoria: 'Salud',
    resumen: 'Sistema de pacientes con acceso por rol para administrador y doctores.',
    descripcion:
      'Plataforma para un centro médico rural: registro y seguimiento de pacientes con acceso separado para administración y personal médico.',
    paraQuien: 'Centros de salud que necesitan ordenar la información de sus pacientes.',
    incluye: [
      'Inicio de sesión por rol (administrador y doctor)',
      'Registro y consulta de pacientes',
      'Panel de seguimiento',
    ],
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://pacientes-sage.vercel.app',
    codigo: 'https://github.com/crissp24/health-pulse-analyzer',
  },
  {
    id: 'incidentflow',
    nombre: 'IncidentFlow · Gestión de Incidencias',
    categoria: 'Gestión empresarial',
    resumen: 'Mesa de ayuda para registrar, asignar y dar seguimiento a incidencias, con roles y prioridades.',
    descripcion:
      'Sistema tipo help desk: los empleados reportan problemas y los moderadores y administradores los asignan y les dan seguimiento hasta cerrarlos.',
    paraQuien: 'Empresas y áreas de TI que reciben reportes por correo o chat y pierden el control.',
    incluye: [
      'Roles: administrador, moderador y empleado',
      'Registro y seguimiento de incidencias',
      'Asignación y estados de cada caso',
      'Panel con resumen de la operación',
    ],
    tecnologias: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    demo: 'https://incidentes-one.vercel.app',
    codigo: 'https://github.com/crissp24/incidentflow-pro',
  },
  {
    id: 'citriflow',
    nombre: 'CitriFlow · Riego Inteligente',
    categoria: 'Datos e IA',
    resumen: 'Plataforma para monitorear y automatizar el riego de cultivos de cítricos con sensores.',
    descripcion:
      'Sitio y panel administrativo para un sistema de riego automatizado: muestra la humedad del suelo y el consumo de agua, y permite controlar el riego.',
    paraQuien: 'Productores agrícolas y proyectos de agricultura de precisión.',
    incluye: [
      'Monitoreo de humedad y consumo de agua',
      'Control automático del riego',
      'Acceso de administrador',
      'Sitio informativo con solicitud de demo',
    ],
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://citrus-flow-sim.vercel.app',
    codigo: 'https://github.com/crissp24/citrus-flow-sim',
  },
  {
    id: 'smartcity',
    nombre: 'SmartCity Jipijapa',
    categoria: 'Gobierno',
    resumen: 'Tablero de ciudad inteligente para servicios públicos: agua, energía y monitoreo en tiempo real.',
    descripcion:
      'Interfaz de una red de ciudad inteligente que reúne el estado de los servicios municipales en un solo lugar. El backend se desarrolla en un repositorio privado.',
    paraQuien: 'Municipios que quieren centralizar el monitoreo de sus servicios.',
    incluye: [
      'Estado de servicios: agua potable y energía',
      'Indicadores de ciudadanía y sostenibilidad',
      'Módulos de monitoreo conectados',
      'Acceso con usuario',
    ],
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    demo: 'https://smartcitycore.vercel.app',
  },
  {
    id: 'voxdev',
    nombre: 'VoxDev · Asistente de Programación por Voz',
    categoria: 'Datos e IA',
    resumen: 'Asistente con inteligencia artificial al que le hablas: responde con código resaltado y lo envía a VS Code.',
    descripcion:
      'Asistente virtual con voz y texto que usa Gemini. Muestra las respuestas en tiempo real, con código formateado, y opcionalmente las envía al editor por WebSocket.',
    paraQuien: 'Equipos de desarrollo, docentes de programación y proyectos que quieren integrar IA conversacional.',
    incluye: [
      'Conversación por voz con modo texto opcional',
      'Respuestas en streaming con Markdown y código resaltado',
      'Integración opcional con VS Code por WebSocket',
      'Robot animado y regreso automático a la pantalla principal por inactividad',
    ],
    tecnologias: ['React', 'Vite', 'Gemini API', 'Web Speech API', 'WebSocket'],
    demo: 'https://chatbot-robotica.vercel.app',
    codigo: 'https://github.com/crissp24/chatbot_rotica',
  },
  {
    id: 'syllabus',
    nombre: 'Gestión Académica UNESUM · Sílabos y Mallas',
    categoria: 'Educación',
    resumen: 'Plataforma para crear sílabos y mallas curriculares, y hacer seguimiento académico con reportes.',
    descripcion:
      'Sistema universitario dividido en frontend y API: los docentes crean sílabos que cumplen el formato institucional y la coordinación diseña y actualiza las mallas.',
    paraQuien: 'Universidades e institutos que gestionan sílabos y mallas en documentos sueltos.',
    incluye: [
      'Creación y edición de sílabos',
      'Diseño y actualización de mallas curriculares',
      'Reportes de seguimiento académico',
      'Registro, inicio de sesión y roles',
    ],
    tecnologias: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    demo: 'https://syllabus-frontend-gj45.vercel.app',
    codigo: 'https://github.com/crissp24/syllabus_frontend',
  },
  {
    id: 'distributivo',
    nombre: 'Distributivo Docente',
    categoria: 'Educación',
    resumen: 'API para cargar y organizar la distribución de carga docente desde archivos Excel y CSV.',
    descripcion:
      'Backend que importa hojas de cálculo con la carga horaria y la guarda ordenada en la base de datos para consultarla y reportarla.',
    paraQuien: 'Coordinaciones académicas que arman el distributivo docente cada período.',
    incluye: ['Importación de archivos Excel y CSV', 'Almacenamiento en PostgreSQL', 'API REST para consultas'],
    tecnologias: ['Node.js', 'Express', 'PostgreSQL'],
  },
  {
    id: 'mate-divertidas',
    nombre: 'Matemáticas Divertidas',
    categoria: 'Educación',
    resumen: 'Plataforma interactiva para que niños de 5 a 8 años aprendan matemáticas jugando.',
    descripcion:
      'Actividades y juegos matemáticos pensados para los primeros años de escuela, con una interfaz colorida y sencilla.',
    paraQuien: 'Escuelas, docentes y padres de familia.',
    incluye: ['Actividades interactivas por tema', 'Interfaz adaptada para niños', 'Funciona en computadora y tablet'],
    tecnologias: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    demo: 'https://matematicasdivertidas.vercel.app',
    codigo: 'https://github.com/crissp24/matematicasquince',
  },
  {
    id: 'mate-vr',
    nombre: 'Matemáticas en Realidad Virtual',
    categoria: 'Educación',
    resumen: 'Geometría, álgebra y cálculo en 3D para hacer las matemáticas más visuales.',
    descripcion:
      'Proyecto para la Unidad Educativa 15 de Octubre que usa realidad virtual y aumentada para que los estudiantes exploren figuras y conceptos en tres dimensiones.',
    paraQuien: 'Instituciones educativas que quieren innovar en el aula.',
    incluye: ['Figuras geométricas en 3D', 'Simulaciones de álgebra y cálculo', 'Experiencia inmersiva desde el navegador'],
    tecnologias: ['React', 'HTML', 'JavaScript', 'WebXR'],
    demo: 'https://ra-mate1.vercel.app',
    codigo: 'https://github.com/crissp24/RA_mate1',
  },
  {
    id: 'recursos-mate',
    nombre: 'Recursos Interactivos de Funciones',
    categoria: 'Educación',
    resumen: 'Infografía y diapositivas interactivas para enseñar funciones matemáticas.',
    descripcion:
      'Material didáctico web: conceptos, analogías y ejemplos de funciones, listo para proyectar en clase o estudiar desde el celular.',
    paraQuien: 'Docentes que quieren material digital propio para sus clases.',
    incluye: ['Infografía interactiva', 'Presentación de diapositivas web', 'Diseño adaptable a cualquier pantalla'],
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://infografiamate.vercel.app',
    codigo: 'https://github.com/crissp24/infografiamate',
  },
  {
    id: 'museo',
    nombre: 'Museo Virtual 3D de Jipijapa',
    categoria: 'Comercio y turismo',
    resumen: 'Recorrido virtual en 3D por un museo, con animaciones y vista en primera persona.',
    descripcion:
      'Experiencia web inmersiva que permite visitar el museo desde cualquier lugar, recorriendo las salas en primera persona.',
    paraQuien: 'Museos, centros culturales y proyectos de turismo.',
    incluye: ['Recorrido 3D en primera persona', 'Mapa interactivo del museo', 'Animaciones inmersivas', 'Diseño adaptable a distintos dispositivos'],
    tecnologias: ['React', 'Three.js', 'Vite'],
  },
  {
    id: 'radio',
    nombre: 'Radio Alfaro 96.1 FM · Plataforma de Gestión',
    categoria: 'Gestión empresarial',
    resumen: 'Sitio y sistema administrativo para una radio: programación, publicidad, patrocinios y noticias.',
    descripcion:
      'Plataforma para una estación de radio con panel para el administrador y para los oyentes registrados, que pueden comentar y seguir los programas.',
    paraQuien: 'Radios y medios de comunicación locales.',
    incluye: [
      'Gestión de programas y contenido multimedia',
      'Módulos de publicidad y patrocinios',
      'Noticias con comentarios de los oyentes',
      'Paneles para administrador y usuario, con estadísticas',
    ],
    tecnologias: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
  },
  {
    id: 'exactapp',
    nombre: 'ExactApp · Gestión y Facturación',
    categoria: 'Gestión empresarial',
    resumen: 'Sistema de gestión y facturación para distintos tipos de negocio.',
    descripcion:
      'Aplicación web para administrar las operaciones diarias de un negocio y emitir facturas, con acceso por usuario.',
    paraQuien: 'Pequeñas y medianas empresas que quieren facturar y controlar su negocio en un solo lugar.',
    incluye: ['Acceso con usuario', 'Gestión del negocio', 'Facturación'],
    tecnologias: ['React', 'Vite', 'Node.js'],
  },
  {
    id: 'dolce',
    nombre: 'Dolce Gelato · Tienda en Línea',
    categoria: 'Comercio y turismo',
    resumen: 'Tienda web de heladería con catálogo de sabores y carrito de compras.',
    descripcion: 'Sitio comercial con catálogo de productos, carrito y proceso de compra, con una identidad visual propia.',
    paraQuien: 'Negocios de alimentos que quieren vender en línea.',
    incluye: ['Catálogo de productos por tipo', 'Carrito con subtotal', 'Diseño adaptable a celulares'],
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://dolcegelato.vercel.app',
    codigo: 'https://github.com/crissp24/dolcegelato',
  },
  {
    id: 'cooperativa',
    nombre: 'Cooperativa de Transporte Jipijapa',
    categoria: 'Comercio y turismo',
    resumen: 'Sitio web con horarios de salida, rutas, oficinas y servicio de encomiendas.',
    descripcion:
      'Web informativa para una cooperativa de buses: el pasajero consulta horarios, rutas y oficinas, y conoce los servicios de encomiendas.',
    paraQuien: 'Cooperativas de transporte y empresas de servicios.',
    incluye: ['Horarios de salida por jornada', 'Rutas y oficinas', 'Personal y reseña institucional', 'Encomiendas y contacto'],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    demo: 'https://cooperativa-jipijapa.web.app',
    codigo: 'https://github.com/crissp24/Cooperativa_Jipijapa',
  },
];
