const WA_NUMBER = '523316023850';

// ── Mobile menu ──
const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    const icon = menuBtn.querySelector('i');
    if (icon) icon.className = isOpen ? 'fas fa-times text-xl' : 'fas fa-bars text-xl';
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const icon = menuBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars text-xl';
    });
  });
}

// ── Active nav link ──
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Contact form → WhatsApp ──
const form = document.getElementById('cotiza-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nombre  = document.getElementById('f-nombre')?.value.trim()  || '';
    const empresa = document.getElementById('f-empresa')?.value.trim() || '';
    const tipo    = document.getElementById('f-tipo')?.value            || '';
    const detalle = document.getElementById('f-detalle')?.value.trim() || '';

    const msg =
`¡Hola DLX! Los encontré en su sitio web. Me llamo *${nombre}*${empresa ? ` de *${empresa}*` : ''}.

*Tipo de solicitud:* ${tipo}
*Necesito:* ${detalle}

Me gustaría recibir una cotización. ¿Me pueden ayudar?`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

// ── Dynamic WhatsApp links ──
document.querySelectorAll('a[data-wa]').forEach(el => {
  const msg = el.dataset.wa || '¡Hola DLX! Me gustaría solicitar información sobre sus productos y servicios.';
  el.setAttribute('href', `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener');
});
