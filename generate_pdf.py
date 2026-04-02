#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genera un PDF stampabile del sito Evolution Engineering & Services
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm, inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, Image
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
import os

# Configurazione
PDF_OUTPUT = "sito_evolution_engineering.pdf"
LOGO_PATH = "images/logo/logo-mark.svg"

# Colori del brand
NAVY = colors.HexColor("#0a192f")
BLUE = colors.HexColor("#0081c9")
LIGHT_BG = colors.HexColor("#f8fafc")
TEXT_DARK = colors.HexColor("#1a1f2e")
TEXT_MUTED = colors.HexColor("#6b7280")

# Stili personalizzati
styles = getSampleStyleSheet()

# Stile titolo
style_title = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=28,
    textColor=NAVY,
    spaceAfter=12,
    alignment=TA_CENTER,
    fontName='Helvetica-Bold'
)

# Stile sottotitolo
style_subtitle = ParagraphStyle(
    'CustomSubtitle',
    parent=styles['Heading2'],
    fontSize=16,
    textColor=BLUE,
    spaceAfter=12,
    fontName='Helvetica-Bold'
)

# Stile body
style_body = ParagraphStyle(
    'CustomBody',
    parent=styles['Normal'],
    fontSize=10,
    textColor=TEXT_DARK,
    alignment=TA_JUSTIFY,
    spaceAfter=8,
    lineHeight=14
)

# Crea il documento
doc = SimpleDocTemplate(
    PDF_OUTPUT,
    pagesize=A4,
    rightMargin=1.5*cm,
    leftMargin=1.5*cm,
    topMargin=1.5*cm,
    bottomMargin=1.5*cm
)

story = []

# ===== COPERTINA =====
story.append(Spacer(1, 2*cm))
story.append(Paragraph("EVOLUTION ENGINEERING & SERVICES S.R.L.", style_title))
story.append(Spacer(1, 0.5*cm))
story.append(Paragraph("Soluzioni Metalliche Integrate", style_subtitle))
story.append(Spacer(1, 0.5*cm))
story.append(Paragraph(
    "Carpenteria Strutturale | Piping Industriale | Moduli Prefabbricati",
    ParagraphStyle('meta', parent=styles['Normal'], fontSize=11, textColor=TEXT_MUTED, alignment=TA_CENTER)
))
story.append(Spacer(1, 3*cm))
story.append(Paragraph("Documento stampabile per revisione",
    ParagraphStyle('meta', parent=styles['Normal'], fontSize=10, textColor=TEXT_MUTED, alignment=TA_CENTER, italic=True)
))
story.append(PageBreak())

# ===== PAGINA 1: CHI SIAMO =====
story.append(Paragraph("CHI SIAMO", style_subtitle))
story.append(Spacer(1, 0.3*cm))
story.append(Paragraph(
    "Evolution Engineering & Services S.r.l. è un general contractor specializzato in soluzioni metalliche integrate per EPC contractor e system integrator europei.",
    style_body
))
story.append(Spacer(1, 0.3*cm))
story.append(Paragraph(
    "<b>40+ anni di esperienza</b> nella realizzazione di carpenteria strutturale, piping industriale e moduli prefabbricati per i settori energia, oil & gas, farmaceutico e navale.",
    style_body
))
story.append(Spacer(1, 0.3*cm))
story.append(Paragraph(
    "<b>In fase di certificazione:</b> ISO 9001:2015 | EN 9100:2018",
    style_body
))
story.append(Spacer(1, 0.8*cm))

# ===== SERVIZI =====
story.append(Paragraph("SERVIZI PRINCIPALI", style_subtitle))
story.append(Spacer(1, 0.3*cm))

services_data = [
    ["Carpenteria Metallica", "Strutture in acciaio S275/S355, travi, profili, bullonature"],
    ["Piping Industriale", "Prefabbricazione e montaggio tubi acciaio/inox, DN25-DN500"],
    ["Skid & Moduli", "Moduli process prefabbricati, strutture modulari, sistemi integrati"],
    ["Progettazione", "CAD 3D, esecutivi, dimensionamento secondo normative internazionali"],
    ["Controlli NDT", "Radiografie, ultrasuoni, liquidi penetranti, particelle magnetiche EN ISO 9712"],
]

service_style = ParagraphStyle('service', parent=styles['Normal'], fontSize=9, textColor=TEXT_DARK)
for service_name, service_desc in services_data:
    story.append(Paragraph(f"<b>• {service_name}:</b> {service_desc}", service_style))
    story.append(Spacer(1, 0.15*cm))

