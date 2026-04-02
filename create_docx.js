const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, PageBreak,
        HeadingLevel, AlignmentType, WidthType, BorderStyle, ShadingType, VerticalAlign } = require('docx');
const fs = require('fs');

// Colori
const NAVY = "0A192F";
const BLUE = "0081C9";
const LIGHT_GRAY = "F8FAFC";

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: NAVY },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: BLUE },
        paragraph: { spacing: { before: 180, after: 120 }, outlineLevel: 1 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // ===== COPERTINA =====
      new Paragraph({
        text: "",
        spacing: { before: 720, after: 720 }
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        children: [new TextRun("EVOLUTION ENGINEERING & SERVICES S.R.L.")]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 120 },
        children: [new TextRun({
          text: "Soluzioni Metalliche Integrate",
          bold: true,
          size: 24,
          color: BLUE
        })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 480 },
        children: [new TextRun({
          text: "Carpenteria Strutturale | Piping Industriale | Moduli Prefabbricati",
          size: 20,
          color: "6B7280"
        })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 480 },
        children: [new TextRun({
          text: "Documento Word per Revisione",
          italic: true,
          size: 20,
          color: "6B7280"
        })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
          text: "Modifica, salva e rispedisci per implementare le correzioni",
          italic: true,
          size: 18,
          color: "6B7280"
        })]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ===== CHI SIAMO =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("CHI SIAMO")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "Evolution Engineering & Services S.r.l. ",
          bold: true
        }), new TextRun("è un general contractor specializzato in soluzioni metalliche integrate per EPC contractor e system integrator europei.")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "40+ anni di esperienza ",
          bold: true
        }), new TextRun("nella realizzazione di carpenteria strutturale, piping industriale e moduli prefabbricati per i settori energia, oil & gas, farmaceutico e navale.")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        shading: { fill: "F0F4F8", type: ShadingType.CLEAR },
        children: [new TextRun({
          text: "Certificazioni in corso: ISO 9001:2015 e EN 9100:2018",
          bold: true
        })]
      }),

      // ===== SERVIZI =====
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("SERVIZI PRINCIPALI")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Carpenteria Metallica", bold: true }), new TextRun(": Strutture in acciaio S275/S355, travi, profili, bullonature. Lavorazioni conformi a EN 1090, EN ISO 3834.")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Piping Industriale", bold: true }), new TextRun(": Prefabbricazione e montaggio tubi acciaio/inox. DN25-DN500, saldatura qualificata EN ISO 15614, controlli NDT completi.")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Skid & Moduli Prefabbricati", bold: true }), new TextRun(": Moduli process prefabbricati, strutture modulari per settori GMP e oil & gas.")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Progettazione", bold: true }), new TextRun(": CAD 3D, dimensionamento secondo normative internazionali (ASME, EN, PED).")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({ text: "Controlli NDT", bold: true }), new TextRun(": Radiografie (RT), ultrasuoni (UT), liquidi penetranti (PT), particelle magnetiche (MT). Personale certificato EN ISO 9712.")]
      }),

      // ===== SETTORI =====
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("SETTORI DI APPLICAZIONE")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Energia e Cogenerazione: ", bold: true }), new TextRun("Impianti termici, boiler, economizzatori")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Oil & Gas: ", bold: true }), new TextRun("Topsides, manifold, skid process")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Farmaceutico (GMP): ", bold: true }), new TextRun("Impianti sterili, classificati, tracciabili")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Navale: ", bold: true }), new TextRun("Scafi, sezioni di coperta, componenti strutturali")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({ text: "Industria Pesante: ", bold: true }), new TextRun("Infrastrutture, grandi strutture metalliche")]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ===== CAPACITÀ PRODUTTIVE =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("CAPACITÀ PRODUTTIVE")]
      }),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3000, 6360],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 3000, type: WidthType.DXA },
                shading: { fill: NAVY, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Attrezzatura", bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                width: { size: 6360, type: WidthType.DXA },
                shading: { fill: NAVY, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: "Specifiche", bold: true, color: "FFFFFF" })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 3000, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Taglio Plasma CNC")] })]
              }),
              new TableCell({
                borders,
                width: { size: 6360, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Spessori 1-80mm | Piano 3000×12000mm | Tolleranza ±0,5mm")] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 3000, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Taglio Ossigas CNC")] })]
              }),
              new TableCell({
                borders,
                width: { size: 6360, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Spessori 10-250mm | 3 cannelli | Piano 4000×12000mm")] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 3000, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Saldatura SAW")] })]
              }),
              new TableCell({
                borders,
                width: { size: 6360, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Corrente fino a 1200A | Velocità 0.5-2.5 m/min")] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 3000, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Saldatura TIG Orbitale")] })]
              }),
              new TableCell({
                borders,
                width: { size: 6360, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Diametri 6-323mm | EN ISO 15614 | GMP certificata")] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 3000, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Pressa Piegatrice 650T")] })]
              }),
              new TableCell({
                borders,
                width: { size: 6360, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Forza 650T | Lunghezza 6000mm | Spessore 60mm")] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 3000, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Sabbiatrice Automatica")] })]
              }),
              new TableCell({
                borders,
                width: { size: 6360, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Tunnel 2000×2000mm | Grado Sa 2.5")] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 3000, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Tornitura CNC Ø2000")] })]
              }),
              new TableCell({
                borders,
                width: { size: 6360, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Diametro max 2000mm | Lunghezza 8000mm")] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 3000, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Gru a Ponte 20T")] })]
              }),
              new TableCell({
                borders,
                width: { size: 6360, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun("Portata 20T | Luce 24m | Altezza 10m")] })]
              })
            ]
          })
        ]
      }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("")] }),

      new Paragraph({ children: [new PageBreak()] }),

      // ===== PORTFOLIO =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("PORTFOLIO PROGETTI")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "Struttura Portante Turbina Eolica (2024)",
          bold: true
        }), new TextRun("\nAcciaio S355 | EN 1090 EXC3 | Verniciatura C5-M | Nord Europa")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "Skid Processo Farmaceutico GMP (2024)",
          bold: true
        }), new TextRun("\nAISI 316L | Piping sanitario | IQ/OQ | Svizzera")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "Piping Industriale Impianto Energia (2023)",
          bold: true
        }), new TextRun("\nAcciaio carbonio e inox | Pressioni 40 bar | Germania")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "Moduli Prefabbricati Oil & Gas (2023)",
          bold: true
        }), new TextRun("\nStruttura modulare S275 | PED e ATEX | Benelux")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "Carpenteria Pesante Infrastrutture (2022)",
          bold: true
        }), new TextRun("\nTravi HEB | Bullonature classe 8.8 | Italia")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "Rack Piping Alta Pressione (2022)",
          bold: true
        }), new TextRun("\nTubi P91 | TIG orbitale | Controlli RT+UT 100% | Francia")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "Costruzione Navale - Scafo Acciaio (2023)",
          bold: true
        }), new TextRun("\nLaminati fino a 100mm | Saldatura sottoacqua | Mediterraneo")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "Tubazioni Coibentate Termoelettrico (2024)",
          bold: true
        }), new TextRun("\nAcciaio P11 | Coibentazione ceramica 50mm | Pressioni 100 bar")]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ===== QUALITÀ =====
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("QUALITÀ E NORMATIVE")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Certificazioni")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("ISO 9001:2015 - Qualità e processi")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun("EN 9100:2018 - Aerospaziale (applicabile a settori industriali critici)")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Normative di Riferimento")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("EN 1090 - Carpenteria metallica strutturale")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("EN ISO 3834 - Qualità saldature")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("EN ISO 15614 - Qualificazione procedimenti di saldatura")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("ASME IX - Qualificazione saldatori")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("PED 2014/68/UE - Attrezzature in pressione")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun("EN ISO 9712 - Personale NDT certificato")]
      }),

      // ===== CONTATTI =====
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("CONTATTI")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Email: ", bold: true }), new TextRun("info@evolutionengineering.eu")]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({ text: "Sito Web: ", bold: true }), new TextRun("www.evolutionengineering.eu")]
      }),

      // ===== FOOTER =====
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 480 },
        border: { top: { style: BorderStyle.SINGLE, size: 6, color: NAVY, space: 1 } },
        children: [new TextRun({
          text: "© 2025 Evolution Engineering & Services S.r.l. — Tutti i diritti riservati",
          size: 18,
          color: "6B7280"
        })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
          text: "Documento generato automaticamente | 02 Aprile 2025",
          size: 18,
          color: "6B7280"
        })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("sito_evolution_engineering.docx", buffer);
  console.log("✅ File Word creato: sito_evolution_engineering.docx");
});
