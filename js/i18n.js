'use strict';
const titleEl = document.querySelector('.app__title');
const mobileTitleEl = document.querySelector('.app__title__mobile');
const inputEl = document.querySelector('.input__field');
const resultsTitle = document.querySelector('#result__text');
const advOpTxt = document.querySelector('#adv__options__text');
const darkmodeTxt = document.querySelector('#darkmode__text');
const exInFieldSliderTxt = document.querySelector('#ex__input__field__slider__text');
const resultWordCountTxt = document.querySelector('#result__word__count__text');
const resultSentenceCountTxt = document.querySelector('#result__sentence__count__text');
const resultAvgSentenceLengthTxt = document.querySelector('#result__avg__sentence__length__text');
const mobileSidebarDarkmodeTxt = document.querySelector('#mobile__darkmode__slider__text');
const mobileSidebarAdvInputTxt = document.querySelector('#mobile__adv__input__field__slider__text');

let currentLanguage = 'en';

const translations = {
    en: {
        title: 'Word and Sentence Counter',
        analyze: 'Analyze',
        placeholder: 'What should be analyzed?',
        results: 'Results',
        advOpTxt: 'Advanced Options',
        darkmodeTxt: 'Darkmode',
        exInFieldSliderTxt: 'Extended Input field',
        resultWordCount: 'Word count:',
        resultSentenceCountTxt: 'Sentence count:',
        resultAvgSentenceLengthTxt: 'Average sentence length:',
    },
    de: {
        title: 'Wort- und Satzzähler',
        analyze: 'Analysieren',
        placeholder: 'Was soll analysiert werden?',
        results: 'Ergebnisse',
        advOpTxt: 'Erweiterte Optionen',
        darkmodeTxt: 'Nachtmodus',
        exInFieldSliderTxt: 'Erweitertes Eingabefeld',
        resultWordCount: 'Anzahl der Wörter:',
        resultSentenceCountTxt: 'Anzahl der Sätze:',
        resultAvgSentenceLengthTxt: 'Durchschnittliche Satzlänge:',
    }
};

function applyLanguage(lang) {
    titleEl.innerText = translations[lang].title;
    analyzeBtn.innerText = translations[lang].analyze;
    inputEl.placeholder = translations[lang].placeholder;
    resultsTitle.innerText = translations[lang].results;
    advOpTxt.innerText = translations[lang].advOpTxt;
    darkmodeTxt.innerText = translations[lang].darkmodeTxt;
    exInFieldSliderTxt.innerText = translations[lang].exInFieldSliderTxt;
    resultWordCountTxt.innerText = translations[lang].resultWordCount;
    resultSentenceCountTxt.innerText = translations[lang].resultSentenceCountTxt;
    resultAvgSentenceLengthTxt.innerText = translations[lang].resultAvgSentenceLengthTxt;
    mobileSidebarDarkmodeTxt.innerText = translations[lang].darkmodeTxt;
    mobileSidebarAdvInputTxt.innerText = translations[lang].exInFieldSliderTxt;
    mobileTitleEl.innerText = translations[lang].title;

    document.documentElement.lang = lang;
}


langSwitchMobile.addEventListener('click', function() {
    if(currentLanguage === 'en') {
        currentLanguage = 'de';
    } else {
        currentLanguage = 'en';
    }  
    applyLanguage(currentLanguage);
})

langSwitchNormal.addEventListener('click', function() {
    if(currentLanguage === 'en') {
        currentLanguage = 'de';
    } else {
        currentLanguage = 'en';
    }
    applyLanguage(currentLanguage);
})