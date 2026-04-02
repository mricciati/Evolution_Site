/**
 * Evolution Engineering & Services S.r.l.
 * main.js — Animazioni, comportamenti e rendering dinamico
 */

/* ============================================================
   0. DATI INLINE — progetti e attrezzature
   ============================================================ */
var SITE_DATA = {
  projects: [
    {
      id: 1,
      title_it: "Struttura Portante Turbina Eolica",
      title_en: "Wind Turbine Supporting Structure",
      category: "carpenteria",
      client: "EPC Contractor — Nord Europa",
      year: 2024,
      description_it: "Realizzazione di strutture portanti in acciaio S355 per nacelle di turbine eoliche offshore. Lavorazione esecutiva conforme EN 1090 EXC3, sabbiatura Sa 2.5 e verniciatura ciclo C5-M.",
      description_en: "Fabrication of S355 steel supporting structures for offshore wind turbine nacelles. Executive machining compliant with EN 1090 EXC3, Sa 2.5 blasting and C5-M coating cycle.",
      image: "images/portfolio/PHOTO-2026-04-02-08-21-55_3.jpg",
      tags: ["carpenteria", "strutture", "eolico"]
    },
    {
      id: 2,
      title_it: "Skid Processo Farmaceutico GMP",
      title_en: "GMP Pharmaceutical Process Skid",
      category: "skid",
      client: "System Integrator — Svizzera",
      year: 2024,
      description_it: "Fornitura chiavi in mano di skid processo in AISI 316L per impianto farmaceutico GMP. Comprende struttura, piping sanitario, supporti e documentazione IQ/OQ.",
      description_en: "Turnkey supply of AISI 316L process skid for GMP pharmaceutical plant. Includes structure, sanitary piping, supports and IQ/OQ documentation.",
      image: "images/portfolio/PHOTO-2026-04-02-08-21-56_17.jpg",
      tags: ["skid", "farmaceutico", "gmp"]
    },
    {
      id: 3,
      title_it: "Piping Industriale Impianto Energia",
      title_en: "Industrial Piping for Energy Plant",
      category: "piping",
      client: "OEM — Germania",
      year: 2023,
      description_it: "Prefabbricazione e montaggio di piping in acciaio al carbonio e inox per centrale di cogenerazione. Pressioni fino a 40 bar, saldatura qualificata EN ISO 15614.",
      description_en: "Prefabrication and assembly of carbon and stainless steel piping for a cogeneration plant. Pressures up to 40 bar, EN ISO 15614 qualified welding.",
      image: "images/portfolio/PHOTO-2026-04-02-08-21-56_10.jpg",
      tags: ["piping", "energia", "cogenerazione"]
    },
    {
      id: 4,
      title_it: "Moduli Prefabbricati Oil & Gas",
      title_en: "Prefabricated Modules Oil & Gas",
      category: "skid",
      client: "EPC Contractor — Benelux",
      year: 2023,
      description_it: "Progettazione esecutiva e costruzione di 3 moduli prefabbricati per impianto oil & gas. Struttura modulare in acciaio S275, certificazione PED e ATEX.",
      description_en: "Executive design and construction of 3 prefabricated modules for oil & gas plant. Modular S275 steel structure, PED and ATEX certification.",
      image: "images/portfolio/PHOTO-2026-04-02-08-21-56_11.jpg",
      tags: ["skid", "moduli", "oil&gas"]
    },
    {
      id: 5,
      title_it: "Carpenteria Pesante Infrastrutture",
      title_en: "Heavy Steel Fabrication for Infrastructure",
      category: "carpenteria",
      client: "General Contractor — Italia",
      year: 2022,
      description_it: "Fornitura di carpenteria metallica pesante per infrastruttura industriale. Travi HEB, colonne, controventi e giunzioni bullonate classe 8.8.",
      description_en: "Supply of heavy metal carpentry for industrial infrastructure. HEB beams, columns, bracing and grade 8.8 bolted connections.",
      image: "images/portfolio/PHOTO-2026-04-02-08-21-55_10.jpg",
      tags: ["carpenteria", "strutture", "infrastrutture"]
    },
    {
      id: 6,
      title_it: "Rack Piping Alta Pressione",
      title_en: "High Pressure Piping Rack",
      category: "piping",
      client: "System Integrator — Francia",
      year: 2022,
      description_it: "Realizzazione di rack piping ad alta pressione per impianto chimico. Tubi P91, saldatura TIG orbitale, controlli NDT al 100% RT+UT.",
      description_en: "High pressure piping rack for chemical plant. P91 tubes, orbital TIG welding, 100% NDT controls RT+UT.",
      image: "images/portfolio/PHOTO-2026-04-02-08-21-55_7.jpg",
      tags: ["piping", "alta-pressione", "ndt"]
    },
    {
      id: 7,
      title_it: "Costruzione Navale — Scafo Acciaio",
      title_en: "Shipbuilding — Steel Hull",
      category: "carpenteria",
      client: "Cantiere Navale — Mediterraneo",
      year: 2023,
      description_it: "Prefabbricazione di sezioni di scafo in acciaio navale per unità commerciale. Laminati fino a 100mm, saldatura sottoacqua certificata.",
      description_en: "Prefabrication of naval steel hull sections for commercial vessel. Plates up to 100mm, certified underwater welding.",
      image: "images/portfolio/IMG_2820.JPG",
      tags: ["navale", "carpenteria", "scafo"]
    },
    {
      id: 8,
      title_it: "Tubazioni Coibentate per Termoelettrico",
      title_en: "Insulated Piping for Thermal Power Plant",
      category: "piping",
      client: "Gestore Centrale Termoelettrica",
      year: 2024,
      description_it: "Lavorazione di tubazioni in acciaio P11 con coibentazione ceramica per circuiti vapore. Diametri DN25-DN500, pressioni fino a 100 bar, isolamento fino a 50mm.",
      description_en: "P11 steel piping with ceramic insulation for steam circuits. Diameters DN25-DN500, pressures up to 100 bar, insulation up to 50mm.",
      image: "images/portfolio/IMG_2861.JPG",
      tags: ["piping", "coibentazione", "termoelettrica"]
    }
  ],
  equipment: [
    {
      id: 1, name_it: "Taglio Plasma CNC", name_en: "CNC Plasma Cutting", category: "taglio",
      specs: "Spessori: 1–80 mm | Piano: 3000×12000 mm | Tolleranza: ±0,5 mm", image: "",
      description_it: "Tavolo plasma CNC ad alta definizione per taglio di lamiere in acciaio al carbonio, inox e alluminio. Software nesting integrato per ottimizzazione materiale.",
      description_en: "High-definition CNC plasma table for cutting carbon steel, stainless and aluminium sheets. Integrated nesting software for material optimisation."
    },
    {
      id: 2, name_it: "Taglio Ossigas CNC", name_en: "CNC Oxy-fuel Cutting", category: "taglio",
      specs: "Spessori: 10–250 mm | n. cannelli: 3 | Piano: 4000×12000 mm", image: "",
      description_it: "Sistema di taglio ossigas a controllo numerico per profili di grande spessore. Ideale per carpenteria pesante e pretaglio di travi strutturali.",
      description_en: "Numerically controlled oxy-fuel cutting system for thick sections. Ideal for heavy fabrication and structural beam pre-cutting."
    },
    {
      id: 3, name_it: "Saldatura SAW (Arco Sommerso)", name_en: "SAW (Submerged Arc Welding)", category: "saldatura",
      specs: "Corrente: fino a 1200A | Velocita: 0.5–2.5 m/min | Filo: 2–6 mm", image: "",
      description_it: "Impianto di saldatura ad arco sommerso per giunzioni longitudinali e circolari di alta qualita su grandi componenti strutturali e pressure vessels.",
      description_en: "Submerged arc welding system for high-quality longitudinal and circumferential joints on large structural components and pressure vessels."
    },
    {
      id: 4, name_it: "Saldatura TIG Orbitale", name_en: "Orbital TIG Welding", category: "saldatura",
      specs: "Diametri: 6–323 mm | Controllo closed-head | Qualificata EN ISO 15614", image: "",
      description_it: "Sistema TIG orbitale automatizzato per piping sanitario e industriale. Garantisce ripetibilita e tracciabilita completa. Certificata per applicazioni farmaceutiche GMP.",
      description_en: "Automated orbital TIG system for sanitary and industrial piping. Ensures full repeatability and traceability. Certified for GMP pharmaceutical applications."
    },
    {
      id: 5, name_it: "Pressa Piegatrice CNC 650T", name_en: "650T CNC Press Brake", category: "formatura",
      specs: "Forza: 650 tonnellate | Lunghezza: 6000 mm | Spessore max: 60 mm", image: "",
      description_it: "Pressa piegatrice CNC ad alta precisione per lamiere di grandi dimensioni. Controllo backgauge automatico, tolleranza angolare ±0,2 gradi.",
      description_en: "High-precision CNC press brake for large sheets. Automatic backgauge control, angular tolerance ±0.2 degrees."
    },
    {
      id: 6, name_it: "Sabbiatrice Automatica", name_en: "Automatic Shot-Blasting", category: "finitura",
      specs: "Tunnel: 2000×2000 mm | Grado: Sa 2.5 | Profilo: Ry 50–100 um", image: "",
      description_it: "Tunnel di sabbiatura automatica a turbine per preparazione superficiale di strutture e componenti metallici. Cicli di verniciatura industriale fino a C5-M.",
      description_en: "Automatic turbine shot-blasting tunnel for surface preparation of metal structures and components. Industrial painting cycles up to C5-M."
    },
    {
      id: 7, name_it: "Tornitura CNC diam. 2000 mm", name_en: "CNC Turning diam. 2000 mm", category: "lavorazione-cnc",
      specs: "Diametro max: 2000 mm | Lunghezza: 8000 mm | Precisione: IT6", image: "",
      description_it: "Tornio CNC di grandi dimensioni per lavorazione di componenti cilindrici di grande diametro: flange, virole, alberi e componenti per pressure vessel.",
      description_en: "Large CNC lathe for machining large-diameter cylindrical components: flanges, shells, shafts and pressure vessel components."
    },
    {
      id: 8, name_it: "Gru a Ponte 20T", name_en: "20T Overhead Crane", category: "movimentazione",
      specs: "Portata: 20 tonnellate | Luce: 24 m | Altezza gancio: 10 m", image: "",
      description_it: "Carroponte da 20 tonnellate per movimentazione di strutture di grande peso all'interno dell'officina. Gestione sicura di montaggi complessi.",
      description_en: "20-tonne overhead crane for moving heavy structures inside the workshop. Safe handling of complex assemblies."
    },
    {
      id: 9, name_it: "Laboratorio NDT", name_en: "NDT Laboratory", category: "controlli",
      specs: "RT, UT, PT, MT, VT | Certificazione EN ISO 9712 Lev. 2–3", image: "",
      description_it: "Laboratorio interno NDT con personale certificato EN ISO 9712 per controlli radiografici (RT), ultrasonici (UT), liquidi penetranti (PT) e particelle magnetiche (MT).",
      description_en: "In-house NDT lab with EN ISO 9712 certified personnel for radiographic (RT), ultrasonic (UT), penetrant (PT) and magnetic particle (MT) testing."
    }
  ]
};

