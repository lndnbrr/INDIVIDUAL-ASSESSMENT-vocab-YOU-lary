import { getVocabTerms, updateTerm, createTerm } from '../api/vocabTermsData';
import showVocabTerms from '../pages/vocabTerms';

const formEvents = (user) => {
  document.querySelector('#vocabTermsCreateForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submitNewTerm')) {
      console.warn('CLICKED SUBMIT Term', e.target.id);
      const payload = {
        vocabName: document.querySelector('#termTitle').value,
        vocabDef: document.querySelector('#termDefinition').value,
        languageId: document.querySelector('#language_id').value,
        uid: user.uid
      };

      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTerm(patchPayload).then(() => {
          getVocabTerms(user.uid).then(showVocabTerms);
        });
      });
    }

    if (e.target.id.includes('edit-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        vocabName: document.querySelector('#termTitle').value,
        vocabDef: document.querySelector('#termDefinition').value,
        languageId: document.querySelector('#language_id').value,
        firebaseKey,
      };

      updateTerm(payload).then(() => {
        getVocabTerms(user.uid).then(showVocabTerms);
      });
    }
  });
};

export default formEvents;
