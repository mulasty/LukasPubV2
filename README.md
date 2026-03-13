# Lukas Club Website

Nowy, mobilny landing page dla `Lukas Pub Dance Club` zbudowany w `Next.js + TypeScript + Tailwind CSS`.

## Start

```bash
npm install
npm run dev
```

Projekt uruchomi się pod `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm run start
```

## Struktura

- `pages/` - strony Next.js w układzie opartym o `pages router`
- `components/` - małe elementy wielokrotnego użytku
- `sections/` - sekcje landing page
- `data/` - edytowalne źródła treści JSON
- `styles/` - style globalne i tokeny wizualne
- `public/images/` - assety wykorzystane na stronie

## Edycja treści

Treści strony są renderowane dynamicznie z plików:

- `data/business.json`
- `data/hours.json`
- `data/events.json`
- `data/seo.json`
- `data/socials.json`
- `data/menu-preview.json`
- `data/gallery.json`

Zmiana tekstów, godzin, eventów albo linków social nie wymaga edycji komponentów.

## SEO

Strona zawiera:

- meta title i meta description po polsku
- Open Graph tags
- Twitter tags
- schema.org `BarOrPub`
- schema.org `LocalBusiness`
- wpisy `Event` generowane z `events.json`

## Ważne uwagi

- Nie dodawano niepotwierdzonych danych biznesowych.
- Brakujący Instagram i domena zostały oznaczone jako `TODO`.
- Menu preview bazuje na istniejącym `menu.json` z repo, ale pełne menu nie zostało jeszcze opublikowane jako osobny asset.
