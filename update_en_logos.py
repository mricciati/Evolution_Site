#!/usr/bin/env python3
import os
import re

# Template SVG per la navbar
nav_svg = '''<svg class="nav__logo-mark" width="50" height="50" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="metalGrad-nav-UNIQUE" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#bdc3c7;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#7f8c8d;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#95a5a6;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="blueGrad-nav-UNIQUE" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#0081c9;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#005a8e;stop-opacity:1" />
          </linearGradient>
        </defs>
        <g transform="translate(20, 35)">
          <path d="M0 20 Q 50 0, 110 5 L 100 25 Q 50 20, 0 45 Z" fill="url(#metalGrad-nav-UNIQUE)" />
          <path d="M0 55 Q 50 35, 105 40 L 95 60 Q 50 55, 0 80 Z" fill="url(#blueGrad-nav-UNIQUE)" />
          <path d="M5 90 Q 55 70, 95 75 L 85 95 Q 50 90, 15 115 Z" fill="url(#metalGrad-nav-UNIQUE)" />
        </g>
      </svg>'''

footer_svg = '''<svg class="nav__logo-mark" width="50" height="50" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="metalGrad-ft-UNIQUE" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#bdc3c7;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#7f8c8d;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#95a5a6;stop-opacity:1" />
              </linearGradient>
              <linearGradient id="blueGrad-ft-UNIQUE" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#0081c9;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#005a8e;stop-opacity:1" />
              </linearGradient>
            </defs>
            <g transform="translate(20, 35)">
              <path d="M0 20 Q 50 0, 110 5 L 100 25 Q 50 20, 0 45 Z" fill="url(#metalGrad-ft-UNIQUE)" />
              <path d="M0 55 Q 50 35, 105 40 L 95 60 Q 50 55, 0 80 Z" fill="url(#blueGrad-ft-UNIQUE)" />
              <path d="M5 90 Q 55 70, 95 75 L 85 95 Q 50 90, 15 115 Z" fill="url(#metalGrad-ft-UNIQUE)" />
            </g>
          </svg>'''

files = [
    "C:\\Users\\UTENTE\\Desktop\\Evolution Engeenering & Service\\Sito Web\\evolution-engineering-website\\en\\pages\\portfolio.html",
    "C:\\Users\\UTENTE\\Desktop\\Evolution Engeenering & Service\\Sito Web\\evolution-engineering-website\\en\\pages\\services.html",
    "C:\\Users\\UTENTE\\Desktop\\Evolution Engeenering & Service\\Sito Web\\evolution-engineering-website\\en\\pages\\equipment.html",
    "C:\\Users\\UTENTE\\Desktop\\Evolution Engeenering & Service\\Sito Web\\evolution-engineering-website\\en\\pages\\certifications.html",
    "C:\\Users\\UTENTE\\Desktop\\Evolution Engeenering & Service\\Sito Web\\evolution-engineering-website\\en\\pages\\contacts.html",
]

id_map = {
    "portfolio.html": "pf",
    "services.html": "sv",
    "equipment.html": "eq",
    "certifications.html": "ce",
    "contacts.html": "co",
}

for file_path in files:
    if not os.path.exists(file_path):
        print(f"SKIP: {file_path}")
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    basename = os.path.basename(file_path)
    uid = id_map.get(basename, basename.split('.')[0][:2])

    # Replace nav logo
    nav_svg_uid = nav_svg.replace("UNIQUE", f"nav-{uid}")
    content = content.replace('<div class="nav__logo-mark">EE</div>', nav_svg_uid, 1)

    # Replace footer logo
    footer_svg_uid = footer_svg.replace("UNIQUE", f"ft-{uid}")
    content = re.sub(
        r'<div class="nav__logo-mark">EE</div>(?=\s+<div class="nav__logo-text">)',
        footer_svg_uid,
        content,
        count=1
    )

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"UPDATED: {file_path}")

print("Done!")
