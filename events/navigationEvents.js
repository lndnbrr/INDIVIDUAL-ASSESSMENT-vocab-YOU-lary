import {
  filterByCss, filterByHtml, filterByJs, getVocabTerms
} from '../api/vocabTermsData';
import showVocabTerms from '../pages/vocabTerms';

const navigationEvents = () => {
  document.querySelector('#allLanguagesButton').addEventListener('click', () => {
    console.warn('all clicked');
    getVocabTerms().then(showVocabTerms);
  });

  document.querySelector('#cssLanguagesButton').addEventListener('click', () => {
    console.warn('css clicked');
    filterByCss().then(showVocabTerms);
  });

  document.querySelector('#htmlLanguagesButton').addEventListener('click', () => {
    console.warn('html clicked');
    filterByHtml().then(showVocabTerms);
  });

  document.querySelector('#jsLanguagesButton').addEventListener('click', () => {
    console.warn('js clicked');
    filterByJs().then(showVocabTerms);
  });
};

export default navigationEvents;