story.append(Spacer(1, 0.8*cm))

# ===== SETTORI =====
story.append(Paragraph("SETTORI DI APPLICAZIONE", style_subtitle))
story.append(Spacer(1, 0.3*cm))

sectors = ["Energia e Cogenerazione", "Oil & Gas", "Farmaceutico (GMP)", "Navale", "Industria Pesante"]
sectors_text = " | ".join(sectors)
story.append(Paragraph(sectors_text, ParagraphStyle('sectors', parent=styles['Normal'], fontSize=10, textColor=BLUE, alignment=TA_CENTER)))

story.append(Spacer(1, 0.8*cm))

# ===== CAPACITÀ PRODUTTIVE =====
story.append(Paragraph("CAPACITÀ PRODUTTIVE", style_subtitle))
story.append(Spacer(1, 0.3*cm))

capacity_data = [
    ["Taglio Plasma CNC", "Spessori 1-80mm, piano 3000×12000mm"],
    ["Taglio Ossigas", "Spessori 10-250mm per carpenteria pesante"],
    ["Saldatura SAW", "Giunzioni longitudinali/circolari fino a 1200A"],
    ["Saldatura TIG Orbitale", "Piping sanitario/industriale DN6-DN323"],
    ["Pressa Piegatrice 650T", "Lamiere fino a 60mm, tolleranza ±0.2°"],
    ["Sabbiatrice Automatica", "Tunnel 2000×2000mm, grado Sa 2.5"],
    ["Tornitura CNC Ø2000", "Componenti cilindrici fino a 8000mm"],
    ["Gru a Ponte 20T", "Movimentazione strutture, luce 24m"],
]

for equip, specs in capacity_data:
    story.append(Paragraph(f"<b>• {equip}:</b> {specs}", service_style))
    story.append(Spacer(1, 0.1*cm))

story.append(PageBreak())

# ===== PAGINA 2: PORTFOLIO PROGETTI =====
story.append(Paragraph("PORTFOLIO PROGETTI", style_subtitle))
story.append(Spacer(1, 0.3*cm))

projects_data = [
    ["Struttura Portante Turbina Eolica", "Acciaio S355, EN 1090 EXC3, verniciatura C5-M | 2024"],
    ["Skid Processo Farmaceutico GMP", "AISI 316L, piping sanitario, IQ/OQ | 2024"],
    ["Piping Industriale Impianto Energia", "Acciaio carbonio/inox, pressioni 40 bar | 2023"],
    ["Moduli Prefabbricati Oil & Gas", "Struttura modulare S275, PED/ATEX | 2023"],
    ["Carpenteria Pesante Infrastrutture", "Travi HEB, bullonature classe 8.8 | 2022"],
    ["Rack Piping Alta Pressione", "Tubi P91, TIG orbitale, controlli RT+UT 100% | 2022"],
    ["Costruzione Navale - Scafo Acciaio", "Laminati 100mm, saldatura sottoacqua | 2023"],
    ["Tubazioni Coibentate Termoelettrico", "Acciaio P11, coibentazione ceramica 50mm | 2024"],
]

project_style = ParagraphStyle('project', parent=styles['Normal'], fontSize=9, textColor=TEXT_DARK, spaceAfter=6)
for proj_name, proj_info in projects_data:
    story.append(Paragraph(f"<b>▪ {proj_name}</b><br/>{proj_info}", project_style))
    story.append(Spacer(1, 0.1*cm))

story.append(Spacer(1, 0.8*cm))

# ===== CONTATTI =====
story.append(Paragraph("CONTATTI", style_subtitle))
story.append(Spacer(1, 0.3*cm))

contact_style = ParagraphStyle('contact', parent=styles['Normal'], fontSize=11, textColor=TEXT_DARK)
story.append(Paragraph("Email: info@evolutionengineering.eu", contact_style))
story.append(Paragraph("Web: www.evolutionengineering.eu", contact_style))
story.append(Spacer(1, 0.3*cm))

story.append(Paragraph(
    "<i>Documento generato automaticamente. Modificare a mano e rispedire per correzioni.</i>",
    ParagraphStyle('footer', parent=styles['Normal'], fontSize=9, textColor=TEXT_MUTED, italic=True, alignment=TA_CENTER)
))

# Costruisci il PDF
doc.build(story)
print(f"✅ PDF creato: {PDF_OUTPUT}")
