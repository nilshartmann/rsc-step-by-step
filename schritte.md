# Ablauf


## 0. Anwendung starten

- Leere Seite zeigen
- Seite ist bereits serverseitig gerendert
- Viele technische React-Komponenten, aber keine eigenen

## 1. Root-Page mit Artikel-Liste
- was ist eine RSC?
- Asynchronität
- Zeigen: Komponenten kommen nicht im Client an (React Dev Tools)

## 2. ThemeSwitcher

- wir können in einer RSC eine Client-Komponente mit State rendern
- Der Client-Komponente können wir eine RSC als Property übergeben
  - Eine Client-Komponente kann selbst keine RSC  rendern
  - was müssen wir tun, wenn die Client-Komponente zurüc zur RSC kommunizieren will (statt gewohntem Callback) 

## 3. Article-Page

- eine RSC für einen einzelnen Artikel
  - Routing ist Next.js-spezifisch!
  


# Erweiterungen

- `marked` o.ä. als Beispiel für externel Lib
- Eventuell eine Client-Komponente mit TanStackQuery und Suspense
  - Dafür wird dann aber ein API-Endpunkt benötigt
  