/* Calcola il prefisso immagini in base alla pagina corrente */
function getImagePrefix() {
  var path = window.location.pathname.replace(/\\/g, '/');
  if (path.includes('/en/pages/')) return '../../';
  if (path.includes('/en/'))       return '../';
  if (path.includes('/pages/'))    return '../';
  return '';
}

/* ============================================================
   1. NAV — scroll & hamburger
   ============================================================ */
(function initNav() {
  const nav  = document.querySelector('.nav');
  const ham  = document.querySelector('.nav__hamburger');
  const mob  = document.querySelector('.nav__mobile');

  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  if (ham && mob) {
    ham.addEventListener('click', () => {
      mob.classList.toggle('open');
      ham.setAttribute('aria-expanded', mob.classList.contains('open'));
    });

    mob.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mob.classList.remove('open'));
    });
  }
})();

/* ============================================================
   2. LINGUA — toggle IT/EN + localStorage
   ============================================================ */
(function initLang() {
  const langBtns = document.querySelectorAll('.lang-btn');
  if (!langBtns.length) return;

  const savedLang = localStorage.getItem('ee_lang') || 'it';
  setLang(savedLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLang(lang);
      localStorage.setItem('ee_lang', lang);

      const isEnPage = window.location.pathname.includes('/en/') ||
                       window.location.pathname.includes('/en\\');
      if (lang === 'en' && !isEnPage) {
        const path = window.location.pathname;
        const fileName = path.split('/').pop() || 'index.html';
        const enMap = {
          'index.html':          '../en/index.html',
          'servizi.html':        '../en/pages/services.html',
          'portfolio.html':      '../en/pages/portfolio.html',
          'attrezzature.html':   '../en/pages/equipment.html',
          'certificazioni.html': '../en/pages/certifications.html',
          'contatti.html':       '../en/pages/contacts.html',
        };
        if (enMap[fileName]) window.location.href = enMap[fileName];
      } else if (lang === 'it' && isEnPage) {
        const path = window.location.pathname;
        const fileName = path.split('/').pop() || 'index.html';
        const itMap = {
          'index.html':          '../../index.html',
          'services.html':       '../../pages/servizi.html',
          'portfolio.html':      '../../pages/portfolio.html',
          'equipment.html':      '../../pages/attrezzature.html',
          'certifications.html': '../../pages/certificazioni.html',
          'contacts.html':       '../../pages/contatti.html',
        };
        if (itMap[fileName]) window.location.href = itMap[fileName];
      }
    });
  });

  function setLang(lang) {
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }
})();

