// La Pericana menu
// Theme selector + subtle SVG/scroll animations.

document.documentElement.classList.add('js');

(() => {
  const storageKey = 'la-pericana-theme';
  const root = document.documentElement;
  const buttons = [...document.querySelectorAll('[data-theme-choice]')];
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const applyTheme = (theme, persist = true) => {
    const safeTheme = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = safeTheme;

    buttons.forEach((button) => {
      const active = button.dataset.themeChoice === safeTheme;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    if (themeColor) {
      themeColor.setAttribute('content', safeTheme === 'dark' ? '#11110f' : '#ffffff');
    }

    if (persist) {
      try {
        localStorage.setItem(storageKey, safeTheme);
      } catch (_) {
        // Keep the selector functional even when storage is blocked.
      }
    }
  };

  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem(storageKey) || 'dark';
  } catch (_) {
    savedTheme = 'dark';
  }

  applyTheme(savedTheme, false);

  buttons.forEach((button) => {
    button.addEventListener('click', () => applyTheme(button.dataset.themeChoice));
  });

  // Add a tiny hand-drawn SVG flourish to each menu heading.
  const headingTargets = [...document.querySelectorAll('.content-sheet h2.script-title')];
  const variants = [
    {
      main: 'M3 31 C18 8 35 7 49 22 C58 31 66 24 72 14 C78 4 88 4 95 11',
      accent: 'M63 31 C69 28 74 28 79 31'
    },
    {
      main: 'M2 25 C16 11 30 8 42 17 C54 26 60 31 70 20 C79 10 86 7 96 14',
      accent: 'M76 29 C82 26 87 26 92 29'
    },
    {
      main: 'M3 28 C18 28 24 8 39 8 C54 8 59 29 72 24 C82 20 86 10 96 9',
      accent: 'M66 33 C72 30 79 30 84 33'
    }
  ];

  headingTargets.forEach((heading, index) => {
    const variant = variants[index % variants.length];
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 40');
    svg.setAttribute('aria-hidden', 'true');
    svg.classList.add('title-sketch');

    const main = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    main.setAttribute('d', variant.main);
    main.classList.add('sketch-main');

    const accent = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    accent.setAttribute('d', variant.accent);
    accent.classList.add('sketch-accent');

    svg.append(main, accent);
    heading.appendChild(svg);
    heading.classList.add('title-with-sketch');
  });

  // Stagger menu entries very slightly so the page still feels like a printed menu.
  document.querySelectorAll('.menu-list').forEach((list) => {
    [...list.querySelectorAll('.menu-item')].forEach((item, index) => {
      item.style.setProperty('--item-delay', `${Math.min(index * 105, 735)}ms`);
    });
  });

  root.classList.add('anim-ready');

  const revealImmediately = () => {
    document.querySelectorAll('.title-with-sketch, .menu-list, .menu-sheet').forEach((el) => {
      el.classList.add('is-visible');
    });
  };

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealImmediately();
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px'
  });

  document.querySelectorAll('.title-with-sketch, .menu-list, .menu-sheet').forEach((el) => {
    observer.observe(el);
  });
})();
