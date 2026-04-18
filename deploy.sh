#!/bin/bash
# deploy.sh — Genera la cartella pulita da caricare su Aruba
# Uso: bash deploy.sh
# Output: ../Evolution_Site_Deploy/ (pronta per File Manager Aruba)

DEST="../Evolution_Site_Deploy"

echo "Pulizia cartella deploy precedente..."
rm -rf "$DEST"
mkdir -p "$DEST"

echo "Copia file sito (solo ciò che serve)..."
rsync -av --progress \
  --exclude='.git' \
  --exclude='.claude' \
  --exclude='.DS_Store' \
  --exclude='*.DS_Store' \
  --exclude='ROADMAP.md' \
  --exclude='README.md' \
  --exclude='CNAME' \
  --exclude='.nojekyll' \
  --exclude='Logo-Evolution-svg.svg' \
  --exclude='sito_stampabile.html' \
  --exclude='document.xml' \
  --exclude='Foto Fonti' \
  --exclude='docx_build' \
  --exclude='data' \
  --exclude='create_docx.js' \
  --exclude='create_docx.sh' \
  --exclude='create_word.py' \
  --exclude='generate_pdf.py' \
  --exclude='update_en_logos.py' \
  --exclude='deploy.sh' \
  --exclude='uploads/*' \
  . "$DEST/"

# Ricrea la cartella uploads vuota con solo il .htaccess
mkdir -p "$DEST/uploads"
cp uploads/.htaccess "$DEST/uploads/.htaccess"

echo ""
echo "✓ Deploy pronto in: $DEST"
echo ""
echo "Contenuto cartella:"
find "$DEST" -not -path '*/images/portfolio/*' -not -path '*/.git/*' | sort