/* ============================================================
   3. SCROLL REVEAL — IntersectionObserver
   ============================================================ */
(function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ============================================================
   4. PORTFOLIO — filtri + lightbox
   ============================================================ */
(function initPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const lang = localStorage.getItem('ee_lang') || 'it';
  const prefix = getImagePrefix();
  const projects = SITE_DATA.projects;

  renderProjects(projects, lang);
  initFilters(projects, lang);

  function renderProjects(projects, lang) {
    grid.innerHTML = projects.map(p => projectCard(p, lang)).join('');
    initLightbox();
    reobserveReveal();
  }

  function projectCard(p, lang) {
    const title = lang === 'en' ? p.title_en : p.title_it;
    const desc  = lang === 'en' ? p.description_en : p.description_it;
    const tags  = (p.tags || []).map(t => '<span class="tag">' + t + '</span>').join('');
    var imgSrc = p.image ? prefix + p.image : '';

    return '<article class="project-card reveal" data-category="' + p.category + '">' +
      '<div class="project-card__img placeholder img-placeholder" style="cursor:pointer;height:220px"' +
        (imgSrc ? ' onclick="openLightbox(\'' + imgSrc + '\')"' : '') + '>' +
        (imgSrc
          ? '<img src="' + imgSrc + '" alt="' + title + '" style="width:100%;height:220px;object-fit:cover;" onerror="this.parentElement.innerHTML=\'<span>Foto in arrivo</span>\'">'
          : '<span>Foto in arrivo</span>') +
      '</div>' +
      '<div class="project-card__body">' +
        '<div class="project-card__meta">' +
          '<span>' + p.year + '</span>' +
          '<span>' + p.client + '</span>' +
        '</div>' +
        '<h3 class="project-card__title">' + title + '</h3>' +
        '<p class="project-card__desc">' + desc + '</p>' +
        '<div class="project-card__tags">' + tags + '</div>' +
      '</div>' +
    '</article>';
  }

  function initFilters(projects, lang) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        const filtered = cat === 'all' ? projects : projects.filter(p => p.category === cat);
        renderProjects(filtered, lang);
      });
    });
  }
})();

