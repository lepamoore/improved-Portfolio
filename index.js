//Media query
function resizeChanges() {
    if(maxMobile.matches) {
        burgerIcon.addEventListener('click', openMenu);
        crossIcon.addEventListener('click', closeMenu);
    } else if(minTablet.matches && maxTablet.matches) {
        burgerIcon.addEventListener('click', openMenu);
        crossIcon.addEventListener('click', closeMenu);
    } else if(minDesktop.matches) {
        burgerIcon.removeEventListener('click', openMenu);
        crossIcon.removeEventListener('click', closeMenu);
    }
}

const maxMobile = window.matchMedia("(max-width: 767px)");
const minTablet = window.matchMedia("(min-width: 767.5px)");
const maxTablet = window.matchMedia("(max-width: 1023px)");
const minDesktop = window.matchMedia("(min-width: 1023.5px)");

maxMobile.addEventListener('change', resizeChanges);
minTablet.addEventListener('change', resizeChanges);
maxTablet.addEventListener('change', resizeChanges);
minDesktop.addEventListener('change', resizeChanges);

//Toggle Menu on Mobile version.
const burgerIcon = document.getElementById('menuBurger');
const crossIcon = document.getElementById('menuCross');
const navMenu = document.getElementById('nav');

function openMenu() {
    burgerIcon.style.display = 'none';
    crossIcon.style.display = 'block';
    navMenu.style.top = '11%';
}

function closeMenu() {
    burgerIcon.style.display = 'block';
    crossIcon.style.display = 'none';
    navMenu.style.top = '-100%';
}

resizeChanges();

// Language toggle variables

// Nav children

const navChildOne = document.getElementById('navLinkOne');
const navChildOneEnglish = 'Projects';
const navChildOneGerman = 'Projekte';

const navChildTwo = document.getElementById('navLinkTwo');

const navChildThree = document.getElementById('navLinkThree');
const navChildThreeEnglish = 'About me';
const navChildThreeGerman = 'Über mich';

// Hero Section

const heroHeading = document.getElementById('heroHeading');
const heroHeadingEnglish = 'My name is Leon Moore';
const heroHeadingGerman = 'Mein Name ist Leon Moore';

const heroParagraph = document.getElementById('heroParagraph');
const heroParagraphEnglish = "I'm a 21 years old self-taught Frontend-Developer based in Berlin. This is my Portfolio.<br>Have a look around!";
const heroParagraphGerman = 'Ich bin ein 21-Jähriger Autodidakt aus Berlin und lerne momentan verschiedene Technologien der Frontend-Entwicklung. Das ist mein Portfolio. Schauen Sie sich gerne um!';

const heroButton = document.getElementById('heroButton');
const heroButtonEnglish = "Let's begin";
const heroButtonGerman = "Los geht's";

// Section 2 - Projects

const sectionTwoHeading = document.getElementById('sectionTwoHeading');
const sectionTwoHeadingEnglish = 'Projects';
const sectionTwoHeadingGerman = 'Projekte';

// Project 1

const projectHeadingOne = document.getElementById('projectHeadingOne');
const projectHeadingOneEnglish = 'MULTI-STEP-FORM';
const projectHeadingOneGerman = 'MEHRSCHRITTIGE WEBAPP';

const projectParagraphOne = document.getElementById('projectParagraphOne');
const projectParagraphOneEnglish = "This is my first React app, and although it took time to fix the bugs, it was fun and I was impressed by its power. As a beginner, I know there is still more to learn about React's capabilities.";
const projectParagraphOneGerman = "Dieses Projekt ist meine erste React SPA und auch wenn es Zeit gekostet hat, die Fehler auszubessern, hat es Spaß gemacht. Das schönste an dem Projekt war, dass ich gemerkt habe wie Machtvoll React ist.";

const projectButtonOne = document.getElementById('projectButtonOne');
const projectButtonOneEnglish = 'Look it up!';
const projectButtonOneGerman = 'beäugen!';

// Project 2

const projectHeadingTwo = document.getElementById('projectHeadingTwo');
const projectHeadingTwoEnglish = 'AGENCY WEBPAGE';
const projectHeadingTwoGerman = 'WEBPAGE EINER AGENTUR';

const projectParagraphTwo = document.getElementById('projectParagraphTwo');
const projectParagraphTwoEnglish = "I improved my CSS skills on this project with a design of overlapping layers. I also gained experience with responsive JavaScript, even though it wasn't perfect at the time.";
const projectParagraphTwoGerman = "Durch dieses Projekt konnte ich meine CSS-Skills verbessern, indem ich das Design mit überlappenden Lagen umgesetzt habe. Außerdem konnte ich im Umgang mit responsivem JavaScript Erfahrung sammeln, auch wenn es zu der Zeit noch nicht ganz ausgereift war.";

const projectButtonTwo = document.getElementById('projectButtonTwo');
const projectButtonTwoEnglish = 'Look it up!';
const projectButtonTwoGerman = 'beäugen!';

// Project 3

const projectHeadingThree = document.getElementById('projectHeadingThree');
const projectHeadingThreeEnglish = 'CSS GRID PROJECT';
const projectHeadingThreeGerman = 'CSS GRID PROJEKT';

const projectParagraphThree = document.getElementById('projectParagraphThree');
const projectParagraphThreeEnglish = "This was one of my starter projects where I learned CSS Flexbox and CSS Grid. Although I prefer Flexbox, I know having a solid understanding of CSS Grid is also important.";
const projectParagraphThreeGerman = "Dies war eines meiner ersten Projekte, nachdem ich CSS Flexbox und CSS Grid gelernt hatte. Obwohl ich Flexbox bevorzuge, denke ich, dass es auch wichtig ist, ein solides Verständnis von CSS Grid zu haben."

const projectButtonThree = document.getElementById('projectButtonThree');
const projectButtonThreeEnglish = 'Look it up!';
const projectButtonThreeGerman = 'beäugen!';