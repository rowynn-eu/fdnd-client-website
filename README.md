# Gemeenteiconen.nl Redesign

## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
<img width="1706" height="1310" alt="image" src="https://github.com/user-attachments/assets/d131a782-4db1-4ec7-ab42-af2638a84db9" />
https://rowynn-eu.github.io/fdnd-client-website/

Ik heb voor OpenGemeente een redesign gemaakt voor hun website, gemeenteiconen.nl, dat de gebruikerservaring van de huidige website hoort te verbeteren. 

Op de pagina vind je een overzicht waar het product over gaat, hoe je iconen kunt gebruiken, en welke recent zijn toegevoegd. Verder is de inhoud van de huidige website gelijk aan de inhoud die nu live staat, met alleen een andere opbouw van HTML, CSS en JS.

Het huidige project bevat nog geen functies van de must haves die besloten werden tijdens de [debriefing](https://github.com/rowynn-eu/fdnd-client-website/issues/1#issuecomment-5854955647).

## Gebruik
De website is bedoeld voor ontwikkelaars, ontwerpers, en mensen die verantwoordelijk of interesse hebben voor duidelijke overheidscommunicatie tussen gemeente en burger. Je kan open en rechtenvrije iconen vinden en illustraties die gemeentes, maar ook derde partijen kunnen gebruiken voor hun huisstijl zonder dat ze zelf deze iconen of illustraties hoeven te maken.

De illustraties kunnen ingeladen worden in een Figma bestand, en de iconen kunnen gedownload worden of in zijn geheel geladen in de repository.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

De website is gebouwd met [HTML](#HTML), [CSS](#CSS) en [JavaScript](#JavaScript), en bestaat uit zes pagina's.

### HTML
Hier hebben is de basis structuur van het HTML bestand waar stap voor stap wordt uitgelegd wat het doet, hoe en waarom precies.

### Head

In de <head> worden er drie bestanden geladen. De stylesheet, dat alles bevat in `gemeenteiconen.css`, de favicon, dat een blauwe versie is van de [OpenGemeente](https://www.opengemeenten.nl/) logo, en `script.js` wordt geladen, dat zorgt voor de Mobile Menu en Dark Mode toggle functies zorgen.

```HTML
        <link rel="stylesheet" href="./styles/gemeenteiconen.css">
        <link rel="shortcut icon" href="./assets/favicon.png" type="image/x-icon">
        <script defer src="./scripts/script.js"></script>
```

#### Body

De structuur van de body is HEADER, MAIN en FOOTER. De website is gebouwd op een semantische manier dat zorgt voor een betere SEO op een logische manier, dat zorgt voor een fijne gebruikerservaring.

#### Header
De `<header>` bestaat uit een `<a>` element (een linkje) dat de logo bevat, en ervoor zorgt dat de mensen terug komen naar de hoofd pagina (`index.html`), een `<nav>` dat verwijst naar de andere pagina's vanuit de hoofdpagina. Daarnaast is er ook een `<a>` element dat gekoppeld is aan de iconenset repository als een call to action om het te downloaden, en twee `<button>`'s die samen met [JavaScript](#JavaScript) zorgt dat er een menu is voor kleinere schermen, en een knop dat tussen de twee thema's schakelt.

```HTML
<a class="logo" href="./"><img src="./assets/logo.svg" alt="Logo"></a>

<nav>
    <a href="./iconen.html">Iconen</a>
    <a href="./illustraties.html">Illustraties</a>
    <a href="./doe-mee.html">Doe mee</a>
    <a href="./rechtenvrij.html">Rechtenvrij</a>
    <a href="./credits.html">Credits</a>
</nav>

<a href="https://github.com/OpenGemeenten/Iconenset/" target="_blank">
    <img src="./assets/github-light.svg" alt="GitHub">
</a>

<button id="theme-toggle" aria-hidden="true"><img src="./assets/sun.svg" alt=""></button>
<button id="mobile-menu" aria-hidden="false" aria-label="menu"><img src="./assets/menu.svg" alt=""></button>

```

#### Main
In de `<main>` staat de actuele inhoud van elke pagina. De inhoud verschilt, maar het bestaat altijd uit de actuele en belangrijke inhoud van elke pagina, en is verdeeld met meerdere `<section>`'s afhankelijke van de verschillende sub-onderwerpen die behandeld worden.

In `index.html`, is het de bedoeling om de gebruiker te overtuigen waarom en hoe ze de iconenset kunnen gebruiken. Vandaar, kunnen ze naar de `iconen.html` pagina, waar je een overzicht van alle iconen kan bekijken, en `illustraties.html` om ook hun illustraties te bekijken dei gemeente's kunnen gebruiken om hun overheidscommunicatie te verduidelijken.

Verder, vanuit de `<header>` en `<footer>` kan je de andere pagina's bekijken.

#### Footer

```HTML
<section>
    <h2>Waarom?</h2>
    <p>
        Gemeenteiconen is een initiatief van OpenGemeenten en wordt doorlopend aangevuld door gemeenten en
        overheidsinstanties.
    </p>
    <p>
        Duidelijke iconen helpen bezoekers van gemeentelijke websites om sneller bij de juiste informatie te komen,
        zelf al weten ze niet de juiste woorden. Daarom ontwikkelde OpenGemeenten deze iconenset.
    </p>
    <p>
        Mis je een icoon? Stuur een omschrijving naar
        <a href="mailto:martijn@opengemeenten.nl">martijn@opengemeenten.nl</a>.
    </p>
</section>

<section>
    <h2>SITEMAP</h2>
    <ul>
        <li>
            <a href="./iconen.html">Iconen</a>
        </li>

        <li>
            <a href="./illustraties.html">Illustraties</a>
        </li>

        <li>
            <a href="./doe-mee.html">Doe Mee</a>
        </li>

        <li>
            <a href="./rechtenvrij.html">Rechtenvrij</a>
        </li>

        <li>
            <a href="./credits.html">Credits</a>
        </li>
    </ul>
</section>

<section>
    <h2>ICONENSET</h2>
    <ul>
        <li>
            <a href="https://github.com/OpenGemeenten/Iconenset/" target="_blank"> Github repository </a>
        </li>

        <li>
            <a href="https://frameless.github.io/iconset-npm/" target="_blank"> Webcomponenten </a>
        </li>

        <li>
            <a href="https://github.com/OpenGemeenten/Iconenset/archive/refs/heads/master.zip" target="_blank">
                Downloaden als ZIP
            </a>
        </li>
    </ul>
</section>

<section>
    <h2>OPENGEMEENTEN</h2>
    <ul>
        <li>
            <a href="https://www.opengemeenten.nl/" target="_blank">Website</a>
        </li>

        <li>
            <a href="https://opengemeenten.nl/contact" target="_blank">Contact</a>
        </li>

        <li>
            <a href="https://www.opengemeenten.nl/support/" target="_blank">Support</a>
        </li>
    </ul>
</section>
```

### CSS
Alle CSS selectors, properties en at-rules wordt ingeladen vanuit een bestand, die in een logische volgorde is opgezet met comments in grote tekst zodat je met een oogknip kan zien waar je bent. Dit is gedaan zodat elke pagina vanuit dezelfde CSS bestand werkt, en kan laden.

Verder is het ook genest onder elkaar: Als je alles wat in een `<main>` hoort wilt verwijderen, dan kan je dat ook gemakkelijke doen. Verder zijn alle relevante `@media breakpoints` (om grotere schermen te ondersteunen) genest onder de parent elementen. 

```CSS
/*                                                                   
┳┓┏┓┓ ┏┓┏┳┓┳┓  ┏┓┳┳
┣┫┃┃┃┃┃┗┫┃┃┃┃━━┣ ┃┃
┛┗┗┛┗┻┛┗┛┛┗┛┗  ┗┛┗┛    
Ascii Art font: Tmplr
navigatie comments gemaakt met https://patorjk.com/software/taag/                                                                          
*/

/*
┣┫┃┃┃┃┗┫
┻┛┗┛┻┛┗┛
Body
*/

/*
┓┏┏┓┏┓┳┓┏┓┳┓
┣┫┣ ┣┫┃┃┣ ┣┫
┛┗┗┛┛┗┻┛┗┛┛┗
Header
*/

/*
┳┳┓┏┓┳┳┓
┃┃┃┣┫┃┃┃
┛ ┗┛┗┻┛┗
Main
*/

/*
┏┓┏┓┏┓┏┳┓┏┓┳┓
┣ ┃┃┃┃ ┃ ┣ ┣┫
┻ ┗┛┗┛ ┻ ┗┛┛┗
Footer
*/
```

#### Design Tokens en light-dark
Design Tokens zijn (in deze context) custom CSS properties die namen krijgen om besproken ontwerp keuzes te representeren waar je dan naar toe kan verwijzen in je CSS code. Voor meer technische mensen heet dit een 'variable'. Deze worden gebruikt door zowel ontwerpers als ontwikkelaars, en in het begin van de CSS bestand worden ze allemaal ingeladen.

Verder wordt er gebruik gemaakt van [light-dark()]([url](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark)) om twee kleuren te bepalen, een voor mensen die een voorkeur hebben voor een lichte thema, en een andere voor mensen die een voorkeur hebben voor een donkere thema.

```CSS
@import url("https://fonts.googleapis.com/css2?family=Geist:ital,wght@0,100..900;1,100..900&display=swap");

*::before,
*,
*::after {
    box-sizing: border-box;
}

:root {
    color-scheme: light dark;
    --fg: light-dark(#333, #fff);
    --bg: light-dark(#fff, #333);
    --accent: light-dark(#1f4ed8, hsl(200, 100%, 40%));
    --accent-tekst: light-dark(#fff, #fff);
    --witruimte-s: 1em;
    --knop-padding: 0.5em;
    --knop-radius: 0.5em;
}

:root[data-theme="light"] {
    color-scheme: light;
}

:root[data-theme="dark"] {
    color-scheme: dark;

    header,
    .recent,
    .gebruik,
    label {
        img {
            filter: invert(1);
        }
    }

    nav {
        color: var(--fg);
        /* background-color: var(--bg); */
    }
}
```

### JavaScript
Met Javascript zijn er twee functies geschreven voor de website. De eerste is het belangrijkste, het zorgt ervoor dat gebruikers op kleinere schermen op een knopje kunnen drukken om een menu te openen waar ze naar andere pagina's kunnen gaan.

#### Mobile Menu
Hieronder is de code van de Mobile Menu. Het kijkt eerst waar de <nav> element is, en daarna naar een knop met het attribute ``id=#mobile-menu``. Daarna begint het met luisteren of er op de knopje wordt gedrukt. Daarna met een `function` telkens dat er oop het knopje wordt gedrukt, met een `if else` statement wordt de menu geopend of gesloten.

```JavaScript
const menuNav = document.querySelector("nav")
const menuClick = document.querySelector("#mobile-menu")

menuClick.addEventListener("click", openMenu)

function openMenu() {
    menuNav.classList.toggle("is-open")

    if (menuNav.classList.contains("is-open")) {
        console.log("<nav> has is-open")
    } else {
        console.log("<nav> does not have is-open")
    }
}
```

#### Dark Mode Toggle
Hieronder is de code van de Dark Mode toggle. We schrijven een paar variabelen om code korter te schrijven, en daarna kijken we waar de thema wordt opgeslagen, gaan we zoeken naar een knop met het attribute ``id="theme-toggle``. We kijken ook of de gebruiker een voorkeur heeft voor een donkere thema, met `window.matchMedia("(prefers-color-scheme: dark)")`. 

Daarna, met `let` (zodat het steeds opnieuw kan berekend worden) kijken we of de huidige thema licht of donker is. Die roepen we dan ook ook met de function `toggleTheme()`, met nogmaals, een `if else` statement.

```JavaScript
const rootHTML = document.documentElement
const savedTheme = localStorage.getItem("theme")
const themeToggle = document.querySelector("#theme-toggle")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
let currentTheme = savedTheme ?? (prefersDark.matches ? "dark" : "light")

themeToggle.addEventListener("click", toggleTheme)

rootHTML.dataset.theme = savedTheme
localStorage.setItem("theme", currentTheme)

function toggleTheme() {
    rootHTML.dataset.theme = currentTheme
    localStorage.setItem("theme", currentTheme)

    if (currentTheme === "dark") {
        currentTheme = "light"
        console.log("currentTheme: Dark")
    } else {
        currentTheme = "dark"
        console.log("currentTheme: Light")
    }
}
```

## Bronnen
- <input> search https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/search
- aria hidden attribute https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
- aria label attribute https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label
- position property https://github.com/fdnd-task/css-challenges/blob/main/docs/challenge_position.md
- text-wrap https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-wrap
- Conditional (ternary) operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
- Nullish coalescing operator (??) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
- Strict equality https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
- Optional chaining (?
- Utopia.fyi https://utopia.fyi/clamp/calculator?a=360,1240
- Tips van Sanne 't Hooft  http://sinds1971.nl/

## Leertaak

Ontwerp en maak een website voor een opdrachtgever en bespreek het resultaat tijdens de Sprint Review.

De instructie van deze leertaak staan in de [WIKI](https://github.com/fdnd-task/the-client-website/wiki)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
