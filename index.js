//Media query
function resizeChanges() {
    if(maxMobile.matches) {
        burgerIcon.addEventListener('click', openMenu);
        crossIcon.addEventListener('click', closeMenu);
        navChildOne.addEventListener('click', closeMenu);
        navChildTwo.addEventListener('click', closeMenu);
        navChildThree.addEventListener('click', closeMenu);
        closeMenu();
    } else if(minTablet.matches && maxTablet.matches) {
        burgerIcon.addEventListener('click', openMenu);
        crossIcon.addEventListener('click', closeMenu);
        navChildOne.addEventListener('click', closeMenu);
        navChildTwo.addEventListener('click', closeMenu);
        navChildThree.addEventListener('click', closeMenu);
        closeMenu();
    } else if(minDesktop.matches) {
        burgerIcon.removeEventListener('click', openMenu);
        crossIcon.removeEventListener('click', closeMenu);
        navChildOne.removeEventListener('click', closeMenu);
        navChildTwo.removeEventListener('click', closeMenu);
        navChildThree.removeEventListener('click', closeMenu);
        placeDesktopMenu();
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
    navMenu.style.visibility = 'visible';
    navMenu.style.opacity = '1';
    navMenu.style.top = '11%';
}

function closeMenu() {
    burgerIcon.style.display = 'block';
    crossIcon.style.display = 'none';
    navMenu.style.opacity = '0';
    navMenu.style.visibility = 'hidden';
    navMenu.style.top = '-100%';
}

function placeDesktopMenu() {
    navMenu.style.visibility = 'visible';
    navMenu.style.opacity = '1';
    navMenu.style.top = '0%';
}

// Language toggle variables

// Nav children

const navChildOne = document.getElementById('navLinkOne');
const navChildOneEnglish = 'Projects';
const navChildOneGerman = 'Projekte';

const navChildTwo = document.getElementById('navLinkTwo');

const navChildThree = document.getElementById('navLinkThree');
const navChildThreeEnglish = 'About me';
const navChildThreeGerman = 'Über mich';

const language = document.getElementById('language');

// Hero Section

const heroHeading = document.getElementById('heroHeading');
const heroHeadingEnglish = 'My name is Leon Moore';
const heroHeadingGerman = 'Mein Name ist Leon Moore';

const heroParagraph = document.getElementById('heroParagraph');
const heroParagraphEnglish = "I'm a self-taught Frontend-Developer based in Berlin. This is my Portfolio.<br>Have a look around!";
const heroParagraphGerman = 'Ich bin ein selbstlernender Frontend-Entwickler aus Berlin. Das ist mein Portfolio. <br> Schauen Sie sich gerne um!';

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
const projectParagraphOneEnglish = "This is my first React app, and although it took time to fix the bugs, it was fun and I was impressed by Reacts power. As a beginner, I know there is still more to learn about React's capabilities.";
const projectParagraphOneGerman = "Dieses Projekt ist meine erste React-SPA. Das Schönste an dem Projekt war, dass ich gemerkt habe, wie mächtig React ist und wie viel man mit wenig Code erreichen kann.";

const projectButtonOne = document.getElementById('projectButtonOne');
const projectButtonOneEnglish = 'Look it up';
const projectButtonOneGerman = 'Öffnen';

// Project 2

const projectHeadingTwo = document.getElementById('projectHeadingTwo');
const projectHeadingTwoEnglish = 'AGENCY WEBPAGE';
const projectHeadingTwoGerman = 'WEBPAGE EINER AGENTUR';

const projectParagraphTwo = document.getElementById('projectParagraphTwo');
const projectParagraphTwoEnglish = "I improved my CSS skills on this project with a complex design of overlapping layers. And i gained some experience with responsive JavaScript as well.";
const projectParagraphTwoGerman = "Durch dieses Projekt konnte ich meine CSS-Layout-Skills verbessern. Außerdem konnte ich erste Erfahrungen mit responsivem JavaScript sammeln";

const projectButtonTwo = document.getElementById('projectButtonTwo');
const projectButtonTwoEnglish = 'Look it up';
const projectButtonTwoGerman = 'Öffnen';

// Project 3

const projectHeadingThree = document.getElementById('projectHeadingThree');
const projectHeadingThreeEnglish = 'CSS GRID PROJECT';
const projectHeadingThreeGerman = 'CSS GRID PROJEKT';

const projectParagraphThree = document.getElementById('projectParagraphThree');
const projectParagraphThreeEnglish = "Although this project was rather small, it had a big impact on my development as a frontend developer, as I extensively worked with CSS Grid here.";
const projectParagraphThreeGerman = "Obwohl dieses Projekt eher klein war, hatte es einen großen Einfluss auf meine Entwicklung als Frontend-Entwickler, da ich mich hier intensiv mit CSS Grid beschäftigt habe."

const projectButtonThree = document.getElementById('projectButtonThree');
const projectButtonThreeEnglish = 'Look it up';
const projectButtonThreeGerman = 'Öffnen';

// Section 3 Tech-Stack

//Tech Levels

const technologyOneLevel = document.getElementById('technologyOneLevel');
const technologyOneLevelEnglish = 'Advanced';
const technologyOneLevelGerman = 'Fortgescritten';

const technologyTwoLevel = document.getElementById('technologyTwoLevel');
const technologyTwoLevelEnglish = 'Advanced';
const technologyTwoLevelGerman = 'Fortgeschritten';

const technologyThreeLevel = document.getElementById('technologyThreeLevel');
const technologyThreeLevelEnglish = 'Regular';
const technologyThreeLevelGerman = 'Durchschnittlich';

const technologyFourLevel = document.getElementById('technologyFourLevel');
const technologyFourLevelEnglish = 'Beginner';
const technologyFourLevelGerman = 'Anfänger';

// subheading and subskills Section 3

const additionalHeading = document.getElementById('additionalHeading');
const additionalHeadingEnglish = 'Additional technologies and skills';
const additionalHeadingGerman = 'Weitere technologien und Fähigkeiten';

const liLearning = document.getElementById('liLearning');
const liLearningEnglish = 'Quick learning';
const liLearningGerman = 'ausgeprägte Lernfähigkeit';

const liEnglish = document.getElementById('liEnglish');
const liEnglishEnglish = "Good English";
const liEnglishGerman = "Gutes Englisch";

// Section 4 About me

const sectionFourHeading = document.getElementById('sectionFourHeading');
const sectionFourHeadingEnglish = "About me";
const sectionFourHeadingGerman = 'Über mich';

const sectionFourParagraph = document.getElementById('sectionFourParagraph');
const sectionFourParagraphEnglish = "Hello, I'm Leon - I've gotten lost in a maze of HTML, CSS, and JavaScript, and I love it! I was born in Cologne and now I live in Berlin, working hard to improve my skills as a frontend developer. I quit my last job to pursue my goals. Anyway, if you like what you've read so far and think I could be a great fit for your team, feel free to contact me.<br> I'd love to chat!"
const sectionFourParagraphGerman = 'Hallo, ich bin Leon - Ich habe mich in einem Labyrinth aus HTML, CSS und JavaScript verirrt und ich liebe es! Ich wurde in Köln geboren und lebe nun in Berlin, wo ich hart daran arbeite, meine Fähigkeiten als Frontend-Entwickler zu verbessern. Ich habe meinen letzten Job aufgegeben, um meine Ziele zu verfolgen. Wenn Ihnen das, was Sie bisher gesehen haben, gefällt und Sie denken, dass ich gut in Ihr Team passen würde, bitte zögern Sie nicht, mich zu kontaktieren.<br> Ich freue mich darauf, Sie kennenzulernen!';

// Footer

const callMe = document.getElementById('callMe');
const callMeEnglish = "Call me:<br>0176 461 989 29";
const callMeGerman = "Rufnummer:<br>0176 461 989 29";

// Toggle Language function

function toGerman() {
    navChildOne.innerHTML = navChildOneGerman;
    navChildThree.innerHTML = navChildThreeGerman;
    heroHeading.innerHTML = heroHeadingGerman;
    heroParagraph.innerHTML = heroParagraphGerman;
    heroButton.innerHTML = heroButtonGerman;
    sectionTwoHeading.innerHTML = sectionTwoHeadingGerman;
    projectHeadingOne.innerHTML = projectHeadingOneGerman;
    projectParagraphOne.innerHTML = projectParagraphOneGerman;
    projectButtonOne.innerHTML = projectButtonOneGerman;
    projectHeadingTwo.innerHTML = projectHeadingTwoGerman;
    projectParagraphTwo.innerHTML = projectParagraphTwoGerman;
    projectButtonTwo.innerHTML = projectButtonTwoGerman;
    projectHeadingThree.innerHTML = projectHeadingThreeGerman;
    projectParagraphThree.innerHTML = projectParagraphThreeGerman;
    projectButtonThree.innerHTML = projectButtonThreeGerman;
    technologyOneLevel.innerHTML = technologyOneLevelGerman;
    technologyTwoLevel.innerHTML = technologyTwoLevelGerman;
    technologyThreeLevel.innerHTML = technologyThreeLevelGerman;
    technologyFourLevel.innerHTML = technologyFourLevelGerman;
    additionalHeading.innerHTML = additionalHeadingGerman;
    liLearning.innerHTML = liLearningGerman;
    liEnglish.innerHTML = liEnglishGerman;
    sectionFourHeading.innerHTML = sectionFourHeadingGerman;
    sectionFourParagraph.innerHTML = sectionFourParagraphGerman;
    callMe.innerHTML = callMeGerman;
}

function toEnglish() {
    navChildOne.innerHTML = navChildOneEnglish;
    navChildThree.innerHTML = navChildThreeEnglish;
    heroHeading.innerHTML = heroHeadingEnglish;
    heroParagraph.innerHTML = heroParagraphEnglish;
    heroButton.innerHTML = heroButtonEnglish;
    sectionTwoHeading.innerHTML = sectionTwoHeadingEnglish;
    projectHeadingOne.innerHTML = projectHeadingOneEnglish;
    projectParagraphOne.innerHTML = projectParagraphOneEnglish;
    projectButtonOne.innerHTML = projectButtonOneEnglish;
    projectHeadingTwo.innerHTML = projectHeadingTwoEnglish;
    projectParagraphTwo.innerHTML = projectParagraphTwoEnglish;
    projectButtonTwo.innerHTML = projectButtonTwoEnglish;
    projectHeadingThree.innerHTML = projectHeadingThreeEnglish;
    projectParagraphThree.innerHTML = projectParagraphThreeEnglish;
    projectButtonThree.innerHTML = projectButtonThreeEnglish;
    technologyOneLevel.innerHTML = technologyOneLevelEnglish;
    technologyTwoLevel.innerHTML = technologyTwoLevelEnglish;
    technologyThreeLevel.innerHTML = technologyThreeLevelEnglish;
    technologyFourLevel.innerHTML = technologyFourLevelEnglish;
    additionalHeading.innerHTML = additionalHeadingEnglish;
    liLearning.innerHTML = liLearningEnglish;
    liEnglish.innerHTML = liEnglishEnglish;
    sectionFourHeading.innerHTML = sectionFourHeadingEnglish;
    sectionFourParagraph.innerHTML = sectionFourParagraphEnglish;
    callMe.innerHTML = callMeEnglish;
}

function changeLanguage() {
    if(language.checked) {
        toGerman();
    } else if(!language.checked) {
        toEnglish();
    }
}

// Calling general functions and adding general eventlisteners.

resizeChanges();
language.addEventListener('change', changeLanguage);