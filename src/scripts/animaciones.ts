const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;

function revelar() {
  const elementos = document.querySelectorAll('.revelar, [data-animar]');
  if (!('IntersectionObserver' in window)) {
    elementos.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('visible');
        observador.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  elementos.forEach((el) => observador.observe(el));
}

function progreso() {
  const barra = document.querySelector<HTMLElement>('.progreso');
  if (!barra) return;
  let pendiente = false;
  const actualizar = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    barra.style.setProperty('--progreso', String(max > 0 ? scrollY / max : 0));
    pendiente = false;
  };
  addEventListener(
    'scroll',
    () => {
      if (!pendiente) requestAnimationFrame(actualizar);
      pendiente = true;
    },
    { passive: true },
  );
  actualizar();
}

function foco() {
  if (reducido || !matchMedia('(hover: hover)').matches) return;
  document.addEventListener(
    'pointermove',
    (e) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-foco]');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    { passive: true },
  );
}

revelar();
progreso();
foco();
