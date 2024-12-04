import {
  filterByCss, filterByHtml, filterByJs, getVocabTerms
} from '../api/vocabTermsData';
import showVocabTerms from '../pages/vocabTerms';

const navigationEvents = (user) => {
  document.querySelector('#allLanguagesButton').addEventListener('click', () => {
    console.warn('all clicked');
    getVocabTerms(user.uid).then(showVocabTerms);
  });

  document.querySelector('#cssLanguagesButton').addEventListener('click', () => {
    console.warn('css clicked');
    filterByCss(user.uid).then(showVocabTerms);
  });

  document.querySelector('#htmlLanguagesButton').addEventListener('click', () => {
    console.warn('html clicked');
    filterByHtml(user.uid).then(showVocabTerms);
  });

  document.querySelector('#jsLanguagesButton').addEventListener('click', () => {
    console.warn('js clicked');
    filterByJs(user.uid).then(showVocabTerms);
  });
};

export default navigationEvents;
