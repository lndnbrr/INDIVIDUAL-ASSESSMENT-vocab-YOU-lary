import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showVocabTerms = (termsArray) => {
  clearDom();

  let domString = '';

  termsArray.forEach((term) => {
    domString += `
  <div id="vocabCardBody" class="card">
    <div id="vocabCardTitle"> ${term.vocabName}</div>
    <div id="vocabCardLanguage"> Language: <em> ${term.languageId} </em></div>
    <div id="vocabCardDefinition"> ${term.vocabDef}</div>
    <div id="vocabCardButtons">
      <button type="button" class="btn btn-outline-warning mar" id="edit-term-btn--${term.firebaseKey}">edit</button>
      <button type="button" class="btn btn-outline-danger mar" id="delete-term-btn--${term.firebaseKey}">delete</button>
    </div>
  </div>`;
  });

  renderToDOM('#vocabTermsContent', domString);
};

export default showVocabTerms;
