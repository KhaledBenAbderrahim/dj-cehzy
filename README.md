# DJ Chezy Website

Eine kreative, responsive Website für DJ Chezy, einen Latino-DJ aus der Dominikanischen Republik. Die Website präsentiert sein Profil, Musikgenres, Event-Typen und Kontaktmöglichkeiten in einem lebendigen, karibischen Design.

## Funktionen

- **Startseite**: Einführung zu DJ Chezy mit Vinyl-Animation und Musikgenres
- **Über Mich**: Biografie, Spezialisierungen und Kundenbewertungen
- **Musik & Events**: Musik-Player mit Samples, Eventkalender und Booking-Informationen
- **Galerie**: Filterbares Fotogrid, Lightbox-Funktion und Instagram-Feed
- **Kontakt**: Buchungsformular mit verschiedenen Kontaktmöglichkeiten und FAQ

## Technologien

- React.js
- React Router für Navigation
- Framer Motion für Animationen
- Responsive Design für alle Geräte
- CSS mit tropischem Farbschema

## Installation

1. Stelle sicher, dass [Node.js](https://nodejs.org/) installiert ist
2. Klone dieses Repository
3. Installiere die Abhängigkeiten mit dem Befehl: `npm install`
4. Starte die Entwicklungsumgebung: `npm start`
5. Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser

## Projektstruktur

```
dj-chezy/
  ├── public/
  │   ├── index.html
  │   ├── manifest.json
  │   └── assets/
  │       └── images/
  ├── src/
  │   ├── components/
  │   │   ├── Navbar.js
  │   │   └── Footer.js
  │   ├── pages/
  │   │   ├── Home.js
  │   │   ├── About.js
  │   │   ├── Music.js
  │   │   ├── Gallery.js
  │   │   └── Contact.js
  │   ├── styles/
  │   │   ├── App.css
  │   │   ├── Navbar.css
  │   │   ├── Footer.css
  │   │   ├── Home.css
  │   │   ├── About.css
  │   │   ├── Music.css
  │   │   ├── Gallery.css
  │   │   └── Contact.css
  │   ├── App.js
  │   └── index.js
  ├── package.json
  └── README.md
```

## Bilder

Um die Website mit allen visuellen Elementen anzuzeigen, füge passende Bilder im Verzeichnis `public/assets/images/` hinzu.

## Anpassung

Die Website kann leicht an individuelle Bedürfnisse angepasst werden:
- Bearbeite den Inhalt in den entsprechenden Komponentendateien
- Ändere Farben und Stile in den CSS-Dateien
- Füge eigene Bilder im assets-Verzeichnis hinzu

## Build & Deployment

Zum Erstellen einer produktionsreifen Version:

```
npm run build
```

Die optimierten Dateien werden im `build`-Verzeichnis abgelegt und können auf jedem Webserver gehostet werden.

## Autor

Diese Website wurde erstellt für DJ Chezy mit modernen Webtechnologien und einem besonderen Fokus auf das tropische, karibische Design, das die energiegeladene Musikkultur der Dominikanischen Republik widerspiegelt.
