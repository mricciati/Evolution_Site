# ROADMAP — Evolution Engineering & Services S.r.l.
**Sito:** [evolutionengineering.eu](https://evolutionengineering.eu)  
**Ultimo aggiornamento:** 2026-04-15  
**Autore revisione:** Claude Code + Team Dev

---

## INDICE

1. [Analisi Attuale](#1-analisi-attuale)
2. [Punti di Forza](#2-punti-di-forza)
3. [Punti Deboli](#3-punti-deboli)
4. [Raccomandazioni Strategiche](#4-raccomandazioni-strategiche)
5. [Piano di Intervento](#5-piano-di-intervento)
6. [Changelog Aggiornamenti](#6-changelog-aggiornamenti)

---

## 1. ANALISI ATTUALE

### Panoramica tecnica
| Aspetto | Stato |
|---------|-------|
| Tecnologia | HTML5 + CSS3 + Vanilla JS + PHP backend |
| Pagine | 12 HTML (6 IT + 6 EN) |
| Lingue | Italiano e Inglese |
| Responsivo | Sì — hamburger menu, grid adattivo |
| Form contatti | PHP con upload file fino a 25 MB |
| Portfolio | 8 progetti con 56 immagini reali |
| Attrezzature | 14 macchinari documentati con specifiche |
| Certificazioni | ISO 9001:2015 (attiva), EN 9100:2018 (in corso) |
| SEO | sitemap.xml, meta tags, Open Graph, hreflang |
| Design | Navy + grigio-blu industriale, Space Grotesk/Inter |

### Posizionamento aziendale
Evolution Engineering & Services S.r.l. è un'azienda metalmeccanica con sede ad Adelfia (BA) che offre soluzioni integrate in carpenteria, piping, skid modulari e progettazione. I settori target sono: Energia, Navale, Siderurgico, Farmaceutico, Oil & Gas, Aerospace e Infrastrutture. Il sito si rivolge a **buyer e ingegneri industriali** che cercano un partner affidabile per forniture complesse.

---

## 2. PUNTI DI FORZA

### Struttura e Contenuto
- **Bilingue IT/EN** — Apertura immediata al mercato internazionale e alle multinazionali presenti in Italia
- **Dati tecnici concreti** — Specifiche reali (materiali, norme, pressioni, certificazioni) che parlano direttamente a ingegneri e responsabili tecnici
- **Portfolio con foto reali** — 56 immagini di lavori effettivi trasmettono credibilità che i render non possono dare
- **Attrezzature documentate** — Elenco di 14 macchinari con specifiche (taglio 250mm, pressa 400T, calandra 35mm, SAW 1250A) — forte differenziatore per chi valuta la capacità produttiva
- **Form avanzato** — Upload fino a 25 MB (PDF, DWG, STEP, IGES) è esattamente quello di cui ha bisogno un ufficio tecnico per richiedere un preventivo

### Design e UX
- **Identità visiva coerente** — Navy industriale + font geometrico (Space Grotesk) comunica solidità e precisione
- **Navigazione chiara** — Menu fisso con 6 voci semplici, CTA "Richiedi Preventivo" sempre visibile
- **Animazioni misurate** — Scroll reveal e hover effects arricchiscono senza distrarre
- **Sezione Settori** — 7 settori industriali comunicano subito la versatilità dell'azienda
- **Certificazioni in evidenza** — ISO 9001:2015 e EN 9100:2018 in homepage rassicurano chi richiede fornitori qualificati

### Backend e Operatività
- **PHP personalizzato** — Controllo totale su upload, sicurezza, email (no dipendenza da servizi terzi)
- **Path traversal protetto** — download.php usa basename() e realpath() — codice sicuro
- **Sitemap XML** — hreflang per multilingua, priorità SEO corrette

---

## 3. PUNTI DEBOLI

### 3.1 Impatto Visivo e Percezione del Brand

**[ALTA PRIORITÀ]**

- **Nessuna immagine hero** — Il fondo navy con pattern a puntini è pulito ma astratto. Un'azienda metalmeccanica ha officine, scintille, strutture imponenti: non mostrarle è un'occasione persa. Il potenziale cliente vuole vedere cosa si fa fisicamente.
- **Sezione "Chi Siamo" senza volto** — Testo anonimo, zero foto di persone o dello stabilimento. Nel B2B industriale la fiducia passa anche dalle persone e dai luoghi.
- **Statistiche non verificabili** — "40+ anni", "200+ progetti" in homepage: numeri importanti ma senza contesto o storia aziendale non convincono. Manca una narrazione del percorso dell'azienda.
- **Logo poco visibile su mobile** — Il logo SVG usa gradiente metallico sottile che può risultare poco leggibile su schermi piccoli.

### 3.2 Contenuto e Copywriting

**[ALTA PRIORITÀ]**

- **Testi troppo tecnici nella homepage** — La hero section usa terminologia da ufficio tecnico già al primo contatto. Un buyer o un direttore acquisti che non è ingegnere potrebbe sentirsi escluso.
- **Nessun case study strutturato** — I progetti in portfolio hanno titolo e categoria ma mancano di: problema del cliente, sfida tecnica, soluzione adottata, risultato misurabile. È la differenza tra una galleria foto e una prova di competenza.
- **Settori industriali senza contenuto specifico** — Le 7 card dei settori (Energia, Navale, ecc.) non hanno pagine dedicate. Cliccando non accade nulla. Chi cerca un fornitore per un settore specifico non trova informazioni mirate.
- **Nessuna sezione "Perché noi"** — Non c'è una risposta esplicita alla domanda: "Perché scegliere Evolution rispetto ai concorrenti?" I differenziatori esistono (NDT in-house, capacità chiavi in mano, attrezzature proprie) ma non vengono comunicati con forza.
- **Certificazioni senza dettaglio** — La pagina certificazioni descrive le norme ma non dice cosa significano concretamente per il cliente (es. "ISO 9001:2015 significa che ogni saldatura è tracciata e documentata, zero sorprese in cantiere").

### 3.3 Social Proof e Credibilità

**[ALTA PRIORITÀ]**

- **Zero testimonial o referenze clienti** — Nel settore B2B industriale la credibilità si costruisce con nomi e loghi di aziende clienti (anche solo loghi generici se gli NDA lo impongono). Attualmente il sito sembra un'azienda senza storia commerciale.
- **Nessun logo cliente in homepage** — Una sezione "Hanno già scelto Evolution" con anche 4–5 loghi aumenterebbe immediatamente la percezione di affidabilità.
- **Portfolio senza cliente nominato** — I progetti citano "cliente farmaceutico", "cantiere navale": capisce la riservatezza, ma anche solo il settore e la dimensione aiuterebbero.
- **Nessuna menzione di partner o fornitori certificati** — Materiali, consumabili, partnership con brand noti (Lincoln Electric, ESAB, ecc.) aumenterebbero la percezione di qualità.

### 3.4 Conversione e Call to Action

**[MEDIA PRIORITÀ]**

- **Un'unica CTA ripetuta** — "Richiedi Preventivo" è l'unico invito all'azione. Non tutti i visitatori sono pronti a chiedere un preventivo. Serve una CTA per ogni stadio: "Scopri le capacità", "Scarica il profilo aziendale", "Parla con un tecnico".
- **Nessun documento scaricabile** — Un PDF "Company Profile" o una "Scheda Capacità Produttive" è uno strumento fondamentale nel B2B per chi deve valutare un fornitore internamente o presentarlo ai propri superiori.
- **Form troppo generico per settori diversi** — Chi opera in farmaceutico ha esigenze GMP, chi opera in oil & gas vuole sapere di ATEX: il form attuale non qualifica il lead.
- **Nessun numero WhatsApp o chat** — Per contatti rapidi da mobile, specialmente da mercati internazionali.

### 3.5 SEO e Visibilità

**[MEDIA PRIORITÀ]**

- **Nessun blog o contenuto editoriale** — Il sito è completamente statico in termini di contenuti freschi. Google premia chi aggiorna. Un articolo mensile su normative (EN 1090, PED, ATEX) o su tecniche di saldatura avanzate porterebbe traffico organico qualificato.
- **Meta description generiche** — Alcune pagine hanno meta description standard che non sfruttano le keyword specifiche (es. "carpenteria metallica Puglia", "piping industriale acciaio inox").
- **Nessuna Google My Business ottimizzata** — Non c'è collegamento a recensioni Google o alla scheda GMB.
- **Tempi di caricamento non ottimizzati** — 56 immagini JPG non compresse in portfolio possono rallentare il sito. Nessun lazy-loading esplicito verificato.

### 3.6 Esperienza Utente Mobile

**[BASSA PRIORITÀ]**

- **Portfolio non ottimale su mobile** — La griglia 2 colonne con immagini di progetto può risultare troppo piccola per vedere i dettagli su smartphone.
- **Sezione attrezzature densa** — La lista di 14 macchine con specifiche tecniche è difficile da scorrere su mobile senza filtri o accordion.
- **Toggle lingua poco visibile** — Il pulsante IT/EN nel nav è sottile e può essere difficile da trovare su mobile.

---

## 4. RACCOMANDAZIONI STRATEGICHE

> **Obiettivo:** Trasformare il sito da "vetrina aziendale" a "strumento di acquisizione clienti B2B industriali" che converte visitatori qualificati in richieste di preventivo concrete.

---

### REC-01 — Dare un volto all'azienda
**Impatto: ALTO | Sforzo: BASSO**

Inserire nella homepage e nella pagina "Chi Siamo":
- Foto del titolare/responsabile commerciale con nome e ruolo
- Foto dello stabilimento di Adelfia dall'esterno e dall'interno (officina, macchine al lavoro)
- Foto del team (anche generiche, senza necessità di nominare tutti)

Un'azienda con un volto è un'azienda a cui si dà fiducia. Nel B2B il "chi sono" conta quasi quanto il "cosa faccio".

---

### REC-02 — Creare un Company Profile scaricabile
**Impatto: ALTO | Sforzo: MEDIO**

Produrre un PDF di 4–6 pagine da scaricare contenente:
- Presentazione aziendale (storia, valori, localizzazione)
- Capacità produttive (attrezzature, superfici, organici)
- Servizi chiave con esempi
- Certificazioni
- Contatti

Questo documento viene allegato alle email di presentazione, usato dai commerciali, distribuito in fiera. È lo strumento B2B più importante dopo il sito.

**Azione tecnica:** Aggiungere CTA "Scarica il Profilo Aziendale" nella hero e nella pagina "Chi Siamo" con download diretto.

---

### REC-03 — Trasformare i portfolio in case study
**Impatto: ALTO | Sforzo: MEDIO**

Per ogni progetto in portfolio, strutturare la scheda con:
- **Sfida:** Qual era il problema o la necessità del cliente?
- **Soluzione:** Come Evolution ha risposto (materiali, processi, certificazioni)
- **Risultato:** Tempi, qualità, valore (anche generico: "consegna in 8 settimane", "100% NDT superato al primo collaudo")
- **Settore e anno**
- **Galleria foto** (già presente, ottima base)

Questo trasforma il portfolio da raccolta di foto a dimostrazione di competenza.

---

### REC-04 — Aggiungere sezione Loghi Clienti / Settori serviti
**Impatto: ALTO | Sforzo: BASSO**

Inserire in homepage (dopo "Chi Siamo" o prima del footer):
- Loghi clienti con cui è possibile (anche anonimi con solo settore: "Cantiere navale — Genova")
- Oppure: barra loghi settori serviti (icone industria)
- Oppure: 2–3 citazioni brevi (testimonial) con nome azienda e ruolo

Anche solo i loghi dei settori in cui si ha già lavorato (Energia Enel-like, Difesa, Pharma) aumentano la percezione immediata di esperienza.

---

### REC-05 — Creare pagine dedicate per settore
**Impatto: ALTO | Sforzo: ALTO**

Le 7 card settori in homepage dovrebbero linkare a pagine dedicate con:
- Sfide tipiche di quel settore
- Normative di riferimento (es. PED per energia, ATEX per oil&gas, GMP per farmaceutico)
- Servizi Evolution specifici per quel settore
- Progetti di portfolio filtrati per quel settore

Questo aumenta enormemente il SEO organico e la rilevanza per chi cerca "carpenteria navale Puglia" o "piping farmaceutico GMP".

**Settori da sviluppare (priorità):**
1. Energia & Eolico
2. Oil & Gas / Oleodinamica
3. Farmaceutico & Chimico
4. Navale
5. Aerospace & Difesa
6. Infrastrutture
7. Siderurgico & Cementificio

---

### REC-06 — Aggiungere sezione "Perché Evolution"
**Impatto: MEDIO | Sforzo: BASSO**

Una sezione in homepage (o pagina dedicata) che risponda esplicitamente: **"Cosa ci distingue dai concorrenti?"**

Proposta di 5 differenziatori concreti da evidenziare:
1. **NDT in-house** — Non dipendi da laboratori esterni: controlli più veloci, meno costi, documentazione immediata
2. **Progettazione + produzione** — Dalla specifica al pezzo finito, un unico interlocutore
3. **Attrezzature proprie** — 3.000 m² officina coperta, macchinari heavy-duty: nessun collo di bottiglia da terzisti
4. **Certificazioni aerospace** — EN 9100:2018 in corso: posizionamento in un settore ad altissima barriera d'ingresso
5. **Contratti quadro** — Flessibilità e continuità per chi ha volumi ricorrenti, con account manager dedicato

---

### REC-07 — Ottimizzare per la ricerca B2B
**Impatto: MEDIO | Sforzo: MEDIO**

- Aggiungere meta description specifiche con keyword locali e di settore (es. "Carpenteria metallica industriale Puglia — strutture in acciaio, piping e skid modulari")
- Collegare a Google My Business con foto, orari, categoria attività, raccolta recensioni
- Aggiungere dati strutturati JSON-LD (LocalBusiness, Organization)
- Comprimere immagini portfolio in WebP con lazy loading
- Aggiungere alt text descrittivi su tutte le immagini

---

### REC-08 — Aggiungere canale di contatto rapido
**Impatto: MEDIO | Sforzo: BASSO**

- Aggiungere pulsante WhatsApp Business fisso in basso a destra
- Aggiungere link LinkedIn aziendale (se attivo)
- Valutare chatbot semplice (Tidio o simili, gratuito) per qualificare il lead prima del form

---

### REC-09 — Sezione blog / approfondimenti tecnici
**Impatto: MEDIO lungo termine | Sforzo: ALTO**

Pubblicare 1 articolo al mese su:
- Normative rilevanti (EN 1090, PED 2014/68/UE, ATEX, EN 9100)
- Materiali e processi (saldatura TIG orbitale su P91, duplex vs super-duplex)
- Case study anonimi con dati tecnici reali
- Guide per uffici acquisti ("Come qualificare un fornitore metalmeccanico")

Questo tipo di contenuto attira traffico organico qualificato e posiziona Evolution come autorità tecnica nel settore.

---

### REC-10 — Rafforzare l'identità visiva
**Impatto: MEDIO | Sforzo: MEDIO**

- **Hero con video loop** — 15–30 secondi di riprese dell'officina (saldatura, taglio plasma, montaggio): impatto immediato e differenziante
- **Palette accento** — Aggiungere un colore d'accento caldo (arancio/oro industriale) per i numeri chiave e i differenziatori — il navy + grigio è sobrio ma freddo, un accento caldo aumenta la memorabilità
- **Tipografia sottotitoli** — Valutare font più corsivo o condensato per i claim emozionali (es. "Costruiamo dove altri si fermano")
- **Pattern di progetto** — Sfondo isometrico o tecnico (schizzi CAD, isometrie) nelle sezioni intermedie per comunicare precisione ingegneristica

---

## 5. PIANO DI INTERVENTO

### Fase 1 — Quick Wins (0–30 giorni)
*Interventi ad alto impatto, basso sforzo, nessuna dipendenza esterna*

| # | Azione | Responsabile | Stato |
|---|--------|-------------|-------|
| 1.1 | Foto stabilimento e team in "Chi Siamo" | Fotografi + Dev | [ ] Da fare |
| 1.2 | Aggiungere WhatsApp Business button fisso | Dev | [ ] Da fare |
| 1.3 | Sezione "Perché Evolution" in homepage (5 punti) | Dev + Copywriter | [ ] Da fare |
| 1.4 | Compressione immagini portfolio in WebP + lazy load | Dev | [ ] Da fare |
| 1.5 | Aggiornare meta description di tutte le pagine | Dev | [ ] Da fare |
| 1.6 | Ottimizzare Google My Business con foto e categorie | Marketing | [ ] Da fare |

### Fase 2 — Contenuto Strategico (30–90 giorni)
*Interventi che richiedono produzione di contenuto o materiali*

| # | Azione | Responsabile | Stato |
|---|--------|-------------|-------|
| 2.1 | Produrre Company Profile PDF scaricabile (4–6 pag.) | Grafica + Direzione | [ ] Da fare |
| 2.2 | Ristrutturare 8 progetti portfolio come case study | Copywriter + Dev | [ ] Da fare |
| 2.3 | Aggiungere sezione loghi clienti / testimonial | Commerciale + Dev | [ ] Da fare |
| 2.4 | Aggiungere dati strutturati JSON-LD (LocalBusiness) | Dev | [ ] Da fare |
| 2.5 | Collegare LinkedIn aziendale e aggiornarlo | Marketing | [ ] Da fare |

### Fase 3 — Espansione Strutturale (90–180 giorni)
*Interventi che richiedono sviluppo significativo o produzione estesa*

| # | Azione | Responsabile | Stato |
|---|--------|-------------|-------|
| 3.1 | Creare pagine dedicate per i 7 settori industriali | Dev + Copywriter | [ ] Da fare |
| 3.2 | Video hero di officina (ripresa + editing) | Videomaker | [ ] Da fare |
| 3.3 | Avviare blog tecnico (2 articoli pilota) | Copywriter tecnico | [ ] Da fare |
| 3.4 | Form contatti con campi per settore specifici | Dev | [ ] Da fare |
| 3.5 | Versione stampabile/PDF di ogni scheda progetto | Dev | [ ] Da fare |

### Fase 4 — Ottimizzazione Continua (180+ giorni)
*Attività ricorrenti*

| # | Azione | Cadenza | Responsabile |
|---|--------|---------|-------------|
| 4.1 | Pubblicazione articolo blog | Mensile | Copywriter |
| 4.2 | Aggiunta nuovi progetti al portfolio | Trimestrale | Dev + Produzione |
| 4.3 | Verifica keyword SEO e posizionamento | Trimestrale | Marketing |
| 4.4 | Audit form e tasso conversione | Semestrale | Dev |
| 4.5 | Aggiornamento Company Profile PDF | Semestrale | Grafica |

---

## 6. CHANGELOG AGGIORNAMENTI

> Questa sezione registra ogni miglioramento apportato al sito, con data e descrizione. Aggiornare a ogni deploy significativo.

---

### 2026-04-18
- Aggiunta immagine hero industriale (officina con ingranaggi) come background della hero section (`images/hero-bg.png`)
- Overlay gradient navy→trasparente per leggibilità testo su sfondo fotografico
- Vignetta bottom per transizione morbida verso sezioni successive
- Attiva su entrambe le versioni IT e EN (CSS condiviso)
- Corretta estensione file da `.jpg` a `.png` dopo salvataggio utente
- **Fix bug:** switch lingua IT↔EN dalla homepage apriva pagina vuota — percorsi relativi `../en/index.html` e `../../index.html` errati, corretti in `en/index.html` e `../index.html`

### 2026-04-18 — Allineamento completo IT→EN (italiano come master)
**Principio:** Italiano è il sito master; inglese allineato struttura e contenuto.

**Fix bug italiano:**
- `pages/servizi.html`: rimosso paragrafo duplicato nella sezione Piping Industriale

**Allineamenti versione inglese:**
- `en/index.html`: hero stats corretti (15+→40+, rimossi "8 Countries" e "EXC3", ripristinata card ISO 9001:2015); rimossi emoji dalle capabilities (allineate all'italiano); rimossi emoji dalle service-cards; rimossa sezione "Key Markets" non presente nell'italiano
- `en/pages/services.html`: rimossi emoji (🏗️🔧📦📐🔑📄) dai titoli service-detail, struttura allineata all'italiano
- `en/pages/certifications.html`: hero text allineato all'italiano; section header corretti; sezione "Technical Standards / Reference Standards" sostituita con "Quality as Daily Commitment" (6 service-cards) corrispondente all'italiano; CTA allineata
- `en/pages/contacts.html`: aggiunta voce "Website" (www.evolutionengineering.eu) mancante; orari uffici formattati con `<br>` come nell'italiano

### 2026-04-02
- Aggiunte immagini reali di portfolio (56 foto da officina e cantieri)
- Implementato backend PHP per invio email con allegati (send-email.php)
- Aggiunto download.php per gestione sicura allegati
- Migrazione da FormSubmit.io a backend proprietario PHP

### 2026-03-XX
- Sostituzione favicon con logo Evolution Engineering
- Inserimento form avanzato con upload file (PDF, DWG, STEP, IGES fino a 25 MB)

### 2026-XX-XX
- Struttura bilingue IT/EN completata (12 pagine HTML)
- Design system navy + Space Grotesk + Inter
- Portfolio dinamico da JSON (8 progetti, 56 immagini)
- Attrezzature da JSON (14 macchine con specs)
- Sitemap XML con hreflang per SEO multilingua
- Form contatti con 8 settori industriali dropdown

---

*Documento creato il 2026-04-15 — Aggiornare ad ogni sprint di lavoro sul sito.*