/* ============================================================
   5. PORTFOLIO PREVIEW (homepage) — ultimi 4 progetti
   ============================================================ */
(function initPortfolioPreview() {
  const grid = document.getElementById('portfolio-preview-grid');
  if (!grid) return;

  const lang = localStorage.getItem('ee_lang') || 'it';
  const prefix = getImagePrefix();
  const projects = SITE_DATA.projects.slice(0, 4);

  if (!projects.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1;text-align:center">Nessun progetto disponibile.</p>';
    return;
  }

  grid.innerHTML = projects.map(p => {
    const title = lang === 'en' ? p.title_en : p.title_it;
    const desc  = lang === 'en' ? p.description_en : p.description_it;
    const tags  = (p.tags || []).map(t => '<span class="tag">' + t + '</span>').join('');
    var imgPath = p.image ? prefix + p.image : '';
    return '<article class="project-card reveal">' +
      '<div class="project-card__img placeholder img-placeholder" style="height:220px">' +
        (imgPath
          ? '<img src="' + imgPath + '" alt="' + title + '" style="width:100%;height:220px;object-fit:cover;" onerror="this.parentElement.innerHTML=\'<span>Foto in arrivo</span>\'">'
          : '<span>Foto in arrivo</span>') +
      '</div>' +
      '<div class="project-card__body">' +
        '<div class="project-card__meta">' +
          '<span>' + p.year + '</span>' +
          '<span>' + p.client + '</span>' +
        '</div>' +
        '<h3 class="project-card__title">' + title + '</h3>' +
        '<p class="project-card__desc">' + desc + '</p>' +
        '<div class="project-card__tags">' + tags + '</div>' +
      '</div>' +
    '</article>';
  }).join('');

  reobserveReveal();
})();

