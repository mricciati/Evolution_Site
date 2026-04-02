# Evolution Engineering & Services S.r.l. — Sito Web

Sito statico bilingue (IT/EN) pronto per il deploy su GitHub Pages con dominio `evolutionengineering.eu`.

---

## Come Aprire il Sito Localmente

Apri il file `index.html` direttamente nel browser (doppio click).  
**Non è necessario alcun server web.** Tutto funziona in locale.

> **Nota:** La sezione Portfolio e Attrezzature carica i dati da file JSON tramite `fetch()`.  
> Alcuni browser bloccano le richieste locali per motivi di sicurezza.  
> Se le card non appaiono, usa VS Code con l'estensione **Live Server** oppure apri con Firefox.

---

## Struttura del Progetto

```
evolution-engineering-website/
├── index.html              → Homepage italiana
├── en/
│   ├── index.html          → Homepage inglese
│   └── pages/              → Pagine EN (services, portfolio, equipment, certifications, contacts)
├── css/
│   └── style.css           → Stile globale (dark theme industriale)
├── js/
│   └── main.js             → Animazioni, caricamento JSON, lightbox, form
├── images/
│   ├── hero/               → Immagini hero (es. hero-bg.jpg)
│   ├── projects/           → Foto progetti (es. project-01.jpg)
│   └── equipment/          → Foto attrezzature (es. equip-01.jpg)
├── data/
│   ├── projects.json       → DATABASE PROGETTI (aggiornabile senza toccare HTML)
│   └── equipment.json      → DATABASE ATTREZZATURE (aggiornabile senza toccare HTML)
├── pages/                  → Pagine IT (servizi, portfolio, attrezzature, certificazioni, contatti)
├── CNAME                   → evolutionengineering.eu (per GitHub Pages)
├── .nojekyll               → Disabilita Jekyll su GitHub Pages
└── sitemap.xml             → Sitemap per SEO
```

---

## 1. Aggiungere un Nuovo Progetto

Apri il file `data/projects.json` con un editor di testo (es. Blocco Note, VS Code).

Copia e incolla un nuovo blocco **alla fine dell'array**, prima della parentesi `]` finale:

```json
{
  "id": 7,
  "title_it": "Nome Progetto in Italiano",
  "title_en": "Project Name in English",
  "category": "carpenteria",
  "client": "Nome Cliente — Paese",
  "year": 2025,
  "description_it": "Descrizione breve del progetto in italiano.",
  "description_en": "Short project description in English.",
  "image": "images/projects/project-07.jpg",
  "tags": ["carpenteria", "strutture", "acciaio"]
}
```

**Categorie disponibili:** `carpenteria` | `piping` | `skid`

Il progetto apparirà automaticamente nella pagina Portfolio e nella sezione Portfolio della homepage.

---

## 2. Aggiungere una Foto Progetto

1. Nomina la foto in modo descrittivo: `project-07.jpg`
2. Salva la foto nella cartella `images/projects/`
3. Nel file `projects.json`, imposta il campo `"image"` con il percorso:  
   `"image": "images/projects/project-07.jpg"`

**Dimensioni consigliate:** 1200 × 800 px, formato JPG, massimo 300 KB.

---

## 3. Aggiungere un'Attrezzatura

Apri `data/equipment.json` e aggiungi un nuovo blocco nell'array:

```json
{
  "id": 10,
  "name_it": "Nome Attrezzatura",
  "name_en": "Equipment Name",
  "category": "saldatura",
  "specs": "Specifiche tecniche principali",
  "image": "images/equipment/equip-10.jpg",
  "description_it": "Descrizione capacità in italiano.",
  "description_en": "Capability description in English."
}
```

**Categorie attrezzature:** `taglio` | `saldatura` | `formatura` | `finitura` | `lavorazione-cnc` | `movimentazione` | `controlli`

---

## 4. Aggiornare Testi e Contenuti

### Testi fissi (navbar, footer, sezioni statiche)
- Modifica direttamente i file `.html` corrispondenti.
- Per la versione italiana: file in `pages/` e `index.html`
- Per la versione inglese: file in `en/pages/` e `en/index.html`

### Dati aziendali da completare
Cerca e sostituisci i seguenti placeholder nei file HTML:

| Placeholder | Dove sostituire |
|---|---|
| `[Inserire indirizzo]` | Footer di tutte le pagine |
| `[Inserire telefono]` | Footer e `pages/contatti.html` |
| `[Via, Numero Civico]` | `pages/contatti.html` e `en/pages/contacts.html` |
| `[da inserire]` (P.IVA) | Footer homepage |
| `+39XXXXXXXXXX` | `pages/contatti.html` |

### Statistiche Hero
Modifica i numeri nella sezione hero di `index.html` (righe con `stat-card__num`):
- Anni di esperienza
- Progetti completati
- Paesi serviti

---

## 5. Deploy su GitHub Pages

### Prima volta
1. Crea un repository su GitHub (es. `evolution-engineering-website`)
2. Carica tutti i file del progetto nel repository
3. Vai su **Settings → Pages**
4. In "Source" seleziona: **Deploy from a branch → main → / (root)**
5. Salva — GitHub Pages pubblica il sito automaticamente

### Dominio personalizzato (evolutionengineering.eu)
1. Il file `CNAME` contiene già `evolutionengineering.eu`
2. Vai dal tuo provider DNS e aggiungi i record:
   ```
   Tipo A:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   
   Tipo CNAME:
   www → [tuo-username].github.io
   ```
3. In GitHub Pages → Custom domain: inserisci `evolutionengineering.eu`
4. Spunta **Enforce HTTPS**

### Aggiornamenti successivi
Per aggiornare il sito dopo modifiche:
1. Modifica i file localmente
2. Su GitHub, clicca sul file → icona matita → modifica → "Commit changes"
3. Oppure usa GitHub Desktop o `git push` da terminale
4. Il sito si aggiorna in 1-2 minuti automaticamente

---

## 6. Aggiungere Foto Hero

Salva le foto nella cartella `images/hero/`.  
Per usarle come sfondo del hero, modifica in `css/style.css` la sezione `.hero::before`:

```css
.hero {
  background-image: url('../images/hero/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## Contatti Tecnici

Per supporto al sito: controlla i commenti nel codice HTML/CSS/JS.  
Ogni sezione è commentata per facilitare le modifiche.

**Email aziendale:** info@evolutionengineering.eu  
**Dominio:** www.evolutionengineering.eu
