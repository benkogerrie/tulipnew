# Tulip Holding Logo Files

Dit document beschrijft alle beschikbare logo-bestanden voor Tulip Holding.

## Logo Varianten

### 1. Standaard Logo (met ondertitel)
- **SVG:** `logo-tulip.svg`
- **PNG standaard:** `logo-tulip.png` (600x240px)
- **PNG @2x:** `logo-tulip@2x.png` (1200x480px) - voor retina displays
- **PNG klein:** `logo-tulip-small.png` (300x120px)

**Gebruik:** Primaire logo voor lichte achtergronden

**Kleuren:**
- TULIP tekst: `#141820` (donker)
- Punt (.): `#e0a837` (goud)
- Ondertitel: `#6b7280` (grijs)

### 2. Donker Logo (voor donkere achtergronden)
- **SVG:** `logo-tulip-dark.svg`
- **PNG standaard:** `logo-tulip-dark.png` (600x240px)
- **PNG @2x:** `logo-tulip-dark@2x.png` (1200x480px)

**Gebruik:** Voor donkere achtergronden

**Kleuren:**
- TULIP tekst: `#ffffff` (wit)
- Punt (.): `#f4b841` (goud)
- Ondertitel: `#9ca3af` (lichtgrijs)

### 3. Eenvoudig Logo (zonder ondertitel)
- **SVG:** `logo-tulip-simple.svg`
- **PNG standaard:** `logo-tulip-simple.png` (400x120px)
- **PNG @2x:** `logo-tulip-simple@2x.png` (800x240px)
- **PNG klein:** `logo-tulip-simple-small.png` (200x60px)

**Gebruik:** Compact logo voor kleine ruimtes of favicons

## Technische Specificaties

### Font
- **Primair:** Inter (Google Fonts)
- **Fallback:** Arial, Helvetica, sans-serif

### Typografie
- **Hoofdlogo:** Font-weight 900, Letter-spacing -3.84px
- **Ondertitel:** Font-weight 400, Letter-spacing 3.36px, Uppercase

### Kleuren (Brand Colors)
- **Accent goud:** `#f4b841`
- **Accent goud hover:** `#e0a837`
- **Donker:** `#141820`
- **Grijs tekst:** `#6b7280`

## Gebruik in Website

Het logo wordt momenteel als tekst weergegeven in de HTML:

```html
<div class="logo-wrap">
    <a href="#top" class="logo">TULIP<span>.</span></a>
    <div class="logo-sub">Asset Management · Czech Republic</div>
</div>
```

Voor gebruik als afbeelding, gebruik de SVG-bestanden voor beste kwaliteit, of PNG voor compatibiliteit.

## PNG Genereren

Om nieuwe PNG-bestanden te genereren:

```bash
npm install sharp --save-dev
node generate-png-logos.js
```

## Bestandsformaten

- **SVG:** Aanbevolen voor web (schaalbaar, klein bestandsformaat)
- **PNG:** Voor print of wanneer SVG niet wordt ondersteund
- **@2x versies:** Voor retina/high-DPI displays

## Licentie

© 2024 Tulip Holding s.r.o. Alle rechten voorbehouden.