/* ============================================================
   6. ATTREZZATURE — da dati inline
   ============================================================ */
(function initEquipment() {
  const grid = document.getElementById('equipment-grid');
  if (!grid) return;

  const lang   = localStorage.getItem('ee_lang') || 'it';
  const prefix = getImagePrefix();
  const items  = SITE_DATA.equipment;

  if (!items.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1;text-align:center">Nessuna attrezzatura.</p>';
    return;
  }

  grid.innerHTML = items.map(eq => {
    const name = lang === 'en' ? eq.name_en : eq.name_it;
    const desc = lang === 'en' ? eq.description_en : eq.description_it;
    var imgPath = eq.image ? prefix + eq.image : '';
    return '<div class="equip-card reveal">' +
      '<div class="equip-card__img placeholder img-placeholder" style="height:180px">' +
        (imgPath
          ? '<img src="' + imgPath + '" alt="' + name + '" style="width:100%;height:180px;object-fit:cover;" onerror="this.parentElement.innerHTML=\'<span>Foto in arrivo</span>\'">'
          : '<span>Foto in arrivo</span>') +
      '</div>' +
      '<div class="equip-card__body">' +
        '<p class="equip-card__cat">' + eq.category + '</p>' +
        '<h3 class="equip-card__name">' + name + '</h3>' +
        '<p class="equip-card__specs">' + eq.specs + '</p>' +
        '<p class="equip-card__desc">' + desc + '</p>' +
      '</div>' +
    '</div>';
  }).join('');

  reobserveReveal();
})();

/* ============================================================
   7. LIGHTBOX
   ============================================================ */
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (!lb || !img) return;
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.addEventListener('click', e => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ============================================================
   8. FORM — feedback visivo (no backend)
   ============================================================ */
(function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    setTimeout(() => {
      const msg = document.getElementById('form-success');
      if (msg) {
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; }, 5000);
      }
    }, 300);
  });
})();

/* ============================================================
   9. ACTIVE NAV LINK — evidenzia la pagina corrente
   ============================================================ */
(function initActiveNav() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.endsWith(currentFile) || (currentFile === 'index.html' && href === '#')) {
      link.classList.add('active');
    }
  });
})();

/* ============================================================
   UTILITY — ri-osserva elementi reveal aggiunti dinamicamente
   ============================================================ */
function reobserveReveal() {
  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
    new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); } });
    }, { threshold: 0.1 }).observe(el);
  });
}
