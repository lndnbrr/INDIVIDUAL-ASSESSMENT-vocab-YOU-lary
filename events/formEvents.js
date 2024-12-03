import { getVocabTerms, updateTerm, createTerm } from '../api/vocabTermsData';
import showVocabTerms from '../pages/vocabTerms';

const formEvents = () => {
  document.querySelector('#vocabTermsCreateForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submitNewTerm')) {
      console.warn('CLICKED SUBMIT Term', e.target.id);
      const payload = {
        vocabName: document.querySelector('#termTitle').value,
        vocabDef: document.querySelector('#termDefinition').value,
        languageId: document.querySelector('#language_id').value,
        uid: ''
      };

      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTerm(patchPayload).then(() => {
          getVocabTerms().then(showVocabTerms);
        });
      });
    }

    if (e.target.id.includes('edit-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        vocabName: document.querySelector('#termTitle').value,
        vocabDef: document.querySelector('#termDefinition').value,
        languageId: document.querySelector('#language_id').value,
        uid: '',
        firebaseKey,
      };

      updateTerm(payload).then(() => {
        getVocabTerms().then(showVocabTerms);
      });
    }
  });
};

export default formEvents;
