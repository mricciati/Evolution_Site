# Evolution Engineering & Services S.r.l. — Sito Web

Sito statico bilingue (IT/EN) ospitato su **Aruba** con dominio `evolutionengineering.eu`.  
Backend PHP per invio email con allegati.

---

## Stack tecnologico

| Componente | Tecnologia |
|---|---|
| Frontend | HTML5 + CSS3 + Vanilla JS |
| Backend | PHP (send-email.php, download.php) |
| Hosting | Aruba (File Manager) |
| Versionamento | GitHub (`main` branch) |
| Lingue | Italiano (master) + Inglese |

---

## Struttura del Progetto

```
Evolution_Site/
├── index.html                  → Homepage IT
├── en/
│   ├── index.html              → Homepage EN
│   └── pages/                  → Pagine EN
├── pages/                      → Pagine IT
│   ├── servizi.html
│   ├── portfolio.html
│   ├── attrezzature.html
│   ├── certificazioni.html
│   └── contatti.html
├── css/
│   └── style.css               → Stile globale (versioned: ?v=YYYYMMDD)
├── js/
│   └── main.js                 → Logica sito + SITE_DATA portfolio (versioned)
├── images/
│   ├── hero-bg.png             → Sfondo hero (officina industriale)
│   ├── logo/                   → Logo SVG
│   └── portfolio/
│       └── commessa-*/         → Foto per ogni commessa (1–15)
├── uploads/
│   └── .htaccess               → Blocca accesso diretto agli allegati
├── send-email.php              → Backend invio email con allegati
├── download.php                → Download sicuro allegati
├── sitemap.xml                 → Sitemap SEO con hreflang IT/EN
├── robots.txt                  → Regole crawler
├── .htaccess                   → Sicurezza + cache headers
├── deploy.sh                   → Script deploy per Aruba
└── ROADMAP.md                  → Piano strategico e changelog (solo sviluppo)
```

---

## Workflow di sviluppo

### Sviluppo locale
Apri `index.html` direttamente nel browser oppure usa **Live Server** (VS Code) per i JSON fetch.

### Aggiornare il sito
1. Modifica i file localmente
2. Testa nel browser
3. Commit e push su GitHub:
   ```bash
   git add -p
   git commit -m "Descrizione modifica"
   git push origin main
   ```
4. Genera la cartella deploy per Aruba:
   ```bash
   bash deploy.sh
   ```
5. Carica il contenuto di `../Evolution_Site_Deploy/` su Aruba via File Manager

### Sincronizzare tra due PC
```bash
git pull origin main
```

---

## Aggiungere un Progetto al Portfolio

I dati del portfolio sono definiti direttamente in `js/main.js` nella costante `SITE_DATA`.

1. **Aggiungi le foto** nella cartella `images/portfolio/commessa-N/`
2. **Aggiungi il blocco progetto** nell'array `projects` di `SITE_DATA` in `main.js`:

```js
{
  id: 16,
  title_it: "Nome Progetto",
  title_en: "Project Name",
  category: "carpenteria",          // carpenteria | piping | navale | coibentazione | installazioni
  client: "Cliente — Città",
  year: 2026,
  description_it: "Descrizione in italiano.",
  description_en: "Description in English.",
  images: [
    "images/portfolio/commessa-16/foto1.jpg",
    "images/portfolio/commessa-16/foto2.jpg"
  ]
}
```

3. **Aggiorna il numero di versione** in `?v=` nei tag CSS/JS delle pagine portfolio (oppure esegui `bash deploy.sh` che lo fa in automatico)

---

## Cache Busting

CSS e JS sono referenziati con versione per forzare il ricaricamento dopo ogni deploy:

```html
<link rel="stylesheet" href="css/style.css?v=20260418">
<script src="js/main.js?v=20260418" defer></script>
```

**Il numero viene aggiornato automaticamente** ad ogni esecuzione di `bash deploy.sh` con la data del giorno.  
Le pagine HTML non vengono messe in cache dal browser (`.htaccess`: `Cache-Control: no-cache`).

---

## SEO

Ogni pagina include:
- `meta keywords` specifici per settore
- Open Graph (Facebook/LinkedIn)
- Twitter Card
- `hreflang` IT ↔ EN
- JSON-LD strutturato (`Organization` sulle homepage, `BreadcrumbList` sulle pagine interne)
- `loading="lazy"` sulle immagini dinamiche
- `<script defer>` su tutti gli script

`sitemap.xml` e `robots.txt` sono nella root del sito.

---

## Sicurezza

- **`.htaccess`** — disabilita directory listing, blocca accesso a file interni (`.py`, `.sh`, `.md`, `.git`)
- **`uploads/.htaccess`** — blocca accesso diretto agli allegati caricati dagli utenti
- **`download.php`** — usa `basename()` e `realpath()` per prevenire path traversal
- **`deploy.sh`** — esclude fisicamente dal deploy: ROADMAP.md, script di sviluppo, `.git`, `.claude`, cartelle interne

---

## Bilingue IT/EN

**L'italiano è sempre il master.** Quando si modifica una pagina italiana, aggiornare la corrispondente pagina inglese:

| Italiano | Inglese |
|---|---|
| `index.html` | `en/index.html` |
| `pages/servizi.html` | `en/pages/services.html` |
| `pages/portfolio.html` | `en/pages/portfolio.html` |
| `pages/attrezzature.html` | `en/pages/equipment.html` |
| `pages/certificazioni.html` | `en/pages/certifications.html` |
| `pages/contatti.html` | `en/pages/contacts.html` |

---

## Contatti tecnici

**Email:** info@evolutionengineering.eu  
**Sito:** www.evolutionengineering.eu  
**Tel:** +39 327 7078545
