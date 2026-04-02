#!/bin/bash

# Crea la struttura di base del DOCX (ZIP)
mkdir -p docx_temp/{_rels,word/_rels,word/media,xl,xl/_rels,ppt,ppt/_rels,ppt/media}

# Crea [Content_Types].xml
cat > "docx_temp/[Content_Types].xml" << 'XML'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>
XML

echo "✅ Structure created. Please use a proper tool like python-docx or node-docx to generate the DOCX file."
