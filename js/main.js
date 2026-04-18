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
      title_it: "Tubazioni di Recupero Calore",
      title_en: "Heat Recovery Piping",
      category: "piping",
      client: "MINE S.p.A., Pisticci Scalo (MT)",
      year: 2023,
      description_it: "Realizzazione e installazione di tubazioni per il recupero calore presso l'impianto MINE S.p.A. di Pisticci Scalo. Fabbricazione di tratti di grande diametro in acciaio, coibentazione in lana minerale ad alta densità e rivestimento in lamiera di alluminio per il contenimento delle dispersioni termiche.",
      description_en: "Fabrication and installation of piping for heat recovery at MINE S.p.A. plant in Pisticci Scalo. Large diameter steel sections, high-density mineral wool insulation and aluminium cladding to minimise heat losses.",
      image: "images/portfolio/commessa-1/IMG_2820.JPG",
      gallery: ["images/portfolio/commessa-1/IMG_2820.JPG","images/portfolio/commessa-1/IMG_2861.JPG","images/portfolio/commessa-1/IMG_4061.JPG","images/portfolio/commessa-1/IMG_4064.JPG","images/portfolio/commessa-1/PHOTO-2026-04-02-08-21-55.jpg","images/portfolio/commessa-1/PHOTO-2026-04-02-08-21-55_1.jpg","images/portfolio/commessa-1/PHOTO-2026-04-02-08-21-55_2.jpg","images/portfolio/commessa-1/PHOTO-2026-04-02-08-21-55_4.jpg","images/portfolio/commessa-1/PHOTO-2026-04-02-08-21-55_8.jpg","images/portfolio/commessa-1/PHOTO-2026-04-02-08-25-38_1.jpg"],
      tags: ["piping", "coibentazione", "recupero-calore"]
    },
    {
      id: 2,
      title_it: "Reti Idroniche – Ospedale San Cataldo",
      title_en: "Hydronic Networks – San Cataldo Hospital",
      category: "piping",
      client: "Nuovo Ospedale San Cataldo, Taranto",
      year: 2023,
      description_it: "Costruzione, fornitura, montaggio e coibentazione delle reti secondarie idroniche presso il cantiere del Nuovo Ospedale San Cataldo di Taranto. Prefabbricazione con saldatura TIG e controlli radiografici, posa a soffitto e coibentazione K-Flex per impianti di riscaldamento e raffrescamento.",
      description_en: "Fabrication, supply, installation and insulation of secondary hydronic networks at the new San Cataldo Hospital, Taranto. TIG welding with radiographic inspection, ceiling-mounted installation and K-Flex insulation for HVAC systems.",
      image: "images/portfolio/commessa-2/PHOTO-2023-09-07-10-41-11.jpg",
      gallery: ["images/portfolio/commessa-2/PHOTO-2023-09-07-10-41-11.jpg","images/portfolio/commessa-2/PHOTO-2023-09-07-10-41-11_1.jpg","images/portfolio/commessa-2/PHOTO-2026-04-02-08-21-56_1.jpg","images/portfolio/commessa-2/PHOTO-2026-04-02-08-21-56_13.jpg","images/portfolio/commessa-2/PHOTO-2026-04-02-08-21-56_3.jpg","images/portfolio/commessa-2/PHOTO-2026-04-02-08-21-56_8.jpg"],
      tags: ["piping", "coibentazione", "impianti-civili"]
    },
    {
      id: 3,
      title_it: "Impianto Trattamento Acque Industriali",
      title_en: "Industrial Water Treatment Plant",
      category: "piping",
      client: "Acciaierie d'Italia, Taranto",
      year: 2023,
      description_it: "Fornitura, costruzione e montaggio di impianto di trattamento acque industriali presso lo stabilimento siderurgico di Taranto. Serbatoi in pressione, reti di tubazioni in PE ad alta densità e acciaio inox, complete di valvolame e apparecchiature accessorie.",
      description_en: "Supply, fabrication and installation of an industrial water treatment plant at the Taranto steelworks. Pressure vessels, HDPE and stainless steel piping networks, complete with valves and accessories.",
      image: "images/portfolio/commessa-3/PHOTO-2023-07-05-09-19-34.jpg",
      gallery: ["images/portfolio/commessa-3/PHOTO-2023-07-05-09-19-34.jpg","images/portfolio/commessa-3/PHOTO-2023-07-05-09-19-35.jpg","images/portfolio/commessa-3/PHOTO-2023-07-05-09-19-37.jpg"],
      tags: ["piping", "acciaio-inox", "trattamento-acque"]
    },
    {
      id: 4,
      title_it: "Tubazioni Grandi Diametri per Caldaieria",
      title_en: "Large Diameter Boilermaking Pipes",
      category: "piping",
      client: "Industria — Italia",
      year: 2024,
      description_it: "Fornitura di tubazioni di grande diametro (52\", 56\", 60\") in acciaio ASTM A516 Gr. 70, sp. 20 mm. Lavorazione con taglio plasma bevel 3D, calandratura CNC a 4 rulli, saldatura ad arco sommerso con doppia penetrazione e controllo radiografico.",
      description_en: "Supply of large diameter pipes (52\", 56\", 60\") in ASTM A516 Gr. 70 steel, 20 mm thick. Processed by 3D bevel plasma cutting, 4-roll CNC plate rolling, double-pass submerged arc welding and radiographic inspection.",
      image: "images/portfolio/commessa-4/IMG_6850.JPG",
      gallery: ["images/portfolio/commessa-4/IMG_6850.JPG","images/portfolio/commessa-4/PHOTO-2026-04-02-08-21-55_13.jpg","images/portfolio/commessa-4/PHOTO-2026-04-02-08-21-55_5.jpg","images/portfolio/commessa-4/PHOTO-2026-04-02-08-25-38_3.jpg"],
      tags: ["piping", "caldaieria", "alta-pressione"]
    },
    {
      id: 5,
      title_it: "Selle di Trasporto per Tubazione",
      title_en: "Transport Saddles for Large Pipeline",
      category: "carpenteria",
      client: "Porto di Taranto",
      year: 2024,
      description_it: "Costruzione e fornitura di selle di trasporto in carpenteria metallica pesante per il sostegno di una tubazione di grande diametro da 52 metri. Progettate su misura per il trasporto eccezionale su strada fino al Porto di Taranto, dove la tubazione è stata imbarcata e spedita via mare.",
      description_en: "Fabrication and supply of heavy steel transport saddles for supporting a 52-metre large-diameter pipeline. Custom-designed for oversize road transport to the Port of Taranto for onward sea shipment.",
      image: "images/portfolio/commessa-5/PHOTO-2026-04-02-08-21-57_1.jpg",
      gallery: ["images/portfolio/commessa-5/PHOTO-2026-04-02-08-21-57_1.jpg","images/portfolio/commessa-5/PHOTO-2026-04-02-08-21-57_2.jpg"],
      tags: ["carpenteria", "trasporto-eccezionale", "portuale"]
    },
    {
      id: 6,
      title_it: "Rampa di Carico – Marina Militare Italiana",
      title_en: "Loading Ramp – Italian Navy",
      category: "navale",
      client: "Marina Militare Italiana",
      year: 2023,
      description_it: "Costruzione, fornitura e montaggio di rampa di carico in carpenteria metallica pesante per nave cargo della Marina Militare Italiana. Taglio e lavorazione della lamiera, assemblaggio e saldatura delle strutture portanti, verniciatura in verde militare e montaggio a bordo.",
      description_en: "Fabrication, supply and installation of a heavy steel loading ramp for an Italian Navy cargo vessel. Steel cutting and forming, structural assembly and welding, military-green coating and on-board fitting.",
      image: "images/portfolio/commessa-6/IMG_6228.JPG",
      gallery: ["images/portfolio/commessa-6/IMG_6228.JPG","images/portfolio/commessa-6/IMG_6286.JPG","images/portfolio/commessa-6/PHOTO-2026-04-02-08-21-55_10.jpg","images/portfolio/commessa-6/PHOTO-2026-04-02-08-21-55_7.jpg"],
      tags: ["navale", "carpenteria", "marina-militare"]
    },
    {
      id: 7,
      title_it: "Assemblaggio Modulo Scafo – Benetti Yachts",
      title_en: "Hull Module Assembly – Benetti Yachts",
      category: "navale",
      client: "Benetti Yachts, Taranto",
      year: 2023,
      description_it: "Fornitura di manodopera specializzata per la pulizia, l'assemblaggio e la saldatura di un modulo di scafo per yacht del cantiere Benetti presso lo stabilimento di Taranto. Preparazione particolari in lamiera, assemblaggio strutturale e saldatura nel rispetto degli standard qualitativi Benetti.",
      description_en: "Specialist labour supply for cleaning, assembly and welding of a yacht hull module at Benetti's Taranto facility. Steel component preparation, structural assembly and welding in compliance with Benetti quality standards.",
      image: "images/portfolio/commessa-7/PHOTO-2026-04-02-08-21-56_9.jpg",
      gallery: ["images/portfolio/commessa-7/PHOTO-2026-04-02-08-21-56_9.jpg","images/portfolio/commessa-7/PHOTO-2026-04-02-08-21-57_10.jpg","images/portfolio/commessa-7/PHOTO-2026-04-02-08-21-57_6.jpg","images/portfolio/commessa-7/PHOTO-2026-04-02-08-21-57_7.jpg"],
      tags: ["navale", "scafo", "saldatura"]
    },
    {
      id: 8,
      title_it: "Centine di Rinforzo Condotte – Acciaierie d'Italia",
      title_en: "Duct Reinforcement Frames – Acciaierie d'Italia",
      category: "carpenteria",
      client: "Acciaierie d'Italia, Taranto",
      year: 2022,
      description_it: "Costruzione e fornitura di circa 11.300 centine ad arco in acciaio per il rinforzo delle condotte di aspirazione acqua – circa 2.100 t in due lotti. Calandratura e piegatura con pressa idraulica, assemblaggio e saldatura robotizzata, zincatura a caldo del prodotto finito.",
      description_en: "Fabrication and supply of approx. 11,300 steel arch frames for reinforcing water intake ducts – approx. 2,100 t in two lots. Hydraulic press rolling and bending, robotic assembly and welding, hot-dip galvanising of finished product.",
      image: "images/portfolio/commessa-8/Centine.JPG",
      gallery: ["images/portfolio/commessa-8/Centine.JPG","images/portfolio/commessa-8/Centine 2.JPG","images/portfolio/commessa-8/PHOTO-2026-04-02-08-21-55_6.jpg","images/portfolio/commessa-8/Saldatura centine.JPG"],
      tags: ["carpenteria", "zincatura", "strutture"]
    },
    {
      id: 9,
      title_it: "Travi in Acciaio EXC3 – Export Emirati Arabi",
      title_en: "EXC3 Steel Beams – UAE Export",
      category: "carpenteria",
      client: "Export — Emirati Arabi Uniti",
      year: 2024,
      description_it: "Costruzione e fornitura di 52 tonnellate di travi in acciaio profilo UB 533, destinate all'esportazione negli Emirati Arabi. Commessa eseguita in Classe di Esecuzione EXC3 secondo EN 1090, con preparazione superficiale P2, saldatori certificati e documentazione completa WPS/PQR/WPQR.",
      description_en: "Fabrication and supply of 52 tonnes of UB 533 steel beams for export to the UAE. Order executed to Execution Class EXC3 per EN 1090, with P2 surface preparation, certified welders and full WPS/PQR/WPQR documentation.",
      image: "images/portfolio/commessa-9/PHOTO-2026-04-02-08-21-57.jpg",
      gallery: ["images/portfolio/commessa-9/PHOTO-2026-04-02-08-21-57.jpg","images/portfolio/commessa-9/PHOTO-2026-04-02-08-21-57_4.jpg","images/portfolio/commessa-9/PHOTO-2026-04-02-08-21-57_9.jpg"],
      tags: ["carpenteria", "strutture", "en1090"]
    },
    {
      id: 10,
      title_it: "Pareti Coibentate REI 120",
      title_en: "REI 120 Insulated Wall Panels",
      category: "carpenteria",
      client: "Provincia di Taranto",
      year: 2024,
      description_it: "Realizzazione di oltre 4.000 m² di pareti coibentate in pannelli REI 120 (sp. 120-150 mm) in un capannone industriale di circa 50.000 m² nella provincia di Taranto. Montaggio carpenteria metallica, posa pannelli con ventosa e mezzi di sollevamento, lattoneria di completamento.",
      description_en: "Installation of over 4,000 m² of REI 120 insulated panels (120-150 mm thick) in an industrial shed of approx. 50,000 m² in the Taranto area. Steel framework erection, panel installation with vacuum lifter and cranes, completion flashings.",
      image: "images/portfolio/commessa-10/PHOTO-2026-04-02-08-21-56_10.jpg",
      gallery: ["images/portfolio/commessa-10/PHOTO-2026-04-02-08-21-56_10.jpg","images/portfolio/commessa-10/PHOTO-2026-04-02-08-21-56_14.jpg","images/portfolio/commessa-10/PHOTO-2026-04-02-08-21-56_17.jpg","images/portfolio/commessa-10/PHOTO-2026-04-02-08-21-56_21.jpg","images/portfolio/commessa-10/PHOTO-2026-04-02-08-21-56_22.jpg","images/portfolio/commessa-10/PHOTO-2026-04-02-08-21-56_23.jpg"],
      tags: ["carpenteria", "coibentazione", "antincendio"]
    },
    {
      id: 11,
      title_it: "Serbatoi e Tubazioni in Acciaio Duplex",
      title_en: "Duplex Stainless Steel Tanks & Piping",
      category: "serbatoi",
      client: "Acciaierie d'Italia, Taranto",
      year: 2024,
      description_it: "Costruzione, fornitura, montaggio e trasporto di serbatoi e tubazioni in acciaio inossidabile duplex per l'impianto solfato di Acciaierie d'Italia. Fabbricazione in officina, trasporto eccezionale al sito e montaggio in quota mediante gru.",
      description_en: "Fabrication, supply, installation and transport of duplex stainless steel tanks and piping for the sulphate plant at Acciaierie d'Italia. Shop fabrication, oversize road transport to site and crane-assisted elevated installation.",
      image: "images/portfolio/commessa-11/IMG_1808.jpeg",
      gallery: ["images/portfolio/commessa-11/IMG_1808.jpeg","images/portfolio/commessa-11/PHOTO-2024-11-28-14-32-48.jpg","images/portfolio/commessa-11/PHOTO-2026-04-02-08-21-56_19.jpg","images/portfolio/commessa-11/PHOTO-2026-04-02-08-21-56_4.jpg","images/portfolio/commessa-11/serbatioi duplex rev.png","images/portfolio/commessa-11/trasporto serbatoio.png"],
      tags: ["serbatoi", "acciaio-inox", "duplex"]
    },
    {
      id: 12,
      title_it: "Serbatoi in Pressione – Porto di Taranto",
      title_en: "Pressure Vessels – Port of Taranto",
      category: "serbatoi",
      client: "Porto di Taranto",
      year: 2023,
      description_it: "Costruzione, fornitura e trasporto di serbatoi in pressione di grandi dimensioni, verniciati e completi di bocchelli e attacchi flangiati. Movimentazione con gru e trasporto eccezionale su pianale fino al Porto di Taranto per imbarco e spedizione via mare.",
      description_en: "Fabrication, supply and transport of large pressure vessels, painted and complete with nozzles and flanged connections. Crane handling and oversize transport to the Port of Taranto for loading and sea shipment.",
      image: "images/portfolio/commessa-12/PHOTO-2026-04-02-08-21-55_9.jpg",
      gallery: ["images/portfolio/commessa-12/PHOTO-2026-04-02-08-21-55_9.jpg","images/portfolio/commessa-12/PHOTO-2026-04-02-08-21-55_12.jpg"],
      tags: ["serbatoi", "pressione", "trasporto-eccezionale"]
    },
    {
      id: 13,
      title_it: "Torri Eoliche – Tozzi Green",
      title_en: "Wind Towers – Tozzi Green",
      category: "carpenteria",
      client: "Tozzi Green",
      year: 2022,
      description_it: "Costruzione e fornitura di torri eoliche, comprensive del concio di fondazione, per Tozzi Green. Fabbricazione dei tronchi di torre in carpenteria metallica pesante e verniciatura con ciclo marino a 320 micron nel rispetto delle normative per il settore eolico.",
      description_en: "Fabrication and supply of wind towers including foundation sections for Tozzi Green. Heavy steel tower can fabrication and marine-grade coating to 320 microns in accordance with wind industry standards.",
      image: "images/portfolio/commessa-13/Torre eolica.JPG",
      gallery: ["images/portfolio/commessa-13/Torre eolica.JPG"],
      tags: ["carpenteria", "eolico", "verniciatura"]
    },
    {
      id: 14,
      title_it: "Tralicci per Ascensore Industriale – Acciaierie d'Italia",
      title_en: "Lattice Towers for Industrial Lift – Acciaierie d'Italia",
      category: "carpenteria",
      client: "Acciaierie d'Italia, Taranto",
      year: 2023,
      description_it: "Costruzione e montaggio di tralicci in carpenteria metallica zincata, alti circa 90 metri, per alloggiare un ascensore industriale presso Acciaierie d'Italia. Fabbricazione in officina, zincatura a caldo e montaggio in quota mediante gru e piattaforme aeree.",
      description_en: "Fabrication and erection of hot-dip galvanised steel lattice towers approx. 90 metres tall to house an industrial lift at Acciaierie d'Italia. Shop fabrication, hot-dip galvanising and elevated assembly by crane and aerial work platforms.",
      image: "images/portfolio/commessa-14/IMG_9046.jpeg",
      gallery: ["images/portfolio/commessa-14/IMG_9046.jpeg","images/portfolio/commessa-14/A5CC6408-4BC6-40FB-87A4-9FEB7CEF0958.JPG","images/portfolio/commessa-14/PHOTO-2026-04-02-08-21-56_20.jpg"],
      tags: ["carpenteria", "strutture", "zincatura"]
    },
    {
      id: 15,
      title_it: "Ricostruzione Tramoggia Portuale – Italcave",
      title_en: "Port Hopper Reconstruction – Italcave",
      category: "carpenteria",
      client: "Italcave S.p.A., Taranto",
      year: 2024,
      description_it: "Ricostruzione completa di tramoggia portuale, cassa filtri e rompizolla per impianto di scarico minerali da nave a Taranto. Corpo tramoggia in acciaio antiusura Hardox 450, zincatura a caldo di tutti i componenti, fornitura e montaggio cassa filtri e rompizolla.",
      description_en: "Full reconstruction of a port hopper, filter box and lump-breaker for a ship-unloading mineral plant in Taranto. Hopper body in Hardox 450 wear-resistant steel, hot-dip galvanising of all components, supply and installation of filter box and lump-breaker.",
      image: "images/portfolio/commessa-15/IMG_6996.JPG",
      gallery: ["images/portfolio/commessa-15/IMG_6996.JPG","images/portfolio/commessa-15/PHOTO-2026-04-02-08-25-38.jpg","images/portfolio/commessa-15/b3bb7592-7dbf-4745-8607-a2977c7ae284.JPG","images/portfolio/commessa-15/d78f37a1-3969-414c-810a-fc6b2f47d1e0.JPG","images/portfolio/commessa-15/da579d5d-31b0-4d23-809e-7052ee3669e4.JPG"],
      tags: ["carpenteria", "hardox", "portuale"]
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
    const title   = lang === 'en' ? p.title_en : p.title_it;
    const desc    = lang === 'en' ? p.description_en : p.description_it;
    const tags    = (p.tags || []).map(t => '<span class="tag">' + t + '</span>').join('');
    var imgSrc    = p.image ? prefix + p.image : '';
    var gallery   = (p.gallery && p.gallery.length) ? p.gallery.map(g => prefix + g) : (imgSrc ? [imgSrc] : []);
    var galleryJS = JSON.stringify(gallery).replace(/'/g, "\\'");
    var photoCount = gallery.length > 1 ? '<span class="project-card__count">&#x1F4F7; ' + gallery.length + '</span>' : '';

    return '<article class="project-card reveal" data-category="' + p.category + '">' +
      '<div class="project-card__img placeholder img-placeholder" style="cursor:pointer;height:220px;position:relative"' +
        (gallery.length ? ' onclick="openGallery(' + galleryJS.replace(/"/g, '&quot;') + ',0)"' : '') + '>' +
        (imgSrc
          ? '<img src="' + imgSrc + '" alt="' + title + '" style="width:100%;height:220px;object-fit:cover;" onerror="this.parentElement.innerHTML=\'<span>Foto in arrivo</span>\'">'
          : '<span>Foto in arrivo</span>') +
        photoCount +
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
   7. LIGHTBOX con galleria
   ============================================================ */
var _lbGallery = [];
var _lbIndex   = 0;

function openGallery(images, startIndex) {
  _lbGallery = Array.isArray(images) ? images : [images];
  _lbIndex   = startIndex || 0;
  _renderLightbox();
}

function openLightbox(src) {
  openGallery([src], 0);
}

function _renderLightbox() {
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cnt = document.getElementById('lightbox-counter');
  const prv = document.getElementById('lightbox-prev');
  const nxt = document.getElementById('lightbox-next');
  if (!lb || !img) return;
  img.src = _lbGallery[_lbIndex];
  if (cnt) cnt.textContent = (_lbGallery.length > 1) ? (_lbIndex + 1) + ' / ' + _lbGallery.length : '';
  if (prv) prv.style.display = _lbGallery.length > 1 ? '' : 'none';
  if (nxt) nxt.style.display = _lbGallery.length > 1 ? '' : 'none';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function lbPrev() { if (_lbGallery.length > 1) { _lbIndex = (_lbIndex - 1 + _lbGallery.length) % _lbGallery.length; _renderLightbox(); } }
function lbNext() { if (_lbGallery.length > 1) { _lbIndex = (_lbIndex + 1) % _lbGallery.length; _renderLightbox(); } }

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
    if (e.key === 'Escape')       closeLightbox();
    if (e.key === 'ArrowLeft')    lbPrev();
    if (e.key === 'ArrowRight')   lbNext();
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
