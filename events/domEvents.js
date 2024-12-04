import { deleteTerm, getSingleTerm, getVocabTerms } from '../api/vocabTermsData';
import form from '../forms/vocabTermsForm';
import showVocabTerms from '../pages/vocabTerms';

const domEvents = (user) => {
  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-term-btn')) {
      console.warn('CLICKED DELETE term', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      deleteTerm(firebaseKey).then(() => {
        getVocabTerms(user.uid).then(showVocabTerms);
      });
    }
    if (e.target.id.includes('edit-term-btn')) {
      console.warn('CLICKED EDIT term', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then((termObj) => form(user, termObj));
    }
  });
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('createNewTerm')) {
      console.warn('CLICKED CREATE term', e.target.id);
      form(user);
    }
  });
};

export default domEvents;
