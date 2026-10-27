type Pref = 'auto' | 'light' | 'dark';

const raiz = document.documentElement;
const media = matchMedia('(prefers-color-scheme: dark)');
let iniciado = false;

const resolver = (pref: Pref) => (pref === 'dark' || (pref === 'auto' && media.matches) ? 'dark' : 'light');

function marcar(pref: Pref) {
  document.querySelectorAll<HTMLButtonElement>('[data-tema]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.tema === pref));
  });
}

function aplicar(pref: Pref, origen?: HTMLElement) {
  const tema = resolver(pref);
  raiz.dataset.temaPref = pref;
  marcar(pref);
  try {
    localStorage.setItem('tema', pref);
  } catch {}

  if (raiz.dataset.theme === tema) return;
  const cambiar = () => {
    raiz.dataset.theme = tema;
  };

  const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!origen || reducido || !document.startViewTransition) return cambiar();

  const r = origen.getBoundingClientRect();
  const x = r.left + r.width / 2;
  const y = r.top + r.height / 2;
  const radio = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

  document.startViewTransition(cambiar).ready.then(() => {
    raiz.animate(
      { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${radio}px at ${x}px ${y}px)`] },
      { duration: 550, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
    );
  });
}

export function iniciarTema() {
  if (iniciado) return;
  iniciado = true;

  marcar((raiz.dataset.temaPref as Pref) || 'auto');

  document.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-tema]');
    if (b) aplicar(b.dataset.tema as Pref, b);
  });

  media.addEventListener('change', () => {
    if (raiz.dataset.temaPref === 'auto') aplicar('auto');
  });
}
