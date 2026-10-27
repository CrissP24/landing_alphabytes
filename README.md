# AlphaBytes · Sitio web

Sitio corporativo de **AlphaBytes**, empresa de desarrollo de software en Jipijapa, Manabí, Ecuador.
Su objetivo principal es convertir visitas en clientes: cada sección termina en un botón que abre WhatsApp con un mensaje ya escrito.

Está hecho con [Astro](https://astro.build): el resultado es HTML y CSS estáticos con muy poco JavaScript, así que carga rápido y se puede publicar gratis en GitHub Pages, Netlify o Vercel.

## Requisitos

- Node.js 20 o superior
- npm

## Comandos

```bash
npm install       # instala dependencias (solo la primera vez)
npm run dev       # servidor local en http://localhost:4321
npm run build     # genera el sitio final en /dist
npm run preview   # sirve /dist para revisarlo antes de publicar
```

## Estructura

```
├── public/                    Archivos que se copian tal cual al sitio
│   ├── logos/                 Logos SVG del kit de marca
│   ├── favicon.*, apple-touch-icon.png, android-chrome-*.png
│   ├── og-image-1200x630.png  Imagen al compartir en redes
│   └── site.webmanifest
├── src/
│   ├── data/site.ts           ← TODOS los textos y datos editables
│   ├── components/            Una sección de la página por archivo
│   ├── layouts/Base.astro     <head>: SEO, Open Graph, JSON-LD, favicons
│   ├── pages/index.astro      Arma la página con las secciones en orden
│   ├── scripts/whatsapp.ts    abrirWhatsApp() y manejo de botones data-wa
│   └── styles/global.css      Variables de marca, botones y utilidades
├── AlphaBytes-Logos/          Kit de marca original (no se publica)
└── .github/workflows/         Publicación automática en GitHub Pages
```

## Cómo editar el contenido

Casi todo se cambia en **`src/data/site.ts`**, sin tocar el diseño:

| Qué quieres cambiar | Dónde |
| --- | --- |
| Teléfono, correo, ciudad, horario | `SITE` |
| Redes sociales | `REDES` (las que estén vacías no se muestran) |
| Mensajes predeterminados de WhatsApp | `MENSAJES` |
| Tarjetas de servicios | `SERVICIOS_SOFTWARE` y `SERVICIOS_TI` |
| Botones del panel flotante de WhatsApp | `ACCESOS_RAPIDOS` |
| Rangos de presupuesto del formulario | `PRESUPUESTOS` |
| Tecnologías | `TECNOLOGIAS` y `TECNOLOGIAS_HERO` |
| Preguntas frecuentes | `PREGUNTAS` (las de respuesta vacía se ocultan) |
| Testimonios | `TESTIMONIOS` (la sección aparece solo si tiene datos) |

### WhatsApp

Cualquier enlace o botón con `data-wa="clave"` abre WhatsApp con el mensaje de `MENSAJES[clave]`. Para agregar un mensaje nuevo, añádelo a `MENSAJES` y úsalo con el componente:

```astro
<WaButton clave="mi-clave">Texto del botón</WaButton>
```

El formulario de contacto no usa servidor: valida los campos y abre WhatsApp con el texto
`Hola AlphaBytes, soy {nombre}. Me interesa: {servicio}. Presupuesto: {presupuesto}. Detalles: {mensaje}`.

### Portafolio

Los proyectos están en **`src/data/proyectos.ts`**. Cada uno tiene su ficha: qué es, para quién, qué incluye, tecnologías y demo.

Mientras la lista `PROYECTOS` esté vacía, la sección muestra **"Portafolio en construcción"** con un botón para pedir demos por WhatsApp. En cuanto agregues el primer proyecto aparecen las tarjetas, los filtros y las fichas.

- Con `demo`: la tarjeta muestra **Ver demo** con el enlace directo.
- Sin `demo` o con `privado: true`: muestra **Pedir demo**, que abre WhatsApp con el nombre del proyecto.
- `codigo` es opcional y solo se muestra dentro de la ficha si el proyecto no es privado.
- El orden de la lista es el orden en la web; los primeros 9 se ven sin pulsar "Ver más".

Ejemplo de un proyecto privado:

```ts
{
  id: 'mi-sistema',
  nombre: 'Mi Sistema',
  categoria: 'Gestión empresarial',
  resumen: 'Una línea que explique qué resuelve.',
  descripcion: 'Qué es y cómo funciona.',
  paraQuien: 'A quién le sirve.',
  incluye: ['Módulo 1', 'Módulo 2'],
  tecnologias: ['React', 'Node.js'],
  privado: true,
},
```

## Pendientes por completar

- [ ] **Datos legales del responsable** (obligatorios por la LOPDP, art. 12 num. 8) → `SITE.titular` (nombre o razón social), `SITE.identificacion` (RUC o cédula) y `SITE.direccion` (domicilio). Se muestran en `/privacidad` y `/terminos`.

Estos datos no se inventaron; mientras estén vacíos, no aparecen en la web:

- [ ] **Redes sociales**: Facebook, Instagram, LinkedIn, TikTok → `REDES`
- [ ] **Formas de pago** → respuesta en `PREGUNTAS`
- [ ] **¿Mantenimiento de PC a domicilio?** → respuesta en `PREGUNTAS`
- [ ] **Años de experiencia** → `SITE.aniosExperiencia`
- [ ] **Testimonios reales** → `TESTIMONIOS`
- [ ] **Rangos de presupuesto**: hay unos de ejemplo en dólares; ajústalos → `PRESUPUESTOS`
- [ ] **Días de atención**: el horario va de lunes a domingo; si cambia, edita `SITE.horarioSchema` (por ejemplo `Mo-Sa 09:00-18:00`)
- [ ] **Insignia "Más solicitado"**: ahora está en Desarrollo Web; muévela con la propiedad `destacado`
- [ ] **Proyectos privados**: agrégalos en `src/data/proyectos.ts` con `privado: true`

## Publicar en Vercel

Repositorio: <https://github.com/CrissP24/landing_alphabytes> (rama `master`).

1. Entra a [vercel.com](https://vercel.com) con tu cuenta de GitHub.
2. **Add New → Project** e importa `landing_alphabytes`.
3. Vercel detecta Astro solo gracias a `vercel.json` (comando `npm run build`, carpeta `dist`). Pulsa **Deploy**.
4. Cada `git push` a `master` publica una nueva versión automáticamente; las otras ramas generan una vista previa.

`vercel.json` también configura caché de larga duración para los archivos de `/_astro` y cabeceras de seguridad.

La URL del sitio (para Open Graph, canonical y JSON-LD) se toma sola del dominio de producción de Vercel. Si quieres fijarla, crea en **Settings → Environment Variables** la variable `SITE_URL`, por ejemplo `https://alphabytes.com`.

### Conectar un dominio propio

1. En el proyecto de Vercel ve a **Settings → Domains** y agrega tu dominio (por ejemplo `alphabytes.com` y `www.alphabytes.com`).
2. En el panel de tu proveedor de dominio crea los registros que Vercel te indique (normalmente un registro **A** para `@` y un **CNAME** para `www` apuntando a `cname.vercel-dns.com`).
3. Crea la variable `SITE_URL` con tu dominio y vuelve a desplegar (**Deployments → Redeploy**).

### Otras opciones

**GitHub Pages**: el workflow `.github/workflows/deploy.yml` publica al hacer push a `main`. Activa **Settings → Pages → Source: GitHub Actions** y crea la variable `BASE_PATH` (`/landing_alphabytes`) si no usas dominio propio.
**Netlify**: importa el repo; comando `npm run build`, carpeta `dist`.

## Cotizador guiado (`/cotizador`)

Asistente paso a paso para clientes que tienen una idea pero no saben exactamente qué necesitan. Al final arma un mensaje de WhatsApp ordenado (negocio, objetivos, solución, funciones, usuarios, plazo, presupuesto y contacto) para preparar la proforma.

Todo se configura en **`src/data/cotizador.ts`**:

- `NEGOCIOS`: tipos de negocio y qué objetivos se sugieren para cada uno (`sugiere`).
- `OBJETIVOS`: qué soluciones recomienda cada objetivo (`soluciones`) y qué funciones sugiere (`funciones`).
- `SOLUCIONES`: cada solución con su lista de funciones.
- `USUARIOS`, `EXISTENTE`, `PLAZOS`, `PRESUPUESTOS_COTIZADOR`: opciones de los demás pasos.
- `PASOS`: orden, títulos y textos de ayuda de cada paso.

El sitio no guarda las respuestas: solo arman el texto que el cliente decide enviar por WhatsApp.

## Páginas legales

- `/privacidad`: política de privacidad conforme a la LOPDP (cubre los contenidos del art. 12).
- `/terminos`: términos y condiciones de uso.
- Si cambias cómo tratas los datos (por ejemplo, agregas Google Analytics, un formulario con servidor o un boletín), **actualiza la política** y su fecha.
- Las fuentes se sirven desde el propio sitio (`@fontsource`), así que no se envían datos de los visitantes a Google.

## Tema claro y oscuro

El sitio sigue el tema del dispositivo (automático) y el visitante puede fijar **Claro** u **Oscuro** con el selector del encabezado; la elección se recuerda en su navegador.

- Los colores de cada tema están en `src/styles/global.css` (bloques `:root` y `[data-theme='light']`).
- Usa siempre los tokens semánticos (`--bg`, `--bg-2`, `--texto`, `--titulo`, `--acento`, `--borde`…) en vez de colores fijos, así todo se adapta solo.
- La clase `.siempre-oscuro` mantiene un bloque en oscuro en ambos temas (la ventana de código del hero y el llamado final).

## Marca

| Token | Color | Uso |
| --- | --- | --- |
| `--indigo` | `#5B4BFF` | Principal, botones, detalles |
| `--lima` | `#C6F432` | Acento, palabras destacadas, píxeles |
| `--tinta` | `#0B0F1A` | Fondo principal |
| `--tinta-2` | `#121829` | Tarjetas y secciones alternas |
| `--niebla` | `#E9EBF2` | Texto principal |
| `--gris` | `#A9B1C7` | Texto secundario |
| `--whatsapp` | `#25D366` | Solo botones de WhatsApp |

Tipografías del sitio: **Geist** (títulos y texto) y **Geist Mono** (etiquetas y detalles de código). El logotipo del kit usa Space Grotesk, ya convertido a trazos en los SVG.
