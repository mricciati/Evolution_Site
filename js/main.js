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
      specs: "Spessori: 1-50 mm | Piano: 3000x18000 mm | Tolleranza: ±0,5 mm", image: "",
      description_it: "Tavolo plasma CNC ad alta definizione per taglio di lamiere in acciaio al carbonio, inox e alluminio. Software nesting integrato per ottimizzazione materiale.",
      description_en: "High-definition CNC plasma table for cutting carbon steel, stainless steel and aluminium sheets. Integrated nesting software for material optimisation."
    },
    {
      id: 2, name_it: "Taglio Ossigas CNC", name_en: "CNC Oxy-Fuel Cutting", category: "taglio",
      specs: "Spessori: 10-250 mm | N. cannelli: 4 | Piano: 3000x18000 mm", image: "",
      description_it: "Sistema di taglio ossigas a controllo numerico con 4 cannelli per profili di grande spessore. Ideale per carpenteria pesante e pretaglio di travi strutturali.",
      description_en: "Numerically controlled oxy-fuel cutting system with 4 torches for thick sections. Ideal for heavy fabrication and structural beam pre-cutting."
    },
    {
      id: 3, name_it: "Saldatura SAW", name_en: "SAW Welding", category: "saldatura",
      specs: "Corrente: fino a 500A", image: "",
      description_it: "Impianto di saldatura SAW per giunzioni longitudinali e circolari di alta qualita su componenti strutturali e pressure vessel.",
      description_en: "SAW welding system for high-quality longitudinal and circumferential joints on structural components and pressure vessels."
    },
    {
      id: 4, name_it: "Saldatura ad Arco Sommerso", name_en: "Submerged Arc Welding", category: "saldatura",
      specs: "Corrente: fino a 1250A", image: "",
      description_it: "Sistema di saldatura ad arco sommerso ad alta potenza per giunzioni di grande spessore con elevata qualita e penetrazione profonda.",
      description_en: "High-power submerged arc welding system for thick-section joints with excellent quality and deep penetration."
    },
    {
      id: 5, name_it: "Posizionatori a Rulli", name_en: "Roller Positioners", category: "movimentazione",
      specs: "Portata: fino a 35 T", image: "",
      description_it: "Posizionatori a rulli per la rotazione e il supporto di componenti cilindrici durante le operazioni di saldatura e assemblaggio, con portata fino a 35 tonnellate.",
      description_en: "Roller positioners for rotating and supporting cylindrical components during welding and assembly operations, with capacity up to 35 tonnes."
    },
    {
      id: 6, name_it: "Saldatura con Isola Robotizzata", name_en: "Robotic Welding Cell", category: "saldatura",
      specs: "Corrente: fino a 500A", image: "",
      description_it: "Isola robotizzata di saldatura per lavorazioni automatizzate ad alta ripetibilita e produttivita su componenti strutturali e di carpenteria.",
      description_en: "Robotic welding cell for automated high-repeatability and high-productivity operations on structural and fabricated components."
    },
    {
      id: 7, name_it: "Pressa Piegatrice CNC 400T", name_en: "400T CNC Press Brake", category: "formatura",
      specs: "Forza: 400 T | Lunghezza: 4200 mm", image: "",
      description_it: "Pressa piegatrice CNC con forza di 400 tonnellate e lunghezza utile di 4200 mm per la piegatura di lamiere di medio-grande formato.",
      description_en: "CNC press brake with 400-tonne force and 4200 mm working length for bending medium to large format sheets."
    },
    {
      id: 8, name_it: "Cesoia CNC", name_en: "CNC Shear", category: "taglio",
      specs: "Capacita: 3100 mm x 13 mm", image: "",
      description_it: "Cesoia a ghigliottina CNC per il taglio rettilineo di lamiere fino a 3100 mm di larghezza e 13 mm di spessore.",
      description_en: "CNC guillotine shear for straight cutting of sheets up to 3100 mm wide and 13 mm thick."
    },
    {
      id: 9, name_it: "Trapano Radiale", name_en: "Radial Drill", category: "lavorazione-cnc",
      specs: "", image: "",
      description_it: "Trapano radiale per operazioni di foratura, alesatura e maschiatura su componenti strutturali e di carpenteria di grandi dimensioni.",
      description_en: "Radial drill for drilling, boring and tapping operations on large structural and fabricated components."
    },
    {
      id: 10, name_it: "Curva Profili", name_en: "Profile Bender", category: "formatura",
      specs: "", image: "",
      description_it: "Curvatrice per profili metallici destinata alla sagomatura di travi, tubi e profilati secondo raggi di curvatura specifici.",
      description_en: "Profile bending machine for shaping beams, tubes and sections to specified bending radii."
    },
    {
      id: 11, name_it: "Calandra CNC", name_en: "CNC Plate Rolling Machine", category: "formatura",
      specs: "4 Rulli | Spessore massimo: 35 mm x 3100 mm", image: "",
      description_it: "Calandra a 4 rulli CNC per la calandratura di lamiere fino a 35 mm di spessore e 3100 mm di larghezza, ideale per la realizzazione di virole e componenti cilindrici.",
      description_en: "4-roll CNC plate rolling machine for rolling sheets up to 35 mm thick and 3100 mm wide, ideal for manufacturing shells and cylindrical components."
    },
    {
      id: 12, name_it: "Seghe a Nastro CNC", name_en: "CNC Band Saws", category: "taglio",
      specs: "Capacita: 500 mm x 320 mm", image: "",
      description_it: "Seghe a nastro CNC per il taglio preciso di profilati, barre e tubi con sezione fino a 500x320 mm.",
      description_en: "CNC band saws for precise cutting of profiles, bars and tubes with cross-section up to 500x320 mm."
    },
    {
      id: 13, name_it: "Punzonatrice Oliodinamica", name_en: "Hydraulic Punching Machine", category: "lavorazione-cnc",
      specs: "Forza: 115 T", image: "",
      description_it: "Punzonatrice oliodinamica con forza di 115 tonnellate per operazioni di punzonatura, stampaggio e tranciatura su lamiere e piastre.",
      description_en: "Hydraulic punching machine with 115-tonne force for punching, stamping and blanking operations on sheets and plates."
    },
    {
      id: 14, name_it: "Laboratorio NDT", name_en: "NDT Laboratory", category: "controlli",
      specs: "RT, UT, PT, MT, VT | Certificazione EN ISO 9712 Lev. 2-3", image: "",
      description_it: "Laboratorio interno NDT con personale certificato EN ISO 9712 per controlli radiografici (RT), ultrasonici (UT), liquidi penetranti (PT), particelle magnetiche (MT) e visivi (VT).",
      description_en: "In-house NDT lab with EN ISO 9712 certified personnel for radiographic (RT), ultrasonic (UT), penetrant (PT), magnetic particle (MT) and visual (VT) testing."
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
          'index.html':          'en/index.html',
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
          'index.html':          '../index.html',
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
   8. FORM — invio con PHP backend e gestione allegati
   ============================================================ */
(function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Rileva la lingua dalla URL
  const isEnglish = window.location.pathname.includes('/en/');
  const messages = isEnglish ? {
    sending: 'Sending...',
    success: 'Thank you! We have received your request. You will receive a confirmation email.',
    error: 'Error: ',
    genericError: 'An error occurred. Please try again later.',
    connectionError: 'Connection error. Please try again later.',
    filesSelected: 'files selected'
  } : {
    sending: 'Invio in corso...',
    success: 'Grazie! Abbiamo ricevuto la tua richiesta. Riceverai una conferma via email.',
    error: 'Errore: ',
    genericError: 'Si è verificato un errore. Riprova più tardi.',
    connectionError: 'Errore di connessione. Riprova più tardi.',
    filesSelected: 'file allegati'
  };

  // Gestisci cambio dei file
  const fileInput = document.getElementById('allegati') || document.getElementById('attachments');
  if (fileInput) {
    fileInput.addEventListener('change', e => {
      const fileCount = e.target.files.length;
      const totalSize = Array.from(e.target.files).reduce((sum, f) => sum + f.size, 0);

      if (fileCount > 0) {
        const sizeMB = (totalSize / 1024 / 1024).toFixed(2);
        const label = isEnglish
          ? `${fileCount} file (${sizeMB} MB)`
          : `${fileCount} ${messages.filesSelected} (${sizeMB} MB)`;
        e.target.title = label;
      }
    });
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const messageDiv = document.getElementById('form-message');

    if (!submitBtn || !messageDiv) return;

    // Disabilita il bottone
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = messages.sending;

    try {
      // Raccogli i dati del form
      const formData = new FormData(form);

      // Determina il percorso al file PHP
      const currentPath = window.location.pathname;
      const phpPath = currentPath.includes('/en/') ? '../../send-email.php' : '../send-email.php';

      // Invia il form
      const response = await fetch(phpPath, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      // Mostra il messaggio
      messageDiv.style.display = 'block';

      if (response.ok && data.success) {
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
        messageDiv.textContent = messages.success;
        form.reset();
      } else {
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '1px solid #f5c6cb';
        messageDiv.textContent = messages.error + (data.error || messages.genericError);
      }

      // Nascondi il messaggio dopo 6 secondi
      setTimeout(() => {
        messageDiv.style.display = 'none';
      }, 6000);

    } catch (error) {
      console.error('Form error:', error);
      messageDiv.style.display = 'block';
      messageDiv.style.backgroundColor = '#f8d7da';
      messageDiv.style.color = '#721c24';
      messageDiv.style.border = '1px solid #f5c6cb';
      messageDiv.textContent = messages.connectionError;

      setTimeout(() => {
        messageDiv.style.display = 'none';
      }, 6000);
    } finally {
      // Riabilita il bottone
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
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
