'use strict';

const analyzeBtn = document.querySelector('.input__button');

let resultWordCount = document.querySelector('#wordCount');
let resultSentenceCount = document.querySelector('#sentenceCount');
let resultAvgSentenceLength = document.querySelector('#avgSentenceLength');
let warningTextLength = document.querySelector('#warning');

analyzeBtn.addEventListener('click', function () {
    
    const clearText = inputFieldEl.value;
    const words = clearText.match(/[A-Za-zÄÖÜäöüß]+/g);
    const wordCount = words ? words.length : 0;
    const sentenceCount = clearText.split(/[.!?]+/).filter(Boolean).length;
    const currentLang = document.querySelector('#result__text').innerText;

    

    warningTextLength.hidden = true;

    const avgSentenceLength = sentenceCount === 0 ? 0 : wordCount / sentenceCount;

    resultWordCount.innerText = wordCount;
    resultSentenceCount.innerText = sentenceCount;

    if (avgSentenceLength > 25) {
        warningTextLength.hidden = false;
    } else {
        warningTextLength.hidden = true;
    }

    if(currentLang === 'Ergebnisse') {
        resultAvgSentenceLength.innerText = `${Math.round(avgSentenceLength)} Wörter`;
    } else {
        resultAvgSentenceLength.innerText = `${Math.round(avgSentenceLength)} words`;
    }
    
})