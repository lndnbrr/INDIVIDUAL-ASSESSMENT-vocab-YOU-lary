import { deleteTerm, getSingleTerm, getVocabTerms } from '../api/vocabTermsData';
import form from '../forms/vocabTermsForm';
import showVocabTerms from '../pages/vocabTerms';

const domEvents = () => {
  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-term-btn')) {
      console.warn('CLICKED DELETE term', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      deleteTerm(firebaseKey).then(() => {
        getVocabTerms().then(showVocabTerms);
      });
    }
    if (e.target.id.includes('edit-term-btn')) {
      console.warn('CLICKED EDIT term', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then((termObj) => form(termObj));
    }
  });
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('createNewTerm')) {
      console.warn('CLICKED CREATE term', e.target.id);
      form();
    }
  });
};

export default domEvents;
